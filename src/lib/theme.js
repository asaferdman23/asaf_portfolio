/**
 * JU-MIND Premium Design System
 * Awwwards-level theme configuration
 */

export const theme = {
  // COLORS - Dark AI-Tech Theme
  colors: {
    // Primary Dark Shades
    dark: {
      900: '#09111C',
      800: '#0A0F1A',
      700: '#0B2147',
      600: '#132749',
      500: '#1A3A5C',
    },
    
    // Electric Blue Accent
    electric: {
      500: '#0DA4FF',
      400: '#2B73FF',
      gradient: 'linear-gradient(135deg, #0DA4FF 0%, #2B73FF 100%)',
      gradientHover: 'linear-gradient(135deg, #2B73FF 0%, #0DA4FF 100%)',
    },
    
    // Supporting Colors
    cyan: '#00E5FF',
    purple: '#8B5CF6',
    white: '#FFFFFF',
    gray: {
      100: '#F8FAFC',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
    },
  },

  // TYPOGRAPHY
  typography: {
    fonts: {
      main: "'Heebo', sans-serif",
      display: "'Heebo', sans-serif",
    },
    
    sizes: {
      // Hero Headline
      hero: {
        mobile: '3rem',      // 48px
        tablet: '4.5rem',    // 72px
        desktop: '6rem',     // 96px
        xl: '7rem',          // 112px
      },
      
      // Section Headlines
      h1: {
        mobile: '2.5rem',    // 40px
        tablet: '3.5rem',    // 56px
        desktop: '4.5rem',   // 72px
      },
      
      h2: {
        mobile: '2rem',      // 32px
        tablet: '2.75rem',   // 44px
        desktop: '3.5rem',   // 56px
      },
      
      h3: {
        mobile: '1.5rem',    // 24px
        tablet: '2rem',      // 32px
        desktop: '2.5rem',   // 40px
      },
      
      // Body Text
      body: {
        large: '1.25rem',    // 20px
        normal: '1rem',      // 16px
        small: '0.875rem',   // 14px
      },
    },
    
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  // SPACING
  spacing: {
    section: {
      mobile: '4rem',      // 64px
      tablet: '6rem',      // 96px
      desktop: '8rem',     // 128px
    },
    
    container: {
      mobile: '1.5rem',    // 24px
      tablet: '3rem',      // 48px
      desktop: '4rem',     // 64px
    },
  },

  // ANIMATIONS
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.0,
      verySlow: 1.5,
    },
    
    easing: {
      smooth: 'power3.out',
      elastic: 'elastic.out(1, 0.75)',
      bounce: 'back.out(1.7)',
    },
  },

  // EFFECTS
  effects: {
    // Glow Effects
    glow: {
      soft: '0 0 30px rgba(13, 164, 255, 0.3)',
      medium: '0 0 50px rgba(13, 164, 255, 0.5)',
      strong: '0 0 80px rgba(13, 164, 255, 0.7)',
    },
    
    // Shadows
    shadow: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
      md: '0 4px 16px rgba(0, 0, 0, 0.15)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.25)',
    },
    
    // Glass Effect
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
    },
  },

  // BREAKPOINTS
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    xl: '1536px',
  },
};

// Helper Functions
export const getGradient = (direction = '135deg') => 
  `linear-gradient(${direction}, ${theme.colors.electric[500]} 0%, ${theme.colors.electric[400]} 100%)`;

export const getGlassStyle = () => ({
  background: theme.effects.glass.background,
  border: theme.effects.glass.border,
  backdropFilter: theme.effects.glass.backdropFilter,
  WebkitBackdropFilter: theme.effects.glass.backdropFilter,
});

