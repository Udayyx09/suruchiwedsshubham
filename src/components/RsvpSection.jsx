import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';

export default function RsvpSection() {
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [attendance, setAttendance] = useState('Joyfully Accept');
  const [guestWishes, setGuestWishes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const decGuest = () => {
    if (guestCount > 1) setGuestCount(guestCount - 1);
  };

  const incGuest = () => {
    if (guestCount < 10) setGuestCount(guestCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#dea645', '#f6d27a', '#9e141e', '#fff1b8', '#e0244f']
    });

    // Prepare WhatsApp Message
    const coupleText = `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;
    const waMessage = 
      `*RSVP for ${coupleText}'s Wedding*%0A%0A` +
      `*Name:* ${encodeURIComponent(guestName.trim())}%0A` +
      `*Guests:* ${guestCount}%0A` +
      `*Attendance:* ${encodeURIComponent(attendance)}%0A` +
      (guestWishes.trim() ? `*Blessings:* ${encodeURIComponent(guestWishes.trim())}%0A` : '');

    const waUrl = `https://wa.me/${weddingConfig.rsvpWhatsAppNumber}?text=${waMessage}`;

    setIsSubmitted(true);

    // Open WhatsApp after brief royal delay
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <section className="rsvp-section" id="rsvpSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">Kindly respond</p>
        <h2 className="section-main-title">RSVP</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="rsvp-card-conic" data-reveal="up">
        <div className="rsvp-card-inner">
          <div className="rsvp-polka-dots" aria-hidden="true" />
          <div className="venue-inner-border" aria-hidden="true" />
          <div className="venue-inner-dashed" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--tl" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--tr" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--bl" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--br" aria-hidden="true" />

          {/* RSVP Form Container */}
          {!isSubmitted ? (
            <div id="rsvpFormWrap">
              <h3 className="rsvp-header-title">Will you join us?</h3>
              <p className="rsvp-header-couple">
                {weddingConfig.couple.bride.name} &amp; {weddingConfig.couple.groom.name}
              </p>
              <div className="section-ornament-divider" aria-hidden="true">
                <span className="section-ornament-line" />
                <span className="section-ornament-star">&#10070;</span>
                <span className="section-ornament-line" />
              </div>

              <form className="rsvp-form" id="rsvpForm" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="guestName" className="rsvp-field-lbl">Your Name</label>
                  <input 
                    type="text" 
                    id="guestName" 
                    className="rsvp-input" 
                    placeholder="Full Name" 
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required 
                  />
                </div>

                <div>
                  <label className="rsvp-field-lbl">Number of Guests</label>
                  <div className="rsvp-stepper-box">
                    <button 
                      type="button" 
                      className="rsvp-step-btn" 
                      id="btnDecGuests" 
                      aria-label="Decrease guest count"
                      onClick={decGuest}
                    >
                      <span className="rsvp-step-btn-inner">&minus;</span>
                    </button>
                    <span className="rsvp-step-val" id="guestCountDisplay">{guestCount}</span>
                    <button 
                      type="button" 
                      className="rsvp-step-btn" 
                      id="btnIncGuests" 
                      aria-label="Increase guest count"
                      onClick={incGuest}
                    >
                      <span className="rsvp-step-btn-inner">&#43;</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="rsvp-field-lbl">Attendance</label>
                  <div className="rsvp-radio-group">
                    <label 
                      className={`rsvp-radio-label ${attendance === 'Joyfully Accept' ? 'is-selected' : ''}`} 
                      id="lblAccept"
                      onClick={() => setAttendance('Joyfully Accept')}
                    >
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="Joyfully Accept" 
                        className="rsvp-radio-input" 
                        checked={attendance === 'Joyfully Accept'}
                        onChange={() => setAttendance('Joyfully Accept')}
                      />
                      Joyfully Accept
                    </label>
                    <label 
                      className={`rsvp-radio-label ${attendance === 'Regretfully Decline' ? 'is-selected' : ''}`} 
                      id="lblDecline"
                      onClick={() => setAttendance('Regretfully Decline')}
                    >
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="Regretfully Decline" 
                        className="rsvp-radio-input" 
                        checked={attendance === 'Regretfully Decline'}
                        onChange={() => setAttendance('Regretfully Decline')}
                      />
                      Regretfully Decline
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="guestWishes" className="rsvp-field-lbl">Blessings for the Couple</label>
                  <textarea 
                    id="guestWishes" 
                    className="rsvp-input" 
                    rows="3" 
                    placeholder="Write your heartfelt wishes..."
                    value={guestWishes}
                    onChange={(e) => setGuestWishes(e.target.value)}
                  />
                </div>

                <button type="submit" className="rsvp-submit-btn">Send RSVP via WhatsApp &rarr;</button>
              </form>
            </div>
          ) : (
            /* RSVP Success State */
            <div className="rsvp-success-box" id="rsvpSuccessBox" style={{ display: 'block' }}>
              <div className="rsvp-success-seal">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="rsvp-success-title">Dhanyavaad!</h3>
              <p className="rsvp-success-msg">Your response has been received with joy.</p>
              <p className="rsvp-success-note" id="rsvpSuccessNote">
                {attendance === 'Joyfully Accept'
                  ? `We look forward to celebrating with you on ${weddingConfig.dates.displayRange}.`
                  : 'You will be missed, and remembered in our prayers.'}
              </p>
              <button 
                type="button" 
                onClick={() => setIsSubmitted(false)}
                className="scroll-map-btn" 
                style={{ marginTop: '1.5rem', display: 'inline-block' }}
              >
                Submit another RSVP
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
