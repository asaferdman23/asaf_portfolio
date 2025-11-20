import { Suspense, lazy } from 'react';

// Lazy load Spline with default export
const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => ({ default: module.default }))
);

/**
 * Spline 3D Scene Component
 * Lazy-loaded for optimal performance
 */
export function SplineScene({ scene, className }) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="relative">
            {/* Loading spinner */}
            <div className="w-16 h-16 border-4 border-[#0DA4FF]/30 border-t-[#0DA4FF] rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0DA4FF] text-sm font-bold whitespace-nowrap">
              Loading 3D...
            </div>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}

