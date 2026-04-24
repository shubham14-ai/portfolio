// Portfolio content configuration
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Shubham Mojad",
    role: "AI Systems & Full-Stack Engineer",
    email: "shu14mojad@gmail.com",
    phone: "+91 76668 34062",
    location: "Nashik, India",
    description: "AI Systems & Full-Stack Engineer with 3.5+ years of experience building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices architecture, React-based product interfaces, and AI-driven vendor intelligence systems. Experienced in prompt engineering, RAG-based workflows, API optimization, database performance tuning, and Dockerized production deployments. Strong focus on system design, reliability, and shipping AI-enabled products end-to-end in startup environments.",
    summary: "Building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices, React/Next.js product UI architecture, and AI-driven vendor intelligence systems. Developed multiple independent SaaS products before joining full-time roles.",
    stats: [
      { value: "3.5+", label: "Years Exp" },
      { value: "12+", label: "Production & Research Projects" },
      { value: "6+", label: "AI Systems" },
    ]
  },

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/shubham14-ai", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shubham-mojad-ai", icon: "Linkedin" },
    { name: "Email", url: "mailto:shu14mojad@gmail.com", icon: "Mail" },
  ],

  // Tech Stack
  techStack: [
    { name: "Python", color: "#00f0ff" },
    { name: "FastAPI", color: "#00ff9d" },
    { name: "React", color: "#00f0ff" },
    { name: "NextJS", color:"00f0ff"},
    { name: "TypeScript", color: "#3178c6" },
    { name: "PostgreSQL", color: "#ffffff" },
    { name: "AI/ML", color: "#ff00a0" },
    { name: "Docker", color: "#7b2dff" },
    { name: "Redux", color: "#764abc" },
    { name: "Zustand", color: "#573369" },
  ],

  // Skills
  skills: {
    categories: [
      {
        title: "Languages",
        name: "Code",
        items: [
          { name: "Python" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "C/C++" },
          { name: "PHP" }
        ],
        color: "#00f0ff",
      },
      {
        title: "Frontend",
        name: "Interfaces",
        items: [
          { name: "React" },
          { name: "NextJS" },
          { name: "HTML5 & CSS3" },
          { name: "Bootstrap" },
          { name: "MUI" },
          { name: "Material React Table" },
          { name: "Redux" },
          { name: "Zustand" }
        ],
        color: "#00ff9d",
      },
      {
        title: "Backend",
        name: "Systems",
        items: [
          { name: "FastAPI" },
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "Laravel" }
        ],
        color: "#ff00a0",
      },
      {
        title: "Databases",
        name: "Data Stores",
        items: [
          { name: "MongoDB" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "SQL Server" },
          { name: "Supabase" }
        ],
        color: "#7b2dff",
      },
      {
        title: "AI & Data",
        name: "Intelligence",
        items: [
          { name: "Machine Learning" },
          { name: "Pandas" },
          { name: "Prompt Engineering" },
          { name: "Vector Search" },
          { name: "LLM Workflows" },
          { name: "AI Chatbots" }
        ],
        color: "#00f0ff",
      },
      {
        title: "DevOps & Tools",
        name: "Infrastructure",
        items: [
          { name: "Docker" },
          { name: "Nginx" },
          { name: "CI/CD" },
          { name: "Load Balancing" },
          { name: "Celery" },
          { name: "Cron Jobs" },
          { name: "Portainer" },
          { name: "Git" },
          { name: "Redis" },
          { name: "Kafka" }
        ],
        color: "#ff00a0",
      },
    ],
     additional: [
      { name: "Docker", category: "DevOps" },
      { name: "Nginx", category: "DevOps" },
      { name: "Git", category: "Tools" },
      { name: "Celery", category: "Backend" },
      { name: "Redis", category: "Caching" },
      { name: "Pandas", category: "Data" },
      { name: "LLM Integration", category: "AI" },
      { name: "Prompt Engineering", category: "AI" },
      { name: "TypeScript", category: "Languages" },
      { name: "Redux", category: "State Management" },
      { name: "Zustand", category: "State Management" }
     ]
  },

  // Expertise
  expertise: [
    "AI Systems Architecture & LLM Workflows (RAG, Structured Prompting)",
    "FastAPI Microservices & REST API Design",
    "React / Next.js Product UI Architecture",
    "Multi-Tenant SaaS Systems & RBAC",
    "Vendor Intelligence & Recommendation Engines",
    "Docker, Nginx & CI/CD Deployments",
    "Background Workers (Celery) & Cron Jobs",
    "PostgreSQL, MongoDB & Query Optimization",

  ],


  


  // Projects
  projects: [
    {
      id: 8,
      title: "Multi-Agent Quant Trading System",
      description: "Experimental multi-agent financial intelligence platform with 17 collaborative AI agents analyzing market data, generating trading signals, and managing risk. Real-time pipeline handling 10,000+ ticks/sec with sub-500ms signal generation using Kafka streaming and TimescaleDB.",
      category: ["ai", "fullstack"],
      tech: ["Python", "FastAPI", "Kafka", "TimescaleDB", "LSTM", "Redis"],
      icon: "Layers",
      color: "#ff00a0",
      featured: true,
      github: "https://github.com/shubham14-ai/quant-trading-system",
      demo: null,
    },
    {
      id: 1,
      title: "AI Vendor Recommendation System",
      description: "LLM-powered supplier ranking and cost-optimization engine. Designed structured prompt pipelines and automated vendor scoring workflows. Integrated SQL-backed data processing and vector-based search mechanisms.",
      category: ["ai", "saas"],
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "React"],
      icon: "Bot",
      color: "#00f0ff",
      featured: true,
      github: "https://github.com/shubham14-ai/vendor-recommendation-system",
    },
    {
      id: 2,
      title: "AI Procurement Optimization Platform",
      description: "Engineered AI recommendation system for retail supply chain use cases. Automated vendor comparison and risk analysis pipelines. Built real-time dashboards using React for analytics and reporting.",
      category: ["ai", "saas"],
      tech: ["FastAPI", "LLM", "MongoDB", "Redis", "Docker"],
      icon: "Sparkles",
      color: "#ff00a0",
      featured: true,
      github: "https://github.com/shubham14-ai/procurement-optimization",
    },
    {
      id: 3,
      title: "Industrial AI Support Bot",
      description: "Built Chainlit-based AI assistant for machine installation and troubleshooting. Designed document ingestion and structured knowledge retrieval workflows.",
      category: ["ai", "fullstack"],
      tech: ["Python", "Chainlit", "FastAPI", "PostgreSQL", "Vector DB"],
      icon: "Bot",
      color: "#ff00a0",
      featured: true,
      github: "https://github.com/shubham14-ai/industrial-ai-bot",
    },
    {
      id: 4,
      title: "AI-Powered Billing Intelligence",
      description: "Developed AI pipelines to convert unstructured billing data into structured insights. Built React dashboards for financial reporting and analytics visualization.",
      category: ["ai", "fullstack"],
      tech: ["Python", "FastAPI", "MongoDB", "React", "Pandas"],
      icon: "Layers",
      color: "#7b2dff",
      featured: true,
      github: "https://github.com/shubham14-ai/billing-intelligence",
    },
    {
      id: 5,
      title: "Event Management Platform",
      description: "Full-stack system with role-based access, booking workflows, and analytics dashboards. Designed scalable APIs optimized for high-concurrency registrations.",
      category: ["fullstack", "saas"],
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
      icon: "Code2",
      color: "#00ff9d",
      featured: false,
      github: "https://github.com/shubham14-ai/event-management",
    },
    {
      id: 6,
      title: "Doctor Appointment System",
      description: "Built appointment scheduling system with patient, doctor, and admin modules. Implemented authentication, reminders, and structured medical data workflows.",
      category: ["fullstack", "saas"],
      tech: ["React", "FastAPI", "PostgreSQL", "JWT", "Docker"],
      icon: "Code2",
      color: "#00f0ff",
      featured: false,
      github: "https://github.com/shubham14-ai/doctor-appointment",
    },
    {
      id: 7,
      title: "Gym CRM & Membership Platform",
      description: "Subscription-based CRM with billing automation, attendance tracking, and AI-powered health features. Implementing AI diet planning, workout auto-progression engine, and member tracking pipeline for personalized fitness recommendations.",
      category: ["saas", "ai"],
      tech: ["Next.js", "Python", "PostgreSQL", "Stripe", "AI/ML"],
      icon: "Layers",
      color: "#ff00a0",
      featured: false,
      github: "https://github.com/shubham14-ai/gym-crm",
      demo: null,
    },
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "Mohap (AI Team)",
      role: "Full-Stack & AI Engineer",
      period: "Mar 2025 – Present",
      location: "Remote",
      description: "Led end-to-end development of AI-powered SaaS platforms for procurement and vendor intelligence. Built three core systems: Industrial AI Bot, Chatbot Platform, and WhatsApp Procurement Agent. Achieved 35% API latency improvement through query optimization and caching strategies.",
      achievements: [
        "Architected scalable FastAPI microservices integrated with PostgreSQL and MongoDB",
        "Designed multi-tenant system architecture supporting AI chatbot and recommendation systems",
        "Implemented LLM-based AI workflows using structured prompting and RAG pipelines",
        "Managed Dockerized deployments with Nginx reverse proxy, load balancing, and CI/CD automation",
        "Optimized API response time by 35% through database query optimization and Redis caching",
        "Built Industrial AI Bot for machine installation troubleshooting using Chainlit and vector search",
        "Developed Chatbot Platform with contextual conversation flows and knowledge retrieval",
        "Created WhatsApp Procurement Agent for automated vendor communication and order tracking",
        "Built monitoring and centralized logging systems for production reliability",
      ],
      type: "work" as const,
    },
    {
      id: 2,
      company: "Blue Crest",
      role: "Full-Stack Developer",
      period: "Jan 2024 – Feb 2025",
      location: "Remote",
      description: "Developed production-grade applications using Python, FastAPI, React.js, and JavaScript.",
      achievements: [
        "Built and optimized a high-performance billing system leveraging MongoDB aggregation pipelines and indexing strategies",
        "Designed RESTful APIs optimized for analytics and large-scale reporting workloads",
        "Improved UI architecture with dynamic data grids, pagination, filtering, and reporting dashboards",
        "Managed Docker-based production releases and Nginx server configuration",
        "Implemented Celery workers and cron jobs for background task processing and automation",
        "Handled end-to-end production lifecycle including deployment, infrastructure setup, monitoring, and performance tuning",
      ],
      type: "work" as const,
    },
    {
      id: 3,
      company: "Vaayuh System",
      role: "Software Engineering Intern",
      period: "Nov 2022 – Dec 2023",
      location: "Pune, India",
      description: "Contributed to full-stack development across MERN, Laravel, and Python-Flask applications.",
      achievements: [
        "Built admin dashboards, client portals, and secure third-party API integrations",
        "Integrated payment gateways and Zoom APIs for coaching platforms",
        "Supported ML-enabled features and optimized backend API performance",
        "Delivered features under production timelines using Agile methodology",
      ],
      type: "internship" as const,
    },
  ],

  // Independent AI & SaaS Projects (Pre-Employment & Personal Products)
  independentProjects: [
    {
      title: "Gym CRM & Membership Intelligence Platform",
      description: "End-to-end SaaS platform designed for gym operations, membership lifecycle management, retention analytics, and AI-powered health features.",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
      icon: "Layers",
      color: "#ff00a0",
      highlights: [
        "Architected multi-role SaaS system supporting admins, trainers, and members with RBAC authorization",
        "Built subscription billing automation with recurring payments and failure handling workflows",
        "Implemented attendance analytics pipelines to track member activity and retention patterns",
        "Integrating AI diet planning engine for personalized nutrition recommendations based on member goals",
        "Developing workout auto-progression system using ML to adapt training intensity based on performance data",
        "Building member tracking pipeline for real-time health metrics and personalized fitness insights",
        "Optimized APIs for high-frequency check-in workloads and real-time dashboard reporting"
      ]
    },
    {
      title: "Healthcare Appointment Scheduling Platform",
      description: "Full-stack scheduling and healthcare workflow system supporting patient, doctor, and administrative roles.",
      tech: ["React", "FastAPI", "PostgreSQL", "JWT Auth", "Docker"],
      icon: "Code2",
      color: "#00f0ff",
      highlights: [
        "Designed modular FastAPI backend with scalable appointment scheduling workflows",
        "Implemented real-time slot management and conflict prevention",
        "Built secure medical data workflows with structured patient records",
        "Developed automated reminders and notification system",
        "Optimized database queries for high-concurrency appointment booking"
      ]
    },
    {
      title: "High-Concurrency Event Booking System",
      description: "Full-stack platform for managing large-scale event registrations, ticketing workflows, and analytics dashboards.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker"],
      icon: "Code2",
      color: "#00ff9d",
      highlights: [
        "Built scalable booking architecture supporting concurrent ticket reservations",
        "Implemented role-based access control for organizers and attendees",
        "Designed event analytics dashboards for attendance and revenue insights",
        "Integrated Redis-based caching to handle peak registration traffic",
        "Developed real-time booking state management to prevent double-booking"
      ]
    },
  ],

  // AI Agent Systems (Single & Multi-Agent)
  aiAgentSystems: [
    {
      id: 1,
      type: "single",
      title: "LLM-Based Vendor Intelligence Engine",
      description: "LLM-powered supplier ranking and cost-optimization engine using structured prompt pipelines and automated vendor scoring workflows.",
      agents: 1,
      status: "Completed",
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Vector Search"],
      icon: "Bot",
      color: "#00f0ff",
      highlights: [
        "Engineered structured prompt engineering pipelines for complex vendor evaluation",
        "Implemented RAG-based workflows for contextual supplier intelligence",
        "Automated vendor scoring and recommendation generation workflows"
      ]
    },
    {
      id: 2,
      type: "multi-agent",
      title: "Experimental Multi-Agent Quant Trading System",
      description: "Experimental multi-agent financial intelligence platform where specialized AI agents collaborate to analyze market data, generate trading signals, and manage risk.",
      agents: 17,
      status: "In Progress",
      tech: ["Python", "FastAPI", "Kafka", "TimescaleDB", "LSTM", "Pandas"],
      icon: "Layers",
      color: "#ff00a0",
      features: [
        "17 collaborative AI agents: Data Ingestion, Technical Indicators, Market Prediction, Strategy Evaluation, Risk Management, Execution Planning",
        "Real-time market processing pipeline handling 10,000+ ticks/sec",
        "Sub-500ms signal generation for trading decisions",
        "Multi-layer risk control system with portfolio exposure limits and circuit breakers",
        "Time-series optimized storage using TimescaleDB",
        "Event-driven architecture using Kafka streaming",
        "Comprehensive documentation (20+ architecture docs)"
      ]
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    honours: "Honours in Cyber Security",
    institution: "Sinhgad Institute of Technology and Science, Pune",
    cgpa: "9.16 / 10",
    period: "2019 – 2023"
  },

  // Contact Info
  contact: [
    { icon: "Mail", label: "Email", value: "shu14mojad@gmail.com", href: "mailto:shu14mojad@gmail.com" },
    { icon: "Phone", label: "Phone", value: "+91 76668 34062", href: "tel:+917666834062" },
    { icon: "MapPin", label: "Location", value: "Nashik, India", href: null },
  ],
};