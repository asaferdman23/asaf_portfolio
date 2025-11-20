import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';

/**
 * Arrow-Based Projects Carousel
 * Professional and clean navigation
 */
export default function JumindProjectsHorizontal() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      badge: 'Featured Work',
      title: 'Selected',
      subtitle: 'Projects',
      description: 'Our latest work',
      liveLabel: 'LIVE',
      viewProject: 'View Project',
    },
    he: {
      badge: 'עבודות נבחרות',
      title: 'פרויקטים',
      subtitle: 'נבחרים',
      description: 'העבודות האחרונות שלנו',
      liveLabel: 'LIVE',
      viewProject: 'צפו בפרויקט',
    },
  };

  const t = content[language];

  // Get featured projects
  const featuredProjects = projects.filter(p => p.isLive).slice(0, 8);
  const totalProjects = featuredProjects.length;

  // How many cards to show at once
  const cardsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const [cardsPerView, setCardsPerView] = useState(cardsToShow.desktop);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(cardsToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(cardsToShow.tablet);
      } else {
        setCardsPerView(cardsToShow.desktop);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalProjects - cardsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Reset carousel position when language changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [language]);

  return (
    <section
      id="projects"
      className="relative py-32 md:py-40 bg-black overflow-hidden"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-black to-black"></div>

      <div className="container-jumind relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.title} <span className="text-white/40">{t.subtitle}</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Projects Grid with Overflow Hidden */}
          <div className="overflow-hidden" dir={language === 'he' ? 'rtl' : 'ltr'}>
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(${language === 'he' ? '' : '-'}${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)` }}
                >
                  <a
                    href={project.demo || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    {/* Project Card */}
                    <div className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Live Badge */}
                        {project.isLive && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            {t.liveLabel}
                          </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
                          {project.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2 py-1 bg-white/5 text-white/60 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Left Button - Prev for LTR, Next for RTL */}
            <button
              onClick={language === 'he' ? handleNext : handlePrev}
              disabled={language === 'he' ? currentIndex === maxIndex : currentIndex === 0}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label={language === 'he' ? 'Next projects' : 'Previous projects'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-200 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-white rounded-full'
                      : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Button - Next for LTR, Prev for RTL */}
            <button
              onClick={language === 'he' ? handlePrev : handleNext}
              disabled={language === 'he' ? currentIndex === 0 : currentIndex === maxIndex}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label={language === 'he' ? 'Previous projects' : 'Next projects'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

