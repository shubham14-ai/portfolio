// Portfolio content configuration
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Shubham Mojad",
    role: "AI Systems & Full-Stack Engineer",
    email: "shu14mojad@gmail.com",
    phone: "+91 76668 34062",
    location: "Nashik, India",
    description: "AI Systems & Full-Stack Engineer with 2.5+ years of experience building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices architecture, React-based product interfaces, and AI-driven vendor intelligence systems. Experienced in prompt engineering, RAG-based workflows, API optimization, database performance tuning, and Dockerized production deployments. Strong focus on system design, reliability, and shipping AI-enabled products end-to-end in startup environments.",
    summary: "Building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices, React/Next.js product UI architecture, and AI-driven vendor intelligence systems.",
    stats: [
      { value: "3.5+", label: "Years Exp" },
      { value: "12+", label: "Projects" },
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
    { name: "PostgreSQL", color: "#ffffff" },
    { name: "AI/ML", color: "#ff00a0" },
    { name: "Docker", color: "#7b2dff" },
  ],

  // Skills
  skills: {
    categories: [
      {
        title: "Technical Proficiency",
        name: "Code",
        items: [
          { name: "Python", level: 95 },
          { name: "AI Prompting", level: 90 },
          { name: "FastAPI", level: 95 },
          { name: "React", level: 92 },
          { name: "Docker", level: 92 }
        ],
        color: "#4a5568",
      },
      {
        title: "Languages",
        name: "Code",
        items: [
          { name: "Python", level: 95 },
          { name: "JavaScript", level: 90 },
          { name: "C/C++", level: 85 },
          { name: "PHP", level: 80 }
        ],
        color: "#00f0ff",
      },
      {
        title: "Frontend",
        name: "Interfaces",
        items: [
          { name: "React", level: 92 },
          { name: "NextJS", level: 88 },
          { name: "HTML5 & CSS3", level: 90 },
          { name: "MUI", level: 85 },
          { name: "Material React Table", level: 80 }
        ],
        color: "#00ff9d",
      },
      {
        title: "Backend",
        name: "Systems",
        items: [
          { name: "FastAPI", level: 95 },
          { name: "Node.js", level: 88 },
          { name: "Express.js", level: 85 },
          { name: "Laravel", level: 80 }
        ],
        color: "#ff00a0",
      },
      {
        title: "Databases",
        name: "Data Stores",
        items: [
          { name: "MongoDB", level: 90 },
          { name: "PostgreSQL", level: 95 },
          { name: "MySQL", level: 85 },
          { name: "SQL Server", level: 80 }
        ],
        color: "#7b2dff",
      },
      {
        title: "AI & Data",
        name: "Intelligence",
        items: [
          { name: "Machine Learning", level: 90 },
          { name: "Pandas", level: 88 },
          { name: "Prompt Engineering", level: 95 },
          { name: "Vector Search", level: 92 },
          { name: "LLM Workflows", level: 95 },
          { name: "AI Chatbots", level: 90 }
        ],
        color: "#00f0ff",
      },
      {
        title: "DevOps",
        name: "Infrastructure",
        items: [
          { name: "Docker", level: 92 },
          { name: "Nginx", level: 88 },
          { name: "CI/CD", level: 85 },
          { name: "Load Balancing", level: 80 },
          { name: "Celery", level: 85 },
          { name: "Cron Jobs", level: 82 },
          { name: "Portainer", level: 75 }
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
      { name: "Prompt Engineering", category: "AI" }
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
      id: 1,
      title: "AI Vendor Recommendation System",
      description: "LLM-powered supplier ranking and cost-optimization engine. Designed structured prompt pipelines and automated vendor scoring workflows. Integrated SQL-backed data processing and vector-based search mechanisms.",
      category: ["ai", "saas"],
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "React"],
      icon: "Bot",
      color: "#00f0ff",
      featured: true,
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
    },
    {
      id: 7,
      title: "Gym CRM & Membership Platform",
      description: "Subscription-based CRM with billing automation and attendance tracking. Integrated AI-assisted insights for member engagement and retention analysis.",
      category: ["saas", "ai"],
      tech: ["Next.js", "Python", "PostgreSQL", "Stripe", "AI/ML"],
      icon: "Layers",
      color: "#ff00a0",
      featured: false,
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
      description: "Led end-to-end development of AI-powered SaaS platforms for procurement and vendor intelligence.",
      achievements: [
        "Architected scalable FastAPI microservices integrated with PostgreSQL and MongoDB",
        "Designed multi-tenant system architecture supporting AI chatbot and recommendation systems",
        "Implemented LLM-based AI workflows using structured prompting and RAG pipelines",
        "Managed Dockerized deployments with Nginx reverse proxy, load balancing, and CI/CD automation",
        "Optimized API response time and database queries for high-concurrency workloads",
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
    {
      id: 4,
      company: "Freelance",
      role: "AI & SaaS Engineer",
      period: "2023 – Present",
      location: "Remote",
      description: "Designed and delivered scalable SaaS platforms for SMB clients.",
      achievements: [
        "Event Management Platform - Developed full-stack booking system with role-based authentication and analytics dashboards. Optimized APIs for high-concurrency user registrations.",
        "Doctor Appointment System - Built appointment scheduling system with patient, doctor, and admin modules. Implemented authentication, reminders, and structured medical data workflows.",
        "Gym CRM & Membership Platform - Developed subscription-based CRM with billing automation and attendance tracking. Integrated AI-driven engagement insights and retention analytics.",
        "Managed Docker-based cloud deployments with Nginx and CI/CD pipelines",
        "Integrated LLM-based summarization and reporting workflows",
      ],
      type: "freelance" as const,
    },
  ],

  // Contact Info
  contact: [
    { icon: "Mail", label: "Email", value: "shu14mojad@gmail.com", href: "mailto:shu14mojad@gmail.com" },
    { icon: "Phone", label: "Phone", value: "+91 76668 34062", href: "tel:+917666834062" },
    { icon: "MapPin", label: "Location", value: "Nashik, India", href: null },
  ],
};