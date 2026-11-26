import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../data/weddingConfig';

const TARGET_DATE = new Date(weddingConfig.dates.targetCountdownISO).getTime();

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00'
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(TARGET_DATE - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0')
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" id="countdownSection">
      <div className="rosette-separator" aria-hidden="true" data-reveal="up">
        <img src="assets/jewel-rosette.webp" alt="" loading="lazy" />
      </div>

      <div className="countdown-wrap" data-reveal="up">
        <div className="countdown-family-aura" aria-hidden="true" />
        <p className="countdown-kicker-families">{weddingConfig.hosts.parents}</p>
        <p className="countdown-request-text">
          {weddingConfig.hosts.tagline} <strong>{weddingConfig.couple.bride.name}</strong> and <strong>{weddingConfig.couple.groom.name}</strong> {weddingConfig.subtitle}
        </p>

        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>

        <p className="countdown-subtitle-moments">Counting the auspicious moments</p>

        <div className="countdown-grid" role="timer" aria-label="Wedding countdown timer">
          <div className="countdown-tile">
            <span className="countdown-num" id="cdDays">{timeLeft.days}</span>
            <span className="countdown-lbl">Days</span>
          </div>
          <div className="countdown-tile">
            <span className="countdown-num" id="cdHours">{timeLeft.hours}</span>
            <span className="countdown-lbl">Hours</span>
          </div>
          <div className="countdown-tile">
            <span className="countdown-num" id="cdMins">{timeLeft.mins}</span>
            <span className="countdown-lbl">Minutes</span>
          </div>
          <div className="countdown-tile countdown-tile--pulse">
            <span className="countdown-num" id="cdSecs">{timeLeft.secs}</span>
            <span className="countdown-lbl">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
