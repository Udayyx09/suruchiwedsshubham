import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../data/weddingConfig';

const EMBERS = [
  { left: '7%', duration: '7s', delay: '0s' },
  { left: '18%', duration: '8.6s', delay: '0.55s' },
  { left: '29%', duration: '10.2s', delay: '1.1s' },
  { left: '41%', duration: '11.8s', delay: '1.65s' },
  { left: '52%', duration: '13.4s', delay: '2.2s' },
  { left: '63%', duration: '8s', delay: '2.75s' },
  { left: '74%', duration: '9.6s', delay: '3.3s' },
  { left: '85%', duration: '11.2s', delay: '3.85s' },
  { left: '96%', duration: '12.8s', delay: '4.4s' },
  { left: '12%', duration: '7.8s', delay: '4.95s' },
  { left: '24%', duration: '9.4s', delay: '5.5s' },
  { left: '36%', duration: '11s', delay: '6.05s' },
  { left: '48%', duration: '12.6s', delay: '6.6s' },
  { left: '60%', duration: '8.2s', delay: '7.15s' },
  { left: '72%', duration: '9.8s', delay: '7.7s' },
  { left: '84%', duration: '11.4s', delay: '8.25s' }
];

export default function GateOverlay({ onOpenGate, onHeroReveal, onGateDismissed }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [gateOpened, setGateOpened] = useState(false);

  const handleOpen = () => {
    if (gateOpened) return;
    setGateOpened(true);
    setIsOpening(true);

    if (onOpenGate) {
      onOpenGate();
    }

    // t = 3.3s: Hero text begins entering
    setTimeout(() => {
      if (onHeroReveal) {
        onHeroReveal();
      }
    }, 3300);

    // t = 4.6s: Gate overlay fully dismissed & scroll unlocked
    setTimeout(() => {
      setIsHidden(true);
      document.body.classList.remove('gate-locked');
      if (onGateDismissed) {
        onGateDismissed();
      }
    }, 4600);
  };

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autoplay') === '1') {
        const timer = setTimeout(handleOpen, 200);
        return () => clearTimeout(timer);
      }
    } catch (_) {}
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  };

  const overlayClasses = [
    'gate-overlay',
    isOpening ? 'is-opening' : '',
    isHidden ? 'is-hidden' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={overlayClasses} 
      id="gateOverlay" 
      aria-label="Palace Gate Entrance"
      onClick={(e) => {
        if (!gateOpened && !e.target.closest('.tci-top-banner')) {
          handleOpen();
        }
      }}
    >
      <div className="gate-stage" id="gateStage">
        {/* Master Gate Facade */}
        <img 
          src="/assets/gate/peacock.webp" 
          alt="Royal Palace Peacock Gateway" 
          className="gate-facade-img" 
        />

        {/* Portal cutout mask behind doors */}
        <div className="gate-mask-portal" aria-hidden="true">
          <div className="gate-portal-scene">
            <img src="/assets/hero-sky.webp" alt="" className="gate-portal-sky" />
            <div className="gate-portal-sun" />
            <div className="gate-portal-light" />
          </div>
        </div>

        {/* Swinging 3D Gate Doors */}
        <img 
          src="/assets/gate/peacock-left.webp" 
          alt="Left Gate Door" 
          className="gate-door gate-door--left" 
          id="doorLeft" 
        />
        <img 
          src="/assets/gate/peacock-right.webp" 
          alt="Right Gate Door" 
          className="gate-door gate-door--right" 
          id="doorRight" 
        />

        {/* Center Seam Light Beam */}
        <div className="gate-seam-beam" id="gateSeamBeam" aria-hidden="true" />

        {/* Pulsing "TAP TO OPEN" Seal Button */}
        <button 
          type="button" 
          className="gate-seal-cta" 
          id="gateSealBtn" 
          aria-label="Open the palace gates"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          onKeyDown={handleKeyDown}
        >
          <div className="gate-seal-disc-wrap">
            <span className="gate-seal-ripple" />
            <span className="gate-seal-ripple gate-seal-ripple--2" />
            <div className="gate-seal-btn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
          </div>
          <span className="gate-seal-label">TAP TO OPEN</span>
        </button>

        {/* Ambient Vignette */}
        <div className="gate-vignette" aria-hidden="true" />

        {/* Sunlight Flood Burst Layer */}
        <div className="gate-light-flood" id="gateLightFlood" aria-hidden="true" />
      </div>

      {/* Floating Embers */}
      <div className="gate-embers-layer" id="gateEmbersLayer" aria-hidden="true">
        {EMBERS.map((emb, idx) => (
          <span 
            key={idx}
            className="gate-ember" 
            style={{ 
              left: emb.left, 
              animationDuration: emb.duration, 
              animationDelay: emb.delay 
            }} 
          />
        ))}
      </div>

      {/* Bottom Couple Title */}
      <div className="gate-bottom-names">
        <p className="gate-kicker">THE WEDDING OF</p>
        <h1 className="gate-couple-title">
          {weddingConfig.couple.bride.name} &amp; {weddingConfig.couple.groom.name}
        </h1>
      </div>
    </div>
  );
}
