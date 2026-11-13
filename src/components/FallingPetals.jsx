import React from 'react';

const PETALS = [
  { left: '5%', duration: '12s', delay: '0s', size: 22, color: '#e0244f' },
  { left: '19%', duration: '14s', delay: '1.5s', size: 18, color: '#8e0d2c' },
  { left: '33%', duration: '16s', delay: '3s', size: 24, color: '#e0244f' },
  { left: '47%', duration: '13s', delay: '0.8s', size: 20, color: '#ff7f98' },
  { left: '61%', duration: '15s', delay: '2.4s', size: 22, color: '#8e0d2c' },
  { left: '75%', duration: '17s', delay: '4s', size: 26, color: '#e0244f' },
  { left: '89%', duration: '14s', delay: '1.2s', size: 19, color: '#ff7f98' }
];

export default function FallingPetals() {
  return (
    <div className="falling-petals-layer" aria-hidden="true">
      {PETALS.map((p, idx) => (
        <span 
          key={idx}
          className="petal-item" 
          style={{ 
            left: p.left, 
            animationDuration: p.duration, 
            animationDelay: p.delay 
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24">
            <path 
              d="M12 2 C 19 5 22 12 18 18 C 15 22 9 22 6 18 C 2 12 5 5 12 2 Z" 
              fill={p.color} 
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
