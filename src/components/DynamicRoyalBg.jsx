import React from 'react';

export default function DynamicRoyalBg() {
  return (
    <div className="royal-dynamic-bg" aria-hidden="true">
      <div className="royal-bg-radial" />
      <div className="royal-bg-orb-pink" />
      <div className="royal-bg-orb-gold" />
      <div className="royal-bg-jali" />
      <div className="royal-bg-frame" />
      <div className="royal-bg-frame-inner" />
      <span className="royal-bg-corner royal-bg-corner--tl">&#10070;</span>
      <span className="royal-bg-corner royal-bg-corner--tr">&#10070;</span>
      <span className="royal-bg-corner royal-bg-corner--bl">&#10070;</span>
      <span className="royal-bg-corner royal-bg-corner--br">&#10070;</span>
      <div className="mandala-corner mandala-corner--tr">
        <img src="/assets/blue-mandala.webp" alt="" loading="lazy" />
      </div>
      <div className="mandala-corner mandala-corner--bl">
        <img src="/assets/blue-mandala.webp" alt="" loading="lazy" />
      </div>
    </div>
  );
}
