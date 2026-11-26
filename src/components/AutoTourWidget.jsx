import React from 'react';

export default function AutoTourWidget({ 
  isActive, 
  isVisible, 
  onToggle 
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`royal-autoscroll-widget ${isActive ? 'is-touring' : 'is-paused'}`}
      id="autoTourBtn"
      role="button"
      tabIndex={0}
      aria-label={isActive ? 'Pause royal auto-tour' : 'Resume royal auto-tour'}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }
      }}
    >
      <div className="royal-tour-icon" aria-hidden="true">
        {isActive ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginLeft: '2px' }}>
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </div>
      <span className="royal-tour-text">
        {isActive ? 'Touring' : 'Auto Tour'}
      </span>
      {isActive && <span className="royal-tour-dot" aria-hidden="true" />}
    </div>
  );
}
