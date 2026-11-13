import React, { useRef, useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import ProgressBar from './components/ProgressBar';
import GateOverlay from './components/GateOverlay';
import AudioWidget from './components/AudioWidget';
import FallingPetals from './components/FallingPetals';
import DynamicRoyalBg from './components/DynamicRoyalBg';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import CoupleSection from './components/CoupleSection';
import CeremoniesTimeline from './components/CeremoniesTimeline';
import GallerySection from './components/GallerySection';
import VenueSection from './components/VenueSection';
import RsvpSection from './components/RsvpSection';
import LogisticsSection from './components/LogisticsSection';
import BlessingsFooter from './components/BlessingsFooter';

export default function App() {
  const audioWidgetRef = useRef(null);
  const [heroRevealed, setHeroRevealed] = useState(false);

  // Global Intersection Observer for reveals, Jharokha shutters, and unrolling scrolls
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Handle general data-reveal animations
          el.classList.add('is-revealed');

          // Handle Jharokha 3D shutter opening
          if (
            el.hasAttribute('data-shutter-frame') || 
            el.classList.contains('jharokha-arch-frame') || 
            el.classList.contains('elder-jharokha-box')
          ) {
            el.classList.add('is-opened');
          }

          // Handle ceremony scroll unrolling
          if (
            el.hasAttribute('data-unroll-card') || 
            el.classList.contains('unrolling-scroll-card')
          ) {
            el.classList.add('is-unrolled');
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: [0.15, 0.35]
    });

    const elementsToObserve = document.querySelectorAll(
      '[data-reveal], [data-shutter-frame], [data-unroll-card], .jharokha-arch-frame, .elder-jharokha-box, .unrolling-scroll-card'
    );

    elementsToObserve.forEach((el) => revealObserver.observe(el));

    return () => {
      elementsToObserve.forEach((el) => revealObserver.unobserve(el));
      revealObserver.disconnect();
    };
  }, []);

  const handleOpenGate = () => {
    if (audioWidgetRef.current) {
      audioWidgetRef.current.play();
    }
  };

  const handleHeroReveal = () => {
    setHeroRevealed(true);
  };

  return (
    <div className="royal-app-container">
      {/* 1. Top Preview Banner */}
      <TopBanner />

      {/* 2. Top Scroll Progress Indicator */}
      <ProgressBar />

      {/* 3. 3D Swinging Peacock Gate Opening Screen */}
      <GateOverlay 
        onOpenGate={handleOpenGate} 
        onHeroReveal={handleHeroReveal} 
      />

      {/* 4. Royal Audio Soundtrack & Floating Widget */}
      <AudioWidget ref={audioWidgetRef} />

      {/* 5. Ambient Falling Rose Petals Layer */}
      <FallingPetals />

      {/* 6. Dynamic Royal Jali Wallpaper & Blue Mandalas */}
      <DynamicRoyalBg />

      {/* 7. Main Palace Wedding Portal */}
      <main id="weddingRoot">
        <HeroSection isRevealed={heroRevealed} />
        <CountdownSection />
        <CoupleSection />
        <CeremoniesTimeline />
        <GallerySection />
        <VenueSection />
        <RsvpSection />
        <LogisticsSection />
        <BlessingsFooter />
      </main>
    </div>
  );
}
