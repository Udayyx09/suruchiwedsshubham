import React, { useRef, useState, useEffect, useCallback } from 'react';
import ProgressBar from './components/ProgressBar';
import GateOverlay from './components/GateOverlay';
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
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [tourVisible, setTourVisible] = useState(false);

  const isAutoScrollingRef = useRef(false);
  const animationFrameIdRef = useRef(null);
  const autoResumeTimerRef = useRef(null);
  const hasEnteredRef = useRef(false);
  const lastTimestampRef = useRef(0);
  const currentScrollYRef = useRef(0);

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

  // Smooth Auto-Scrolling Controller with Instant RAF Execution
  const pauseAutoScroll = useCallback(() => {
    isAutoScrollingRef.current = false;
    setIsAutoScrolling(false);
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (isAutoScrollingRef.current) return;
    isAutoScrollingRef.current = true;
    setIsAutoScrolling(true);
    setTourVisible(true);

    lastTimestampRef.current = performance.now();
    currentScrollYRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

    const scrollLoop = (timestamp) => {
      if (!isAutoScrollingRef.current) return;

      const elapsed = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      // Cap delta time to prevent large leaps if frame rate dips
      const dt = Math.min(Math.max(elapsed, 0.001), 0.05);

      // Speed: ~80 pixels/sec gives a graceful royal tour speed
      const pixelsPerSecond = 80;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Reached near bottom of page
      if (currentScrollYRef.current >= maxScroll - 4) {
        window.scrollTo({ top: maxScroll, behavior: 'instant' });
        pauseAutoScroll();
        return;
      }

      // Sync with real scrollY if user subtly nudged it
      const actualY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (Math.abs(actualY - currentScrollYRef.current) < 25) {
        currentScrollYRef.current = actualY;
      }

      currentScrollYRef.current += pixelsPerSecond * dt;

      window.scrollTo({
        top: currentScrollYRef.current,
        behavior: 'instant'
      });

      if (document.documentElement.scrollTop !== currentScrollYRef.current) {
        document.documentElement.scrollTop = currentScrollYRef.current;
      }

      animationFrameIdRef.current = requestAnimationFrame(scrollLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(scrollLoop);
  }, [pauseAutoScroll]);

  // Schedule automatic resumption after user stops manual scrolling
  const scheduleAutoResume = useCallback((delay = 1400) => {
    if (autoResumeTimerRef.current) {
      clearTimeout(autoResumeTimerRef.current);
      autoResumeTimerRef.current = null;
    }

    if (!hasEnteredRef.current) return;

    autoResumeTimerRef.current = setTimeout(() => {
      if (!hasEnteredRef.current) return;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      // Only resume if not already at the bottom of the page
      if (currentY < maxScroll - 20) {
        startAutoScroll();
      }
    }, delay);
  }, [startAutoScroll]);

  const toggleAutoScroll = useCallback(() => {
    if (isAutoScrollingRef.current) {
      if (autoResumeTimerRef.current) {
        clearTimeout(autoResumeTimerRef.current);
        autoResumeTimerRef.current = null;
      }
      pauseAutoScroll();
    } else {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

      // If at or near bottom, restart tour smoothly from top
      if (currentScroll >= maxScroll - 25) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          startAutoScroll();
        }, 650);
      } else {
        startAutoScroll();
      }
    }
  }, [pauseAutoScroll, startAutoScroll]);

  // Handle manual user interactions: pause during manual scroll, and auto-restart when scrolling stops
  useEffect(() => {
    let touchStartY = null;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 2) {
        if (isAutoScrollingRef.current) {
          pauseAutoScroll();
        }
        // When user scrolls again, automatically restart autoscroll once scrolling stops
        scheduleAutoResume(1400);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0] && touchStartY !== null) {
        const delta = Math.abs(e.touches[0].clientY - touchStartY);
        if (delta > 8) {
          if (isAutoScrollingRef.current) {
            pauseAutoScroll();
          }
          if (autoResumeTimerRef.current) {
            clearTimeout(autoResumeTimerRef.current);
            autoResumeTimerRef.current = null;
          }
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY = null;
      // User lifted finger from screen; resume autoscroll after 1.4s grace period
      scheduleAutoResume(1400);
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'].includes(e.key)) {
        if (isAutoScrollingRef.current) {
          pauseAutoScroll();
        }
        scheduleAutoResume(1400);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      if (autoResumeTimerRef.current) {
        clearTimeout(autoResumeTimerRef.current);
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [pauseAutoScroll, scheduleAutoResume]);

  const handleOpenGate = () => {
    // Gate opening triggered
  };

  const handleHeroReveal = () => {
    setHeroRevealed(true);
  };

  const handleGateDismissed = () => {
    hasEnteredRef.current = true;
    setTourVisible(true);
    // Allow user to take in the royal palace entrance for 400ms, then start cinematic autoscroll
    setTimeout(() => {
      startAutoScroll();
    }, 400);
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

      {/* 3. Ambient Falling Rose Petals Layer */}
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
