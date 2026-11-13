import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function CeremoniesTimeline() {
  const timelineWrapRef = useRef(null);
  const [carTop, setCarTop] = useState('0%');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (timelineWrapRef.current) {
            const wrapRect = timelineWrapRef.current.getBoundingClientRect();
            const wrapTop = wrapRect.top;
            const wrapHeight = wrapRect.height;
            const vh = window.innerHeight;

            const travelStart = vh * 0.7;
            const totalDistance = wrapHeight;
            const currentY = travelStart - wrapTop;
            const travelProgress = Math.min(Math.max(currentY / totalDistance, 0), 1);

            setCarTop(`${travelProgress * 92}%`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
          style={{ top: carTop }}
        >
          <img src="/assets/timeline-car.webp" alt="Wedding Procession Car" />
        </div>

        <ul className="ceremonies-list">
          {weddingConfig.ceremonies.map((ceremony, idx) => (
            <li key={idx} className="ceremony-row">
              <span className="timeline-bullet" aria-hidden="true" />
              <div className="ceremony-scroll-col">
                <article className="unrolling-scroll-card" data-unroll-card>
                  <img 
                    src="/assets/scroll/top.webp" 
                    alt="" 
                    className="scroll-top-roller" 
                    aria-hidden="true" 
                  />
                  <div className="scroll-body-layer">
                    <img 
                      src="/assets/scroll/body.webp" 
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
                      <p className="scroll-venue-line">&#128205; {ceremony.venue}</p>
                      <a 
                        href={`https://maps.google.com/?q=${ceremony.mapQuery}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="scroll-map-btn"
                      >
                        Get Directions &#8594;
                      </a>
                    </div>
                  </div>
                  <img 
                    src="/assets/scroll/bottom.webp" 
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
