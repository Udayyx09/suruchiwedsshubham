import React, { useEffect, useRef } from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function CeremoniesTimeline() {
  const timelineWrapRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const updateCar = () => {
      const wrap = timelineWrapRef.current;
      const car = carRef.current;
      if (!wrap || !car) return;

      const wrapRect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;

      // Target screen anchor: car sits elegantly in upper-middle of screen (44% vh)
      // perfectly matching the visual reading center of unrolling ceremony scrolls
      const targetScreenY = vh * 0.44;
      const carHeight = car.offsetHeight || 80;
      // Let the car drive from start of track down to the final ceremony bullet
      const maxTravel = Math.max(0, wrapRect.height - carHeight - 20);

      let carY = targetScreenY - wrapRect.top;
      if (carY < 0) carY = 0;
      if (carY > maxTravel) carY = maxTravel;

      car.style.transform = `translate3d(-50%, ${Math.round(carY)}px, 0)`;
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateCar();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateCar();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="ceremonies-section" id="ceremoniesSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">3 days of celebrations</p>
        <h2 className="section-main-title">Wedding Celebrations</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="ceremonies-timeline-wrap" id="ceremoniesTimeline" ref={timelineWrapRef}>
        {/* Central Timeline Track */}
        <div className="timeline-vertical-line" aria-hidden="true" />

        {/* Driving Timeline Car Tracker */}
        <div 
          className="timeline-car-tracker" 
          id="timelineCarTracker" 
          aria-hidden="true"
          ref={carRef}
        >
          <img src="assets/timeline-car.webp" alt="Wedding Procession Car" />
        </div>

        <ul className="ceremonies-list">
          {weddingConfig.ceremonies.map((ceremony, idx) => (
            <li key={idx} className="ceremony-row">
              <span className="timeline-bullet" aria-hidden="true" />
              <div className="ceremony-scroll-col">
                <article className="unrolling-scroll-card" data-unroll-card>
                  <img 
                    src="assets/scroll/top.webp" 
                    alt="" 
                    className="scroll-top-roller" 
                    aria-hidden="true" 
                  />
                  <div className="scroll-body-layer">
                    <img 
                      src="assets/scroll/body.webp" 
                      alt="" 
                      className="scroll-body-bg" 
                      aria-hidden="true" 
                    />
                    <div className="scroll-body-content">
                      <p className="scroll-event-tag">{ceremony.eventTag}</p>
                      <span className="scroll-event-icon" aria-hidden="true">{ceremony.icon}</span>
                      <h3 className="scroll-event-title">{ceremony.title}</h3>
                      <p className="scroll-event-note">{ceremony.note}</p>
                      <div className="scroll-gold-divider" aria-hidden="true">
                        <span className="scroll-gold-divider-line" />
                        <span>&#10070;</span>
                        <span className="scroll-gold-divider-line" />
                      </div>
                      <p className="scroll-meta-line">&#128197; {ceremony.date}</p>
                      <p className="scroll-meta-line">&#128338; {ceremony.time}</p>
                      {ceremony.dressCode && (
                        <p className="scroll-meta-line scroll-dress-line">
                          &#128087; Dress Code: <strong style={{ color: '#ffe494' }}>{ceremony.dressCode}</strong>
                        </p>
                      )}
                      <p className="scroll-venue-line">&#128205; {ceremony.venue}</p>
                      <a 
                        href={ceremony.mapLink || weddingConfig.homeLocationLink || 'https://maps.app.goo.gl/vLZiko55cekM32is6'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="scroll-map-btn"
                      >
                        Get Directions &#8594;
                      </a>
                    </div>
                  </div>
                  <img 
                    src="assets/scroll/bottom.webp" 
                    alt="" 
                    className="scroll-bottom-roller" 
                    aria-hidden="true" 
                  />
                </article>
              </div>
              <p className="ceremony-date-callout">{ceremony.dateCallout}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
