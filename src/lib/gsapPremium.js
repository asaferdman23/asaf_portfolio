import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from './theme';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium GSAP Animation Library
 * Awwwards-level animations for JU-MIND
 */

// SECTION ANIMATIONS
export const animateSectionEntry = (element, options = {}) => {
  const {
    delay = 0,
    duration = theme.animations.duration.slow,
    y = 60,
    trigger = element,
    start = 'top 80%',
  } = options;

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    ease: theme.animations.easing.smooth,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// STAGGER CARDS ANIMATION
export const staggerCards = (elements, options = {}) => {
  const {
    delay = 0,
    duration = theme.animations.duration.normal,
    stagger = 0.15,
    y = 60,
    trigger = elements[0],
    start = 'top 75%',
  } = options;

  return gsap.from(elements, {
    y,
    opacity: 0,
    scale: 0.95,
    duration,
    delay,
    stagger,
    ease: theme.animations.easing.smooth,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// TEXT REVEAL WITH SPLIT
export const revealText = (element, options = {}) => {
  const {
    delay = 0,
    duration = theme.animations.duration.normal,
    trigger = element,
    start = 'top 85%',
  } = options;

  return gsap.from(element, {
    y: 40,
    opacity: 0,
    duration,
    delay,
    ease: theme.animations.easing.smooth,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// FADE SCALE ANIMATION
export const fadeScale = (element, options = {}) => {
  const {
    delay = 0,
    duration = theme.animations.duration.normal,
    scale = 0.9,
    trigger = element,
    start = 'top 80%',
  } = options;

  return gsap.from(element, {
    scale,
    opacity: 0,
    duration,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// PARALLAX EFFECT
export const createParallax = (element, options = {}) => {
  const {
    speed = 0.5,
    trigger = element,
    start = 'top bottom',
    end = 'bottom top',
  } = options;

  return gsap.to(element, {
    y: () => -(element.offsetHeight * speed),
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: true,
    },
  });
};

// HOVER GLOW EFFECT
export const createHoverGlow = (element, color = theme.colors.electric[500]) => {
  const onMouseEnter = () => {
    gsap.to(element, {
      boxShadow: `0 0 40px ${color}80`,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      boxShadow: `0 0 0px ${color}00`,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', onMouseEnter);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};

// CARD TILT ON HOVER
export const createCardTilt = (element, intensity = 10) => {
  const onMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((x - centerX) / centerX) * -intensity;
    
    gsap.to(element, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};

// MAGNETIC BUTTON EFFECT
export const createMagnetic = (element, strength = 0.3) => {
  const onMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};

// NUMBER COUNTER ANIMATION
export const animateNumber = (element, options = {}) => {
  const {
    start = 0,
    end = 100,
    duration = 2,
    trigger = element,
    scrollStart = 'top 80%',
    decimals = 0,
    suffix = '',
  } = options;

  const obj = { val: start };

  return gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = obj.val.toFixed(decimals) + suffix;
    },
    scrollTrigger: {
      trigger,
      start: scrollStart,
      toggleActions: 'play none none none',
    },
  });
};

// SLIDE IN FROM SIDES
export const slideInFromSide = (element, options = {}) => {
  const {
    direction = 'left',
    delay = 0,
    duration = theme.animations.duration.normal,
    distance = 100,
    trigger = element,
    start = 'top 80%',
  } = options;

  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;

  return gsap.from(element, {
    x,
    opacity: 0,
    duration,
    delay,
    ease: theme.animations.easing.smooth,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// REFRESH SCROLLTRIGGER
export const refreshScrollTrigger = (delay = 100) => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, delay);
};

// KILL ALL ANIMATIONS
export const killAllAnimations = () => {
  gsap.killTweensOf('*');
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

