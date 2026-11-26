import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const AudioWidget = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const userExplicitlyMutedRef = useRef(false);

  const playAudio = () => {
    if (!audioRef.current) return Promise.resolve(false);
    audioRef.current.volume = 0.85;
    return audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        return true;
      })
      .catch((err) => {
        console.log('Audio autoplay awaiting interaction:', err);
        return false;
      });
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleAudio = (e) => {
    if (e) {
      e.stopPropagation();
    }
    if (isPlaying) {
      userExplicitlyMutedRef.current = true;
      pauseAudio();
    } else {
      userExplicitlyMutedRef.current = false;
      playAudio();
    }
  };

  // If autoplay was restricted, unlock and play on first user tap/click on screen
  useEffect(() => {
    const handleUnlockAudio = () => {
      if (!userExplicitlyMutedRef.current && audioRef.current && audioRef.current.paused) {
        playAudio();
      }
    };

    window.addEventListener('click', handleUnlockAudio, { passive: true });
    window.addEventListener('touchstart', handleUnlockAudio, { passive: true });
    return () => {
      window.removeEventListener('click', handleUnlockAudio);
      window.removeEventListener('touchstart', handleUnlockAudio);
    };
  }, []);

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
        src="assets/audio/shehnai_sitar_royale.mp3"
        loop 
        preload="auto"
        playsInline
      >
        <source src="assets/audio/shehnai_sitar_royale.mp3" type="audio/mpeg" />
        <source src="assets/audio/shehnai_sitar_royale.mp3" type="audio/mp3" />
      </audio>

      <button 
        type="button"
        className={`royal-audio-widget ${isPlaying ? 'is-playing' : 'is-muted'}`} 
        id="musicBtn" 
        aria-label={isPlaying ? 'Mute wedding shehnai soundtrack' : 'Play wedding shehnai soundtrack'} 
        title={isPlaying ? 'Mute Music' : 'Play Music'}
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <div className="royal-audio-waves" aria-hidden="true">
            <span className="royal-audio-bar" />
            <span className="royal-audio-bar" />
            <span className="royal-audio-bar" />
            <span className="royal-audio-bar" />
          </div>
        ) : (
          <svg className="royal-audio-muted-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        )}
      </button>
    </>
  );
});

export default AudioWidget;
