import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';

export default function JumindProjects() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Our Work',
      title: 'Real Projects.',
      subtitle: 'Real Results.',
      description: 'From concept to deployment, we build production-ready applications that serve real users',
      liveLabel: 'LIVE',
      viewProject: 'View Project',
    },
    he: {
      badge: 'העבודות שלנו',
      title: 'פרויקטים אמיתיים.',
      subtitle: 'תוצאות אמיתיות.',
      description: 'מרעיון לפריסה, אנחנו בונים אפליקציות מוכנות לפרודקשן המשרתות משתמשים אמיתיים',
      liveLabel: 'LIVE',
      viewProject: 'צפה בפרויקט',
    },
  };

  const t = content[language];

  // Show only live projects or top projects
  const featuredProjects = projects.filter(p => p.isLive).slice(0, 6);

  return (
    <section id="projects" className="section-jumind-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4DA8FF] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="container-jumind relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-[#4DA8FF] font-semibold text-sm tracking-wide uppercase">{t.badge}</span>
          </div>
          <h2 className="heading-jumind-lg text-white mb-6">
            {t.title}
            <br />
            <span className="text-gradient-jumind">{t.subtitle}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.slug}
              href={project.demo || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {project.isLive && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {t.liveLabel}
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 bg-[#4DA8FF]/10 text-[#1E86F7] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#4DA8FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#C9D1D9] text-sm line-clamp-2 mb-4">
                  {project.excerpt}
                </p>

                {/* View Project Link */}
                <div className="flex items-center text-[#4DA8FF] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  {t.viewProject}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-8">
            {language === 'he' ? 'רוצה לראות עוד? צור קשר להצגה מלאה של תיק העבודות' : 'Want to see more? Get in touch for a complete portfolio presentation'}
          </p>
          <a href="#contact" className="btn-jumind-outline">
            {language === 'he' ? 'צור קשר' : 'Get In Touch'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

