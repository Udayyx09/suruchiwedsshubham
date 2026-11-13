import React, { useState } from 'react';

const GALLERY_DATA = [
  { url: '/assets/gallery/couple.jpg', caption: 'The Royal Couple' },
  { url: '/assets/gallery/courtyard.jpg', caption: 'The Palace Courtyard' },
  { url: '/assets/gallery/mandap.jpg', caption: 'The Wedding Mandap' },
  { url: '/assets/gallery/haldi.jpg', caption: 'Haldi Morning' },
  { url: '/assets/gallery/lake.jpg', caption: 'Lakeside Evening' },
  { url: '/assets/gallery/jharokha.jpg', caption: 'The Jharokha' },
  { url: '/assets/gallery/gate.jpg', caption: 'The Palace Gates' }
];

export default function GallerySection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);

  const changePhoto = (newIdx) => {
    let target = newIdx;
    if (target < 0) target = GALLERY_DATA.length - 1;
    if (target >= GALLERY_DATA.length) target = 0;

    setImgOpacity(0);
    setTimeout(() => {
      setCurrentIdx(target);
      setImgOpacity(1);
    }, 150);
  };

  const currentPhoto = GALLERY_DATA[currentIdx];
  const progressPercent = ((currentIdx + 1) / GALLERY_DATA.length) * 100;
  const counterText = `${String(currentIdx + 1).padStart(2, '0')} / ${String(GALLERY_DATA.length).padStart(2, '0')}`;

  return (
    <section className="gallery-section" id="gallerySection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">Timeless Moments</p>
        <h2 className="section-main-title">Gilded Palace Memories</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div 
        className="gallery-carousel-stage" 
        role="region" 
        aria-roledescription="carousel" 
        aria-label="Wedding photo memories" 
        data-reveal="up"
      >
        <div className="gallery-viewport">
          <img 
            src={currentPhoto.url} 
            alt={currentPhoto.caption} 
            id="galleryMainImg" 
            style={{ opacity: imgOpacity, transition: 'opacity 0.2s ease-in-out' }}
          />
        </div>

        <div className="gallery-caption-banner">
          <div className="gallery-caption-inner-dashed" aria-hidden="true" />
          <p className="gallery-caption-title" id="galleryCaption">{currentPhoto.caption}</p>
          <p className="gallery-counter-pill" id="galleryCounter">{counterText}</p>
        </div>

        <div className="gallery-progress-track" aria-hidden="true">
          <div 
            className="gallery-progress-fill" 
            id="galleryProgressFill" 
            style={{ width: `${progressPercent}%`, transition: 'width 0.3s ease' }} 
          />
        </div>

        <div className="gallery-controls-row">
          <button 
            type="button" 
            className="gallery-nav-arrow" 
            id="galPrevBtn" 
            aria-label="Previous photo"
            onClick={() => changePhoto(currentIdx - 1)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="gallery-thumbs-group" id="galleryThumbs">
            {GALLERY_DATA.map((item, idx) => (
              <button 
                key={idx}
                type="button" 
                className={`gallery-thumb-btn ${idx === currentIdx ? 'is-active' : ''}`} 
                aria-label={`Photo ${idx + 1}: ${item.caption}`}
                onClick={() => changePhoto(idx)}
              >
                <img src={item.url} alt="" loading="lazy" />
              </button>
            ))}
          </div>

          <button 
            type="button" 
            className="gallery-nav-arrow" 
            id="galNextBtn" 
            aria-label="Next photo"
            onClick={() => changePhoto(currentIdx + 1)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
