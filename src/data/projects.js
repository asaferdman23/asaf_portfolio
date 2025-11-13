export const projects = [
  {
    slug: "elite-team-academy",
    title: "Elite Team Academy",
    year: 2025,
    tags: ["React", "Next.js", "Sports Tech", "Live"],
    excerpt: "LIVE sports training platform we built for elite athletes - deployed and serving real users.",
    description: "A custom sports training platform we developed from scratch for our client. Built for performance, scalability, and user engagement, this platform delivers comprehensive training programs, progress tracking, and community features.\n\nOur development team created this live production system that's currently helping real athletes level up their game. We built custom features including structured training plans, video analysis, and performance metrics using modern web technologies.\n\nKey deliverables: real-time progress tracking system, personalized workout plan generator, coach-athlete communication module, and fully responsive design optimized for all devices.",
    cover: "https://res.cloudinary.com/ddg685nfx/image/upload/v1760816073/elite_team_preview_oeu4jh.png",
    gallery: ["https://res.cloudinary.com/ddg685nfx/image/upload/v1760816073/elite_team_preview_oeu4jh.png", "https://res.cloudinary.com/ddg685nfx/image/upload/v1760816073/elite_team_preview_oeu4jh.png"],
    github: null,
    demo: "https://eliteteamacademy.com",
    isLive: true
  },
  {
    slug: "ai-fitness-coach",
    title: "Coach-A: AI Fitness Coach",
    year: 2025,
    tags: ["React", "AI", "OpenAI", "Fitness", "Live"],
    excerpt: "LIVE AI-powered fitness coach we developed - custom workout automation and nutrition guidance.",
    description: "We built this intelligent AI-powered fitness coach from the ground up for our client. Our team integrated advanced AI models to deliver personalized workout plans, nutrition guidance, form analysis, and adaptive training programs.\n\nThis custom production application we developed analyzes user fitness levels, goals, and progress to create dynamic training plans. We implemented real-time feedback systems, exercise demonstration modules, and recovery tracking features.\n\nOur developers utilized cutting-edge AI technology to create natural conversation flows, smart recommendation engines, and data-driven insight dashboards. The result: a 24/7 personal trainer that understands each user's unique needs.",
    cover: "/assets/588BDF96-4A69-4EEA-A48F-BDA57EAC6D03.png",
    gallery: ["/assets/coach_a_screenshot1.png", "/assets/coach_a_screenshot2.png"],
    github: null,
    demo: "https://coach-a-ai-fit.lovable.app/",
    isLive: true
  },
  {
    slug: "sport-style",
    title: "SportStyleAA",
    year: 2025,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    excerpt: "Sports apparel store we built for our client.",
    description: "A comprehensive sports apparel store built with React and Vite. The application features a modern, responsive design with a focus on user experience. The store includes a product catalog, shopping cart, and checkout process. The application is built with a robust Node.js backend and MongoDB database, the platform handles sensitive information with enterprise-level security. Features include real-time messaging, document upload and verification, case status tracking, and automated notifications.\n\nThe frontend provides separate interfaces for professionals and families, with role-based access control and customizable dashboards. Advanced search and filtering capabilities help match families with appropriate service providers based on location, specialization, and availability.",
    cover: "/assets/sport_style.png",
    gallery: ["/assets/sport_style.png"],
    demo: "https://sportstyleaa.com"
  },
  {
    slug: "postmate-gmail-clone",
    title: "PostMate – Gmail-style Client",
    year: 2025,
    tags: ["React", "Vite", "Tailwind", "DynamoDB"],
    excerpt: "Fast Gmail-like UI with filters and mock server.",
    description: "A high-performance email client that replicates Gmail's interface and functionality. Built with React and Vite for lightning-fast load times, featuring advanced filtering, threading, and real-time updates. The application uses DynamoDB for scalable data storage and includes comprehensive email management features.\n\nThe UI focuses on responsiveness and accessibility, with smooth animations and intuitive navigation. Advanced features include bulk operations, keyboard shortcuts, and customizable themes. The mock server architecture allows for offline development and testing.\n\nOptimized for performance with lazy loading, virtual scrolling for large email lists, and efficient state management. The application handles thousands of emails seamlessly while maintaining smooth user interactions.",
    cover: "/assets/postmate-cover.jpg",
    gallery: ["/assets/postmate-1.jpg", "/assets/postmate-2.jpg", "/assets/postmate-3.jpg"],
    github: "https://github.com/asaferdman/postmate-gmail-clone",
    demo: "https://postmate-demo.vercel.app"
  },
  {
    slug: "sports-analytics-bot",
    title: "Sports Analytics Bot",
    year: 2024,
    tags: ["Python", "AI", "Machine Learning", "APIs"],
    excerpt: "AI-powered basketball and football analytics with predictions.",
    description: "An intelligent sports analytics system that provides real-time insights and predictions for basketball and football games. The bot analyzes player performance, team statistics, and historical data to generate accurate forecasts and betting insights.\n\nUtilizes machine learning algorithms to process vast amounts of sports data from multiple APIs. Features include player injury impact analysis, team performance trends, weather effects on outdoor games, and real-time odds tracking.\n\nThe system provides automated reports, social media integration for sharing insights, and customizable alert systems for significant statistical anomalies or betting opportunities. Data visualization components help users understand complex analytics through interactive charts and graphs.",
    cover: "/assets/sports-analytics-cover.jpg",
    gallery: ["/assets/sports-analytics-1.jpg", "/assets/sports-analytics-2.jpg", "/assets/sports-analytics-3.jpg"],
    github: "https://github.com/asaferdman/sports-analytics-bot",
    demo: "https://sports-analytics-demo.herokuapp.com"
  },
  {
    slug: "airdnd-airbnb-clone",
    title: "Airdnd – Airbnb Clone",
    year: 2024,
    tags: ["Next.js", "React", "Tailwind", "Prisma"],
    excerpt: "Full-featured vacation rental platform with booking system.",
    description: "A complete vacation rental platform that mirrors Airbnb's functionality with modern web technologies. Built with Next.js for optimal performance and SEO, featuring server-side rendering and static generation where appropriate.\n\nIncludes comprehensive property management, advanced search with filters, interactive maps, secure payment processing, and review systems. The booking system handles availability calendars, pricing calculations, and reservation management with conflict prevention.\n\nHost and guest dashboards provide detailed analytics, booking management, and communication tools. The platform supports multiple property types, dynamic pricing, and promotional campaigns. Advanced features include wishlist functionality, instant booking, and automated check-in processes.",
    cover: "/assets/airdnd-cover.jpg",
    gallery: ["/assets/airdnd-1.jpg", "/assets/airdnd-2.jpg", "/assets/airdnd-3.jpg"],
    github: "https://github.com/asaferdman/airdnd-clone",
    demo: "https://airdnd-clone.vercel.app"
  },
  {
    slug: "device-management-dashboard",
    title: "Device Management Dashboard",
    year: 2023,
    tags: ["React", "Microfrontends", "TypeScript", "Docker"],
    excerpt: "Enterprise device management with microfrontend architecture.",
    description: "An enterprise-grade device management dashboard built with microfrontend architecture for scalability and maintainability. The system manages thousands of IoT devices, computers, and mobile devices across multiple organizations.\n\nEach microfrontend handles specific domain functionality: device inventory, monitoring, software deployment, security compliance, and reporting. The architecture allows teams to develop and deploy independently while maintaining a cohesive user experience.\n\nFeatures include real-time device status monitoring, remote troubleshooting capabilities, automated patch management, and comprehensive security auditing. The dashboard provides customizable views for different user roles and organizations, with advanced filtering and bulk operations for efficient device management.",
    cover: "/assets/device-management-cover.jpg",
    gallery: ["/assets/device-management-1.jpg", "/assets/device-management-2.jpg"],
    github: "https://github.com/asaferdman/device-management-dashboard",
    demo: "https://device-dashboard-demo.com"
  },
  {
    slug: "ai-interview-prep",
    title: "AI Interview Prep Assistant",
    year: 2023,
    tags: ["React", "AI", "Node.js", "OpenAI"],
    excerpt: "Personalized interview preparation with AI feedback.",
    description: "An AI-powered interview preparation platform that provides personalized coaching and feedback for job seekers. The system analyzes user responses to common interview questions and provides detailed improvements suggestions.\n\nIntegrates with OpenAI's API to generate realistic interview scenarios, evaluate answers for content and delivery, and provide industry-specific questions. Features include mock video interviews, speech analysis, body language assessment, and progress tracking.\n\nThe platform adapts to different industries and job levels, offering customized preparation paths. Advanced features include company-specific interview prep, salary negotiation guidance, and integration with job boards for relevant position matching.",
    cover: "/assets/ai-interview-cover.jpg",
    gallery: ["/assets/ai-interview-1.jpg", "/assets/ai-interview-2.jpg", "/assets/ai-interview-3.jpg"],
    github: "https://github.com/asaferdman/ai-interview-prep",
    demo: "https://ai-interview-prep.netlify.app"
  }
];