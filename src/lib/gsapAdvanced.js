import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * ============================================
 * ADVANCED GSAP ANIMATIONS
 * Inspired by GSAP's own showcase and Awwwards winners
 * ============================================
 */

// ==================== SMOOTH SCROLL WITH LENIS ====================

let lenisInstance = null;

/**
 * Initialize Lenis smooth scroll
 * This creates buttery-smooth scrolling like GSAP's website
 */
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    console.log('✅ Lenis smooth scroll initialized');
    return lenisInstance;
  } catch (error) {
    console.warn('⚠️ Lenis not available, using native scroll:', error);
    return null;
  }
};

/**
 * Destroy Lenis instance
 */
export const destroySmoothScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

/**
 * Get Lenis instance
 */
export const getLenis = () => lenisInstance;

// ==================== SPLIT TEXT ANIMATIONS ====================

/**
 * Split text into characters for animation
 * Alternative to GSAP SplitText (which is premium)
 */
export const splitTextIntoChars = (element) => {
  if (!element) return [];
  
  const text = element.textContent;
  element.innerHTML = '';
  
  const chars = [];
  
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    chars.push(span);
  });
  
  return chars;
};

/**
 * Animate text reveal character by character
 * @param {HTMLElement} element - Text element
 * @param {Object} options - Animation options
 */
export const animateSplitText = (element, options = {}) => {
  const chars = splitTextIntoChars(element);
  
  const config = {
    stagger: options.stagger || 0.03,
    duration: options.duration || 0.6,
    ease: options.ease || 'power3.out',
    delay: options.delay || 0,
    from: options.from || { opacity: 0, y: 50, rotationX: -90 },
    scrollTrigger: options.scrollTrigger || null,
  };

  return gsap.fromTo(
    chars,
    config.from,
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      delay: config.delay,
      scrollTrigger: config.scrollTrigger,
    }
  );
};

/**
 * Text reveal with clip path (like GSAP website)
 */
export const animateTextReveal = (element, options = {}) => {
  return gsap.fromTo(
    element,
    {
      clipPath: 'inset(0 100% 0 0)',
    },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: options.duration || 1.5,
      ease: options.ease || 'power4.inOut',
      delay: options.delay || 0,
      scrollTrigger: options.scrollTrigger || null,
    }
  );
};

// ==================== MAGNETIC CURSOR ====================

/**
 * Create magnetic effect on element (attracts cursor)
 * @param {HTMLElement} element - Element to make magnetic
 * @param {Number} strength - Magnetic strength (0-1)
 */
export const createMagneticElement = (element, strength = 0.5) => {
  if (!element || typeof window === 'undefined') return null;
  if (window.innerWidth < 768) return null; // Skip on mobile

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      const power = (maxDistance - distance) / maxDistance;
      gsap.to(element, {
        x: deltaX * strength * power,
        y: deltaY * strength * power,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// ==================== SVG PATH ANIMATIONS ====================

/**
 * Draw SVG path animation
 * @param {SVGPathElement} path - SVG path element
 * @param {Object} options - Animation options
 */
export const drawSVGPath = (path, options = {}) => {
  if (!path) return null;
  
  const length = path.getTotalLength();
  
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  return gsap.to(path, {
    strokeDashoffset: 0,
    duration: options.duration || 2,
    ease: options.ease || 'power2.inOut',
    delay: options.delay || 0,
    scrollTrigger: options.scrollTrigger || null,
  });
};

/**
 * Morph SVG path
 */
export const morphSVGPath = (path, newPath, options = {}) => {
  return gsap.to(path, {
    attr: { d: newPath },
    duration: options.duration || 1.5,
    ease: options.ease || 'power3.inOut',
    delay: options.delay || 0,
  });
};

// ==================== HORIZONTAL SCROLL ====================

/**
 * Create horizontal scroll section
 * @param {HTMLElement} container - Container element
 * @param {Array} items - Items to scroll horizontally
 */
export const createHorizontalScroll = (container, items) => {
  if (!container || !items.length) return null;
  if (window.innerWidth < 768) return null; // Skip on mobile

  const scrollDistance = () => {
    return items.reduce((acc, item) => acc + item.offsetWidth, 0) - window.innerWidth;
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${scrollDistance() + window.innerHeight}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(items, {
    x: () => -scrollDistance(),
    ease: 'none',
  });

  return tl;
};

// ==================== ADVANCED PARALLAX ====================

/**
 * Multi-layer parallax effect
 * @param {Array} layers - Array of {element, speed} objects
 */
export const createAdvancedParallax = (layers) => {
  if (!layers || !layers.length) return [];
  if (window.innerWidth < 768) return []; // Skip on mobile

  const animations = [];

  layers.forEach(({ element, speed = 1, direction = 'y' }) => {
    if (!element) return;

    const movement = direction === 'y' ? 'yPercent' : 'xPercent';
    
    const anim = gsap.to(element, {
      [movement]: speed * 50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    animations.push(anim);
  });

  return animations;
};

// ==================== SCROLL-TRIGGERED TIMELINES ====================

/**
 * Create complex scroll-triggered timeline
 * @param {HTMLElement} trigger - Trigger element
 * @param {Function} timelineBuilder - Function that builds timeline
 */
export const createScrollTimeline = (trigger, timelineBuilder, options = {}) => {
  if (!trigger || !timelineBuilder) return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: options.start || 'top center',
      end: options.end || 'bottom center',
      scrub: options.scrub !== undefined ? options.scrub : 1,
      pin: options.pin || false,
      markers: options.markers || false,
      toggleActions: options.toggleActions || 'play none none reverse',
    },
  });

  timelineBuilder(tl);

  return tl;
};

// ==================== REVEAL ON SCROLL ====================

/**
 * Reveal element with mask/clip-path on scroll
 */
export const revealOnScroll = (element, options = {}) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      clipPath: options.clipPath || 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      y: options.y || 100,
    },
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      y: 0,
      duration: options.duration || 1.5,
      ease: options.ease || 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// ==================== IMAGE REVEAL ====================

/**
 * Image reveal with scale and clip-path
 */
export const revealImage = (imageWrapper, image, options = {}) => {
  if (!imageWrapper || !image) return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imageWrapper,
      start: options.start || 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.fromTo(
    imageWrapper,
    {
      clipPath: 'inset(50% 50% 50% 50%)',
    },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'power4.out',
    }
  ).fromTo(
    image,
    {
      scale: 1.3,
    },
    {
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
    },
    0
  );

  return tl;
};

// ==================== NUMBER COUNTER ====================

/**
 * Animate number counting up
 */
export const animateCounter = (element, options = {}) => {
  if (!element) return null;

  const endValue = options.endValue || parseInt(element.textContent);
  const obj = { value: options.startValue || 0 };

  return gsap.to(obj, {
    value: endValue,
    duration: options.duration || 2,
    ease: options.ease || 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + (options.suffix || '');
    },
    scrollTrigger: options.scrollTrigger || {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

// ==================== ROTATE ON SCROLL ====================

/**
 * Rotate element based on scroll position
 */
export const rotateOnScroll = (element, options = {}) => {
  if (!element) return null;

  return gsap.to(element, {
    rotation: options.rotation || 360,
    ease: 'none',
    scrollTrigger: {
      trigger: options.trigger || element,
      start: options.start || 'top bottom',
      end: options.end || 'bottom top',
      scrub: options.scrub !== undefined ? options.scrub : 1,
    },
  });
};

// ==================== BATCH ANIMATIONS ====================

/**
 * Batch animate elements as they enter viewport
 */
export const batchReveal = (selector, options = {}) => {
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        {
          opacity: 0,
          y: options.y || 60,
          scale: options.scale || 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: options.stagger || 0.1,
          duration: options.duration || 0.8,
          ease: options.ease || 'power3.out',
        }
      );
    },
    start: options.start || 'top 85%',
    once: options.once !== false,
  });
};

// ==================== CLEANUP ====================

/**
 * Kill all advanced animations
 */
export const cleanupAdvancedAnimations = () => {
  destroySmoothScroll();
  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.killTweensOf('*');
};

export default {
  initSmoothScroll,
  destroySmoothScroll,
  getLenis,
  splitTextIntoChars,
  animateSplitText,
  animateTextReveal,
  createMagneticElement,
  drawSVGPath,
  morphSVGPath,
  createHorizontalScroll,
  createAdvancedParallax,
  createScrollTimeline,
  revealOnScroll,
  revealImage,
  animateCounter,
  rotateOnScroll,
  batchReveal,
  cleanupAdvancedAnimations,
};

