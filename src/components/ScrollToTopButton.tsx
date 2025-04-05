'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopButtonProps {
  threshold?: number; // Scroll threshold in pixels to show the button
  scrollDuration?: number; // Duration of scroll animation in milliseconds
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  scrollDuration = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update button visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      
      // Easing function for smooth animation
      const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      
      if (elapsedTime < scrollDuration) {
        const progress = ease(elapsedTime / scrollDuration);
        window.scrollTo(0, startPosition - startPosition * progress);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-50 
        flex items-center justify-center
        w-12 h-12 rounded-full 
        bg-primary text-white shadow-lg
        hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-secondary
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="חזרה לראש העמוד"
      title="חזרה לראש העמוד"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopButton;