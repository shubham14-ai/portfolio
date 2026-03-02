// Portfolio content configuration
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Shubham Mojad",
    role: "AI Systems & Full-Stack Engineer",
    email: "shu14mojad@gmail.com",
    phone: "+91 76668 34062",
    location: "Nashik, India",
    description: "AI Systems & Full-Stack Engineer with 2.5+ years of experience building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices, React-based product interfaces, vendor intelligence systems, and Dockerized production deployments. Strong focus on prompt engineering, backend architecture, system reliability, and shipping AI-enabled products end-to-end in startup environments.",
    summary: "Building multi-tenant SaaS platforms and LLM-powered applications. Specialized in FastAPI microservices, React/Next.js product UI architecture, and AI-driven vendor intelligence systems.",
    stats: [
      { value: "2.5+", label: "Years Exp" },
      { value: "12+", label: "Projects" },
      { value: "6+", label: "AI Systems" },
    ]
  },

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:shu14mojad@gmail.com", icon: "Mail" },
  ],

  // Tech Stack
  techStack: [
    { name: "Python", color: "#00f0ff" },
    { name: "FastAPI", color: "#00ff9d" },
    { name: "React", color: "#00f0ff" },
    { name: "Next.js", color: "#ffffff" },
    { name: "AI/ML", color: "#ff00a0" },
    { name: "Docker", color: "#7b2dff" },
  ],

  // Skills
  skills: {
    categories: [
      {
        title: "Languages",
        skills: [
          { name: "Python", level: 95 },
          { name: "JavaScript", level: 90 },
        ],
        color: "#00f0ff",
      },
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 92 },
          { name: "Next.js", level: 90 },
          { name: "HTML5/CSS3", level: 88 },
          { name: "Bootstrap", level: 85 },
        ],
        color: "#00ff9d",
      },
      {
        title: "Backend",
        skills: [
          { name: "FastAPI", level: 95 },
          { name: "Node.js", level: 82 },
          { name: "Express.js", level: 80 },
        ],
        color: "#ff00a0",
      },
      {
        title: "Databases",
        skills: [
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 88 },
          { name: "MySQL", level: 85 },
        ],
        color: "#7b2dff",
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
      { name: "RAG", category: "AI" },
      { name: "Vector Search", category: "AI" },
      { name: "CI/CD", category: "DevOps" },
      { name: "Cron Jobs", category: "DevOps" },
    ],
  },

  // Expertise
  expertise: [
    "AI Systems Architecture & LLM Workflows (RAG, Structured Prompting)",
    "FastAPI Microservices & REST API Design",
    "React / Next.js Product UI Architecture",
    "Multi-Tenant SaaS Systems & RBAC",
    "Vendor Intelligence & Recommendation Engines",
    "Docker, Nginx & CI/CD Deployments",
    "PostgreSQL, MongoDB & Query Optimization",
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "AI Vendor Recommendation System",
      description: "LLM-powered vendor intelligence platform for cost optimization and smart supplier ranking. Designed structured prompt pipelines and data ingestion workflows for automated scoring logic.",
      category: ["ai", "saas"],
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "React"],
      icon: "Bot",
      color: "#00f0ff",
      featured: true,
    },
    {
      id: 2,
      title: "AI Procurement Optimization Platform",
      description: "Engineered AI-driven recommendation engine for retail supply-chain use cases. Automated vendor comparison workflows with real-time logging and monitoring.",
      category: ["ai", "saas"],
      tech: ["FastAPI", "LLM", "MongoDB", "Redis", "Docker"],
      icon: "Sparkles",
      color: "#ff00a0",
      featured: true,
    },
    {
      id: 3,
      title: "AI-Powered Billing Intelligence",
      description: "Developed AI pipelines to convert unstructured billing data into structured insights. Built React dashboards for financial reporting and analytics visualization.",
      category: ["ai", "fullstack"],
      tech: ["Python", "React", "FastAPI", "PostgreSQL", "Pandas"],
      icon: "Layers",
      color: "#7b2dff",
      featured: true,
    },
    {
      id: 4,
      title: "Event Management Platform",
      description: "Full-stack system with role-based access, booking workflows, and analytics dashboards. Designed scalable APIs optimized for high-concurrency registrations.",
      category: ["fullstack", "saas"],
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
      icon: "Code2",
      color: "#00ff9d",
      featured: false,
    },
    {
      id: 5,
      title: "Doctor Appointment System",
      description: "Appointment scheduling platform with patient, doctor, and admin modules. Implemented secure authentication, reminders, and structured medical data handling.",
      category: ["fullstack", "saas"],
      tech: ["React", "FastAPI", "PostgreSQL", "JWT", "Docker"],
      icon: "Code2",
      color: "#00f0ff",
      featured: false,
    },
    {
      id: 6,
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
      period: "Mar 2025 - Present",
      location: "Remote",
      description: "Led end-to-end development of AI-powered SaaS systems for vendor intelligence and procurement optimization.",
      achievements: [
        "Architected FastAPI microservices with PostgreSQL & MongoDB",
        "Designed Dockerized deployments with Nginx and CI/CD pipelines",
        "Built LLM-powered vendor recommendation systems",
        "Implemented Celery workers and scheduled automation tasks",
      ],
      type: "work" as const,
    },
    {
      id: 2,
      company: "Blue Crest",
      role: "Full-Stack Developer",
      period: "Jan 2024 - Feb 2025",
      location: "Remote",
      description: "Developed billing and reporting systems using FastAPI, React, and MongoDB aggregation pipelines.",
      achievements: [
        "Optimized database indexing and reporting APIs for high-volume dashboard workflows",
        "Enhanced UI components (data grids, pagination, filtering) for large dataset handling",
        "Managed Docker-based deployments, Nginx configuration, and release automation",
      ],
      type: "work" as const,
    },
    {
      id: 3,
      company: "Vaayuh System",
      role: "Software Engineering Intern",
      period: "Nov 2021 - Dec 2023",
      location: "Pune, India",
      description: "Contributed to full-stack development across MERN, Laravel, and Flask applications.",
      achievements: [
        "Built coaching platform integrating payment gateway and Zoom APIs",
        "Developed admin dashboards, client portals, and secure third-party API integrations",
      ],
      type: "internship" as const,
    },
    {
      id: 4,
      company: "Freelance",
      role: "AI & SaaS Engineer",
      period: "2023 - Present",
      location: "Remote",
      description: "Design and deliver production-ready SaaS platforms for small and mid-sized businesses.",
      achievements: [
        "Event Management Platform with role-based access and analytics dashboards",
        "Doctor Appointment & Clinic System with secure authentication and reminders",
        "Gym CRM & Membership Platform with billing automation and AI insights",
        "Managed Docker-based cloud deployments with Nginx and CI/CD pipelines",
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