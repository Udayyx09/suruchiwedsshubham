import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function VenueSection() {
  const { venue } = weddingConfig;

  return (
    <section className="venue-section" id="venueSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">Where hearts unite</p>
        <h2 className="section-main-title">The Wedding Venue</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="venue-card-conic" data-reveal="up">
        <div className="venue-card-inner">
          <div className="venue-inner-border" aria-hidden="true" />
          <div className="venue-inner-dashed" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--tl" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--tr" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--bl" aria-hidden="true" />
          <span className="conic-corner-ruby conic-corner-ruby--br" aria-hidden="true" />

          {/* Left Info Side */}
          <div className="venue-info-side">
            <p className="venue-sub-join">Join us at</p>
            <h3 className="venue-name-title">{venue.name}</h3>
            <div className="section-ornament-divider" style={{ justifyContent: 'flex-start', marginTop: '0.75rem' }} aria-hidden="true">
              <span className="section-ornament-line" style={{ width: '48px' }} />
              <span className="section-ornament-star">&#10070;</span>
              <span className="section-ornament-line" style={{ width: '48px' }} />
            </div>

            <ul className="venue-details-list">
              <li className="venue-detail-item">
                <div className="venue-detail-medallion">
                  <div className="venue-detail-medallion-inner">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="venue-detail-lbl">Address</span>
                  <span className="venue-detail-val">{venue.fullAddress}</span>
                </div>
              </li>
              <li className="venue-detail-item">
                <div className="venue-detail-medallion">
                  <div className="venue-detail-medallion-inner">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="venue-detail-lbl">Date</span>
                  <span className="venue-detail-val">{venue.dateText}</span>
                </div>
              </li>
              <li className="venue-detail-item">
                <div className="venue-detail-medallion">
                  <div className="venue-detail-medallion-inner">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="venue-detail-lbl">Ceremony Timing</span>
                  <span className="venue-detail-val">{venue.ceremonyMuhurat}</span>
                </div>
              </li>
            </ul>

            <a 
              href={venue.mapLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="venue-directions-btn"
            >
              <span>Open in Google Maps</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>

          {/* Right Map Embed Frame */}
          <div className="venue-map-stage">
            <iframe 
              className="venue-map-iframe" 
              title="Vani Banquet Hall & Marriage Garden Location" 
              src={venue.embedUrl} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
            />
            {/* Brass Compass Rose */}
            <div className="venue-compass-rose" aria-hidden="true">
              <svg viewBox="-50 -50 100 100">
                <circle r="46" fill="rgba(40,4,2,0.65)" stroke="#f6d27a" strokeWidth="2"/>
                <circle r="40" fill="none" stroke="#f6d27a" strokeWidth="0.8" strokeDasharray="1 4"/>
                <path d="M0 -38 L6 0 L0 6 L-6 0 Z" fill="#e3354f" stroke="#6b3d07" strokeWidth="0.6"/>
                <path d="M0 -38 L6 0 L0 6 L-6 0 Z" transform="rotate(90)" fill="#f6d27a" stroke="#6b3d07" strokeWidth="0.6"/>
                <path d="M0 -38 L6 0 L0 6 L-6 0 Z" transform="rotate(180)" fill="#f6d27a" stroke="#6b3d07" strokeWidth="0.6"/>
                <path d="M0 -38 L6 0 L0 6 L-6 0 Z" transform="rotate(270)" fill="#f6d27a" stroke="#6b3d07" strokeWidth="0.6"/>
                <circle r="4" fill="#fff1b8" stroke="#6b3d07" strokeWidth="0.6"/>
                <text y="-41" textAnchor="middle" fontSize="9" fill="#fff1b8" fontFamily="serif">N</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
