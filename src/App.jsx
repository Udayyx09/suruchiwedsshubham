import React, { useRef, useState, useEffect, useCallback } from 'react';
import ProgressBar from './components/ProgressBar';
import GateOverlay from './components/GateOverlay';
import AudioWidget from './components/AudioWidget';
import AutoTourWidget from './components/AutoTourWidget';
import FallingPetals from './components/FallingPetals';
import DynamicRoyalBg from './components/DynamicRoyalBg';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import CoupleSection from './components/CoupleSection';
import CeremoniesTimeline from './components/CeremoniesTimeline';
import GallerySection from './components/GallerySection';
import VenueSection from './components/VenueSection';
import LogisticsSection from './components/LogisticsSection';
import BlessingsFooter from './components/BlessingsFooter';

export default function App() {
  const audioWidgetRef = useRef(null);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [tourVisible, setTourVisible] = useState(false);

  const autoScrollActiveRef = useRef(false);
  const animationFrameIdRef = useRef(null);
  const scrollAccumulatorRef = useRef(0);

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

  // Smooth Auto-Scrolling Controller
  const pauseAutoScroll = useCallback(() => {
    if (!autoScrollActiveRef.current && !isAutoScrolling) return;
    autoScrollActiveRef.current = false;
    setIsAutoScrolling(false);
    document.documentElement.style.scrollBehavior = '';
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  }, [isAutoScrolling]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollActiveRef.current) return;
    autoScrollActiveRef.current = true;
    setIsAutoScrolling(true);
    document.documentElement.style.scrollBehavior = 'auto';
    scrollAccumulatorRef.current = window.scrollY || window.pageYOffset || 0;

    const scrollStep = () => {
      if (!autoScrollActiveRef.current) return;

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Reached near bottom of page
      if (scrollAccumulatorRef.current >= maxScroll - 6) {
        pauseAutoScroll();
        return;
      }

      // Smooth cinematic travel speed: ~1.2px per frame (~72px/sec at 60Hz)
      scrollAccumulatorRef.current += 1.2;
      window.scrollTo(0, scrollAccumulatorRef.current);

      animationFrameIdRef.current = requestAnimationFrame(scrollStep);
    };

    animationFrameIdRef.current = requestAnimationFrame(scrollStep);
  }, [pauseAutoScroll]);

  const toggleAutoScroll = useCallback(() => {
    if (autoScrollActiveRef.current) {
      pauseAutoScroll();
    } else {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const currentScroll = window.scrollY || window.pageYOffset || 0;

      // If at or near bottom, restart tour smoothly from top
      if (currentScroll >= maxScroll - 25) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          startAutoScroll();
        }, 850);
      } else {
        startAutoScroll();
      }
    }
  }, [pauseAutoScroll, startAutoScroll]);

  // Pause autoscroll on manual user interactions (wheel, touch, key navigation)
  useEffect(() => {
    const handleUserInteraction = (e) => {
      if (e.target && e.target.closest && e.target.closest('.royal-autoscroll-widget')) {
        return;
      }
      if (autoScrollActiveRef.current) {
        pauseAutoScroll();
      }
    };

    const handleKeyInteraction = (e) => {
      if (['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;
      if (autoScrollActiveRef.current) {
        pauseAutoScroll();
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleKeyInteraction);

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleKeyInteraction);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [pauseAutoScroll]);

  const handleOpenGate = () => {
    if (audioWidgetRef.current) {
      audioWidgetRef.current.play();
    }
  };

  const handleHeroReveal = () => {
    setHeroRevealed(true);
  };

  const handleGateDismissed = () => {
    setTourVisible(true);
    // Allow user to take in the royal palace entrance for 1.4 seconds, then start cinematic autoscroll
    setTimeout(() => {
      startAutoScroll();
    }, 1400);
  };

  return (
    <div className="royal-app-container">
      {/* 1. Top Scroll Progress Indicator */}
      <ProgressBar />

      {/* 2. 3D Swinging Peacock Gate Opening Screen */}
      <GateOverlay 
        onOpenGate={handleOpenGate} 
        onHeroReveal={handleHeroReveal} 
        onGateDismissed={handleGateDismissed}
      />

      {/* 3. Floating Interactive Controls: Auto-Tour Controller & Royal Music */}
      <AutoTourWidget 
        isActive={isAutoScrolling} 
        isVisible={tourVisible} 
        onToggle={toggleAutoScroll} 
      />
      <AudioWidget ref={audioWidgetRef} />

      {/* 4. Ambient Falling Rose Petals Layer */}
      <FallingPetals />

      {/* 5. Dynamic Royal Jali Wallpaper & Blue Mandalas */}
      <DynamicRoyalBg />

      {/* 6. Main Palace Wedding Portal */}
      <main id="weddingRoot">
        <HeroSection isRevealed={heroRevealed} />
        <CountdownSection />
        <CoupleSection />
        <CeremoniesTimeline />
        <GallerySection />
        <VenueSection />
        <LogisticsSection />
        <BlessingsFooter />
      </main>
    </div>
  );
}
