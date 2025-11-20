import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom Magnetic Cursor
 * Inspired by GSAP's website and Awwwards winners
 */
export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Check if touch device
    isTouch.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Don't show custom cursor on touch devices
    if (isTouch.current || window.innerWidth < 768) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Mouse position
    const mouse = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const cursorDotPos = { x: 0, y: 0 };

    // Update mouse position
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Animate cursor following mouse
    const animateCursor = () => {
      // Smooth lag for outer cursor
      cursorPos.x += (mouse.x - cursorPos.x) * 0.15;
      cursorPos.y += (mouse.y - cursorPos.y) * 0.15;

      // Faster movement for dot
      cursorDotPos.x += (mouse.x - cursorDotPos.x) * 0.3;
      cursorDotPos.y += (mouse.y - cursorDotPos.y) * 0.3;

      gsap.set(cursor, {
        x: cursorPos.x,
        y: cursorPos.y,
      });

      gsap.set(cursorDot, {
        x: cursorDotPos.x,
        y: cursorDotPos.y,
      });

      requestAnimationFrame(animateCursor);
    };

    // Handle hover states
    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  // Don't render on touch devices or mobile
  if (typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window)) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
          
          a, button, [role="button"], input, textarea {
            cursor: none !important;
          }
        `}
      </style>

      {/* Custom Cursor - Outer Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full opacity-50"></div>
      </div>

      {/* Custom Cursor - Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </>
  );
}

