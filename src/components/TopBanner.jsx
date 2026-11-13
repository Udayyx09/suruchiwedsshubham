import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function TopBanner() {
  const coupleText = `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;

  return (
    <aside className="tci-top-banner" id="tciPreviewBar" aria-label="Website preview controls">
      <div className="tci-brand-group">
        <span className="tci-logo-badge">S&amp;S</span>
        <span className="tci-title-text">{coupleText} &bull; Royal Wedding Invitation</span>
      </div>
      <div className="tci-actions-group">
        <button 
          type="button" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="tci-btn-catalog"
          title="Scroll to beginning"
        >
          &#8593; Gate Entrance
        </button>
        <a 
          href={`https://wa.me/${weddingConfig.rsvpWhatsAppNumber}?text=Hi%20Dashrath%20Singh%20ji,%20heartiest%20congratulations%20on%20Suruchi%20and%20Shubham's%20wedding!`} 
          className="tci-btn-whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>Send Blessings</span>
        </a>
      </div>
    </aside>
  );
}
