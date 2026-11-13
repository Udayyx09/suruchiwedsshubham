import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const AudioWidget = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log('Autoplay blocked or waiting for user interaction:', err);
    });
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  useImperativeHandle(ref, () => ({
    play: playAudio,
    pause: pauseAudio,
    toggle: toggleAudio,
    isPlaying
  }));

  return (
    <>
      <audio 
        ref={audioRef} 
        id="royalSoundtrack" 
        loop 
        preload="auto"
      >
        <source src="/assets/audio/shehnai_sitar_royale.mp3" type="audio/mp3" />
      </audio>

      <div 
        className={`royal-audio-widget ${isPlaying ? 'is-playing' : ''}`} 
        id="musicBtn" 
        role="button" 
        aria-label="Toggle wedding music" 
        tabIndex={0}
        onClick={toggleAudio}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAudio();
          }
        }}
      >
        <div className="royal-audio-disc" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <div className="royal-audio-waves" aria-hidden="true">
          <span className="royal-audio-bar" />
          <span className="royal-audio-bar" />
          <span className="royal-audio-bar" />
          <span className="royal-audio-bar" />
        </div>
        <span className="royal-audio-text" id="musicStatus">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
      </div>
    </>
  );
});

export default AudioWidget;
