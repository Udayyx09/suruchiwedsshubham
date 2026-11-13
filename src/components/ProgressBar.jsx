import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight - vh;
      if (docH > 0) {
        const progress = Math.min(Math.max(scrollY / docH, 0), 1);
        setScaleX(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="royal-progress-bar" 
      id="progressBar" 
      aria-hidden="true"
      style={{ transform: `scaleX(${scaleX})` }}
    />
  );
}
