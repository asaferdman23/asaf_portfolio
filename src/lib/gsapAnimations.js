import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP Animation Utilities for Ju-Mind
 * Premium animations for Awwwards-level experience
 */

// ==================== CONFIGURATION ====================

export const ANIMATION_CONFIG = {
  // Easing presets
  ease: {
    smooth: 'power3.out',
    elastic: 'elastic.out(1, 0.3)',
    bounce: 'back.out(1.7)',
    premium: 'power4.out',
  },
  // Duration presets
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    verySlow: 1.5,
  },
  // ScrollTrigger defaults
  scroll: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Check if device is mobile
 */
export const isMobile = () => window.innerWidth < 768;

/**
 * Get safe animation config for mobile
 * Reduces heavy animations on mobile for performance
 */
export const getMobileConfig = (config) => {
  if (isMobile()) {
    return {
      ...config,
      duration: config.duration * 0.7,
      ease: 'power2.out',
    };
  }
  return config;
};

// ==================== HERO ANIMATIONS ====================

/**
 * Animate logo entrance with glow effect
 * @param {HTMLElement} logoRef - Logo element reference
 * @param {HTMLElement} glowRef - Glow container reference
 */
export const animateLogoEntrance = (logoRef, glowRef) => {
  const tl = gsap.timeline();
  
  tl.fromTo(
    logoRef,
    {
      scale: 0.8,
      opacity: 0,
      y: 50,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: ANIMATION_CONFIG.ease.premium,
    }
  );

  if (glowRef && !isMobile()) {
    tl.fromTo(
      glowRef,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 0.7,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
      },
      '-=1.2'
    );
  }

  return tl;
};

/**
 * Stagger reveal text elements
 * @param {Array} elements - Array of text elements
 * @param {Object} options - Animation options
 */
export const staggerTextReveal = (elements, options = {}) => {
  const config = getMobileConfig({
    duration: options.duration || ANIMATION_CONFIG.duration.normal,
    stagger: options.stagger || 0.15,
    ease: options.ease || ANIMATION_CONFIG.ease.smooth,
    delay: options.delay || 0,
  });

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      delay: config.delay,
    }
  );
};

/**
 * Mouse parallax effect for hero
 * @param {HTMLElement} container - Container element
 * @param {Array} layers - Elements to apply parallax to [{el, speed}]
 */
export const createMouseParallax = (container, layers) => {
  if (isMobile()) return null;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse position (-1 to 1)
    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;

    layers.forEach(({ el, speed = 1 }) => {
      if (!el) return;
      
      gsap.to(el, {
        x: xPos * 30 * speed,
        y: yPos * 30 * speed,
        duration: 1.5,
        ease: 'power2.out',
      });
    });
  };

  container.addEventListener('mousemove', handleMouseMove);
  
  // Return cleanup function
  return () => container.removeEventListener('mousemove', handleMouseMove);
};

/**
 * Animate CTA button with glow
 * @param {HTMLElement} button - Button element
 */
export const animateButton = (button) => {
  const tl = gsap.timeline();
  
  tl.fromTo(
    button,
    {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.bounce,
    }
  );

  return tl;
};

// ==================== SCROLL ANIMATIONS ====================

/**
 * Fade + slide up on scroll
 * @param {HTMLElement|Array} elements - Element(s) to animate
 * @param {Object} options - ScrollTrigger options
 */
export const fadeUpOnScroll = (elements, options = {}) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: getMobileConfig({
        duration: options.duration || ANIMATION_CONFIG.duration.slow,
      }).duration,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: options.trigger || elements,
        start: options.start || ANIMATION_CONFIG.scroll.start,
        end: options.end || ANIMATION_CONFIG.scroll.end,
        toggleActions: options.toggleActions || ANIMATION_CONFIG.scroll.toggleActions,
        markers: options.markers || false,
      },
    }
  );
};

/**
 * Stagger cards on scroll
 * @param {Array} cards - Array of card elements
 * @param {Object} options - Animation options
 */
export const staggerCardsOnScroll = (cards, options = {}) => {
  return gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: isMobile() ? 0.1 : 0.15,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: options.trigger || cards[0],
        start: options.start || 'top 75%',
        toggleActions: 'play none none reverse',
        markers: options.markers || false,
      },
    }
  );
};

/**
 * Fade in image with scale
 * @param {HTMLElement} image - Image element
 * @param {Object} options - Animation options
 */
export const fadeInImage = (image, options = {}) => {
  return gsap.fromTo(
    image,
    {
      opacity: 0,
      scale: 1.1,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: options.trigger || image,
        start: options.start || 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Pin section on scroll (for immersive effects)
 * @param {HTMLElement} section - Section to pin
 * @param {Object} options - Pin options
 */
export const pinSection = (section, options = {}) => {
  if (isMobile()) return null;

  return ScrollTrigger.create({
    trigger: section,
    start: options.start || 'top top',
    end: options.end || '+=100%',
    pin: true,
    pinSpacing: options.pinSpacing !== false,
    markers: options.markers || false,
  });
};

// ==================== MICRO-INTERACTIONS ====================

/**
 * Card tilt effect on hover (3D perspective)
 * @param {HTMLElement} card - Card element
 * @param {Number} intensity - Tilt intensity (default: 1)
 */
export const createCardTilt = (card, intensity = 1) => {
  if (isMobile()) return null;

  const handleMouseMove = (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10 * intensity;
    const rotateY = ((x - centerX) / centerX) * 10 * intensity;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Button magnetic effect (follows cursor)
 * @param {HTMLElement} button - Button element
 * @param {Number} strength - Magnetic strength (default: 0.3)
 */
export const createMagneticButton = (button, strength = 0.3) => {
  if (isMobile()) return null;

  const handleMouseMove = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  button.addEventListener('mouseenter', () => {
    button.addEventListener('mousemove', handleMouseMove);
  });
  
  button.addEventListener('mouseleave', () => {
    button.removeEventListener('mousemove', handleMouseMove);
    handleMouseLeave();
  });

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Glow pulse animation
 * @param {HTMLElement} element - Element to apply glow to
 */
export const glowPulse = (element) => {
  return gsap.to(element, {
    opacity: 1,
    duration: 2,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
  });
};

// ==================== SMOOTH SCROLL ====================

/**
 * Enable smooth scroll for entire page
 */
export const enableSmoothScroll = () => {
  if (isMobile()) return null;

  gsap.to(window, {
    scrollTo: 0,
    duration: 0,
  });

  // Optional: Add Lenis or similar for ultra-smooth scroll
  // This is a placeholder for future implementation
};

// ==================== CLEANUP ====================

/**
 * Kill all GSAP animations and ScrollTriggers
 */
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};

/**
 * Refresh ScrollTrigger (call after layout changes)
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

