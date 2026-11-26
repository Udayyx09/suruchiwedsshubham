import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function CoupleSection() {
  const { bride, groom } = weddingConfig.couple;

  return (
    <section className="couple-section" id="coupleSection">
      <div className="section-heading-group" data-reveal="up">
        <p className="section-kicker">Two Souls • One Sacred Promise</p>
        <h2 className="section-main-title">The Royal Couple</h2>
        <div className="section-ornament-divider" aria-hidden="true">
          <span className="section-ornament-line" />
          <span className="section-ornament-star">&#10070;</span>
          <span className="section-ornament-line" />
        </div>
      </div>

      <div className="couple-grid couple-grid--cards">
        {/* Bride Card */}
        <article className="couple-card" data-reveal="left">
          {bride.photo ? (
            <div className="jharokha-arch-frame" data-shutter-frame>
              <img 
                src={bride.photo} 
                alt={`${bride.fullName} portrait`} 
                loading="lazy" 
                className="jharokha-photo" 
                style={{ objectPosition: bride.photoPosition || 'center center', transform: `scale(${bride.photoScale || 1})` }} 
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
          ) : (
            <div className="couple-card-inner">
              <div className="couple-card-crest" aria-hidden="true">
                <div className="couple-crest-circle">
                  <span className="couple-crest-icon">🪷</span>
                </div>
              </div>
              <span className="couple-role-pill">{bride.role}</span>
              <h3 className="couple-name">{bride.fullName}</h3>
              <div className="couple-filigree" aria-hidden="true">
                <span>❦</span>
              </div>
            </div>
          )}
        </article>

        {/* Groom Card */}
        <article className="couple-card" data-reveal="right">
          {groom.photo ? (
            <div className="jharokha-arch-frame" data-shutter-frame>
              <img 
                src={groom.photo} 
                alt={`${groom.fullName} portrait`} 
                loading="lazy" 
                className="jharokha-photo" 
                style={{ objectPosition: groom.photoPosition || 'center center', transform: `scale(${groom.photoScale || 1})` }} 
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
          ) : (
            <div className="couple-card-inner">
              <div className="couple-card-crest" aria-hidden="true">
                <div className="couple-crest-circle">
                  <span className="couple-crest-icon">👑</span>
                </div>
              </div>
              <span className="couple-role-pill">{groom.role}</span>
              <h3 className="couple-name">{groom.fullName}</h3>
              <div className="couple-filigree" aria-hidden="true">
                <span>❦</span>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
