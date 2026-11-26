import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function HeroSection({ isRevealed }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset || document.documentElement.scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const isWithinHero = scrollY < vh * 1.5;

  const skyTransform = isWithinHero ? `translate3d(0, ${scrollY * 0.16}px, 0)` : undefined;
  const palaceTransform = isWithinHero ? `translate3d(0, ${scrollY * -0.06}px, 0)` : undefined;
  const sunTransform = isWithinHero ? `translate3d(-50%, calc(-50% + ${scrollY * 0.1}px), 0)` : undefined;
  
  const textTransform = isWithinHero && isRevealed ? `translate3d(0, ${scrollY * 0.22}px, 0)` : undefined;
  const textOpacity = isWithinHero && isRevealed ? Math.max(0, 1 - scrollY / (vh * 0.75)) : undefined;

  return (
    <header className="royal-hero" id="heroSection">
      <div className="hero-sky-wrap" aria-hidden="true">
        <div className="hero-sky-gradient" />
        <div 
          className="hero-sky-img-box" 
          id="heroSkyBox"
          style={{ transform: skyTransform }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet="assets/hero-sky.webp" />
            <img src="assets/hero-sky.webp" alt="" className="hero-sky-img" />
          </picture>
        </div>
        <div className="hero-sun-rays" />
        <div className="hero-amber-aura" />
        <div className="hero-amber-melt" />
      </div>

      <div 
        className={`hero-text-container ${isRevealed ? 'is-revealed' : ''}`} 
        id="heroTextContainer"
        style={{
          transform: textTransform,
          opacity: textOpacity
        }}
      >
        <p className="hero-kicker-shubh hero-stagger-item">{weddingConfig.invocation}</p>
        <h1 className="hero-couple-name hero-stagger-item">{weddingConfig.couple.bride.name}</h1>
        <p className="hero-ampersand hero-stagger-item">&amp;</p>
        <h1 className="hero-couple-name hero-stagger-item">{weddingConfig.couple.groom.name}</h1>
      </div>

      <div 
        className="hero-palace-wrapper" 
        id="heroPalaceWrapper"
        style={{ transform: palaceTransform }}
      >
        <div className="hero-palace-inner">
          <div 
            className="hero-sun-disc-box" 
            id="heroSunDiscBox" 
            aria-hidden="true"
            style={{ transform: sunTransform }}
          >
            <div className="hero-sun-disc" />
          </div>
          <picture>
            <source media="(max-width: 768px)" srcSet="assets/grand-palace-1000.webp" />
            <img 
              src="assets/grand-palace.webp" 
              alt="Grand Rajasthani palace gate" 
              className="hero-palace-img" 
              width="1734" 
              height="899" 
            />
          </picture>
          <div className="hero-palace-sheen-box" aria-hidden="true">
            <div className="hero-palace-sheen-bar" />
          </div>
        </div>
      </div>

      <div className="hero-badge-wrap" id="heroBadgeWrap">
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
        <div className="hero-date-pill" style={{ marginTop: '1.25rem' }}>
          <p className="hero-date-text">{weddingConfig.dates.heroDate}</p>
          <p className="hero-venue-text">{weddingConfig.dates.venueLine}</p>
        </div>
        <a 
          href="#countdownSection" 
          className="hero-scroll-prompt" 
          aria-label="Scroll to invitation details"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('countdownSection')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
