import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function LogisticsSection() {
  const { contacts, advisory } = weddingConfig;

  return (
    <section className="logistics-section" id="logisticsSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">For any assistance &amp; inquiries</p>
        <h2 className="section-main-title">Contact Us</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="contact-cards-grid">
        {contacts.map((contact, idx) => (
          <div 
            key={idx} 
            className="contact-card" 
            data-reveal={idx % 2 === 0 ? 'left' : 'right'}
          >
            <h3 className="contact-card-name">{contact.name}</h3>
            <p className="contact-card-rel">{contact.role}</p>
            <p className="contact-card-phone">{contact.phone}</p>
            <div className="contact-btn-row">
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="contact-pill-call">
                &#128222; Call
              </a>
              <a 
                href={`https://wa.me/${contact.waNumber}?text=Hi%2C%20regarding%20Suruchi%20and%20Shubham's%20wedding...`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-pill-wa"
              >
                &#128172; WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory 4-Card Grid */}
      <div className="advisory-grid">
        {advisory.map((item, idx) => (
          <article key={idx} className="advisory-card" data-reveal="up">
            <div className="advisory-header">
              <span className="advisory-icon-disc">{item.icon}</span>
              <h4 className="advisory-title">{item.title}</h4>
            </div>
            <p className="advisory-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
