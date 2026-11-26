import React, { useState, useRef, useEffect } from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function GallerySection() {
  const photos = weddingConfig.gallery;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const touchStartXRef = useRef(null);

  const changePhoto = (newIdx) => {
    let target = newIdx;
    if (target < 0) target = photos.length - 1;
    if (target >= photos.length) target = 0;

    setImgOpacity(0.3);
    setTimeout(() => {
      setCurrentIdx(target);
      setImgOpacity(1);
    }, 150);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    if (e.changedTouches && e.changedTouches[0]) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      if (deltaX > 40) {
        changePhoto(currentIdx - 1);
      } else if (deltaX < -40) {
        changePhoto(currentIdx + 1);
      }
    }
    touchStartXRef.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      changePhoto(currentIdx - 1);
    } else if (e.key === 'ArrowRight') {
      changePhoto(currentIdx + 1);
    } else if (e.key === 'Escape' && lightboxOpen) {
      setLightboxOpen(false);
    }
  };

  const currentPhoto = photos[currentIdx];
  const progressPercent = ((currentIdx + 1) / photos.length) * 100;
  const counterText = `${String(currentIdx + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;

  return (
    <section className="gallery-section" id="gallerySection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">Timeless Moments</p>
        <h2 className="section-main-title">Moments of Love &amp; Grace</h2>
        <p className="section-subtitle" style={{ color: '#dea645', fontSize: '0.95rem', marginTop: '0.35rem', letterSpacing: '1px' }}>
          Suruchi &amp; Shubham
        </p>
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
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Main Photo Viewport with Tap-to-Zoom */}
        <div 
          className="gallery-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setLightboxOpen(true)}
          title="Tap to view fullscreen"
          style={{ cursor: 'zoom-in' }}
        >
          <img 
            src={currentPhoto.url} 
            alt={currentPhoto.caption} 
            id="galleryMainImg" 
            style={{ 
              opacity: imgOpacity, 
              transition: 'opacity 0.2s ease-in-out',
              objectPosition: 'center 25%'
            }}
          />
          <div className="gallery-zoom-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
            </svg>
            <span>Tap to View</span>
          </div>
        </div>

        {/* Caption & Counter Banner */}
        <div className="gallery-caption-banner">
          <div className="gallery-caption-inner-dashed" aria-hidden="true" />
          <p className="gallery-caption-title" id="galleryCaption">{currentPhoto.caption}</p>
          <p className="gallery-counter-pill" id="galleryCounter">{counterText}</p>
        </div>

        {/* Progress Bar */}
        <div className="gallery-progress-track" aria-hidden="true">
          <div 
            className="gallery-progress-fill" 
            id="galleryProgressFill" 
            style={{ width: `${progressPercent}%`, transition: 'width 0.3s ease' }} 
          />
        </div>

        {/* Navigation Arrows & 11 Arched Thumbnails */}
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
            {photos.map((item, idx) => (
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

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="gallery-lightbox-modal"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
        >
          <div 
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="gallery-lightbox-close"
              aria-label="Close modal"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            <img 
              src={currentPhoto.url} 
              alt={currentPhoto.caption} 
              className="gallery-lightbox-img" 
            />
            <div className="gallery-lightbox-info">
              <p className="gallery-lightbox-caption">{currentPhoto.caption}</p>
              <p className="gallery-lightbox-counter">{counterText}</p>
            </div>
            <div className="gallery-lightbox-nav">
              <button 
                type="button"
                className="gallery-lightbox-arrow"
                onClick={() => changePhoto(currentIdx - 1)}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button 
                type="button"
                className="gallery-lightbox-arrow"
                onClick={() => changePhoto(currentIdx + 1)}
                aria-label="Next photo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
