import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function CoupleSection() {
  const { bride, groom } = weddingConfig.couple;
  const { familyElder1, familyElder2 } = weddingConfig.elders;

  return (
    <section className="couple-section" id="coupleSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">With the blessings of our elders</p>
        <h2 className="section-main-title">The Wedding Couple</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="couple-grid">
        {/* Bride Card with Shutter Reveal */}
        <article className="couple-card" data-reveal="left">
          <div className="jharokha-arch-frame" data-shutter-frame>
            <img 
              src={bride.photo} 
              alt={`${bride.fullName} portrait`} 
              loading="lazy" 
              className="jharokha-photo" 
              style={{ objectPosition: bride.photoPosition, transform: `scale(${bride.photoScale})` }} 
            />
            <div className="jharokha-inner-shadow" aria-hidden="true" />

            {/* Authentic Carved Jali Shutter Door Leaves */}
            <div className="jharokha-shutter jharokha-shutter--left" aria-hidden="true">
              <div className="jharokha-shutter-border" />
              <div className="jharokha-shutter-handle jharokha-shutter-handle--left" />
            </div>
            <div className="jharokha-shutter jharokha-shutter--right" aria-hidden="true">
              <div className="jharokha-shutter-border" />
              <div className="jharokha-shutter-handle jharokha-shutter-handle--right" />
            </div>
          </div>
          <p className="couple-role">{bride.role}</p>
          <h3 className="couple-name">{bride.fullName}</h3>
          <p className="couple-parents">{bride.parents}</p>
        </article>

        {/* Groom Card with Shutter Reveal */}
        <article className="couple-card" data-reveal="right">
          <div className="jharokha-arch-frame" data-shutter-frame>
            <img 
              src={groom.photo} 
              alt={`${groom.fullName} portrait`} 
              loading="lazy" 
              className="jharokha-photo" 
              style={{ objectPosition: groom.photoPosition, transform: `scale(${groom.photoScale})` }} 
            />
            <div className="jharokha-inner-shadow" aria-hidden="true" />

            {/* Authentic Carved Jali Shutter Door Leaves */}
            <div className="jharokha-shutter jharokha-shutter--left" aria-hidden="true">
              <div className="jharokha-shutter-border" />
              <div className="jharokha-shutter-handle jharokha-shutter-handle--left" />
            </div>
            <div className="jharokha-shutter jharokha-shutter--right" aria-hidden="true">
              <div className="jharokha-shutter-border" />
              <div className="jharokha-shutter-handle jharokha-shutter-handle--right" />
            </div>
          </div>
          <p className="couple-role">{groom.role}</p>
          <h3 className="couple-name">{groom.fullName}</h3>
          <p className="couple-parents">{groom.parents}</p>
        </article>
      </div>

      {/* Ancestral Grace (Elders) with Shutter Reveals */}
      <div className="elders-section">
        <div className="elders-grid">
          {/* Elder 1 */}
          <article className="elder-card" data-reveal="left">
            <div className="elder-jharokha-box" data-shutter-frame>
              <img 
                src={familyElder1.photo} 
                alt={familyElder1.name} 
                loading="lazy" 
                className="jharokha-photo" 
              />
              <div className="jharokha-inner-shadow" aria-hidden="true" />

              <div className="jharokha-shutter jharokha-shutter--left" aria-hidden="true">
                <div className="jharokha-shutter-border" />
                <div className="jharokha-shutter-handle jharokha-shutter-handle--left" />
              </div>
              <div className="jharokha-shutter jharokha-shutter--right" aria-hidden="true">
                <div className="jharokha-shutter-border" />
                <div className="jharokha-shutter-handle jharokha-shutter-handle--right" />
              </div>
            </div>
            <span className="elder-ribbon-badge">{familyElder1.badge}</span>
            <h4 className="elder-name">{familyElder1.name}</h4>
            <p className="elder-blessing">{familyElder1.blessing}</p>
          </article>

          {/* Elder 2 */}
          <article className="elder-card" data-reveal="right">
            <div className="elder-jharokha-box" data-shutter-frame>
              <img 
                src={familyElder2.photo} 
                alt={familyElder2.name} 
                loading="lazy" 
                className="jharokha-photo" 
              />
              <div className="jharokha-inner-shadow" aria-hidden="true" />

              <div className="jharokha-shutter jharokha-shutter--left" aria-hidden="true">
                <div className="jharokha-shutter-border" />
                <div className="jharokha-shutter-handle jharokha-shutter-handle--left" />
              </div>
              <div className="jharokha-shutter jharokha-shutter--right" aria-hidden="true">
                <div className="jharokha-shutter-border" />
                <div className="jharokha-shutter-handle jharokha-shutter-handle--right" />
              </div>
            </div>
            <span className="elder-ribbon-badge">{familyElder2.badge}</span>
            <h4 className="elder-name">{familyElder2.name}</h4>
            <p className="elder-blessing">{familyElder2.blessing}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
