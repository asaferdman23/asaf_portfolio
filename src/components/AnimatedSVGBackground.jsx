import { useEffect, useRef } from 'react';
import { drawSVGPath, rotateOnScroll } from '../lib/gsapAdvanced';

/**
 * Animated SVG Background
 * Adds decorative animated SVG paths and shapes
 */
export default function AnimatedSVGBackground() {
  const svgRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Animate SVG paths on mount
    if (path1Ref.current) {
      drawSVGPath(path1Ref.current, {
        duration: 3,
        delay: 0.5,
      });
    }

    if (path2Ref.current) {
      drawSVGPath(path2Ref.current, {
        duration: 3,
        delay: 1,
      });
    }

    // Rotate circle on scroll
    if (circleRef.current) {
      rotateOnScroll(circleRef.current, {
        rotation: 360 * 2,
        scrub: 2,
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Decorative curved paths */}
      <path
        ref={path1Ref}
        d="M0 300 Q 480 200, 960 300 T 1920 300"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
      />
      
      <path
        ref={path2Ref}
        d="M0 700 Q 480 600, 960 700 T 1920 700"
        stroke="url(#gradient2)"
        strokeWidth="2"
        fill="none"
      />

      {/* Rotating circle */}
      <g ref={circleRef} transform="translate(1600, 200)">
        <circle
          cx="0"
          cy="0"
          r="100"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
        />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4DA8FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#4DA8FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4DA8FF" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E86F7" stopOpacity="0" />
          <stop offset="50%" stopColor="#1E86F7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1E86F7" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DA8FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1E86F7" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

