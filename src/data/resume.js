// All site content lives here — edit this file to update the portfolio.
// NOTE: GenAI Engineer bullets are inferred (role is new, not in the PDF) — review before publishing.

export const profile = {
  name: "Uday Malviya",
  headline: "Full Stack Developer",
  pitch:
    "I build scalable, high-performance applications and intelligent solutions that solve real-world problems.",
  location: "Indore, Madhya Pradesh, India",
  email: "udaymalviya2003@gmail.com",
  github: "https://github.com/UdayMalviya11",
  linkedin: "https://www.linkedin.com/in/uday-malviya/",
  resumeFile: "/Uday_Malviya_Resume.pdf",
};

export const experience = [
  {
    company: "ZenQua Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Present",
    location: "Indore, India · On-site",
    bullets: [
      "Developed scalable web applications using React.js, Next.js, TypeScript, and API-driven architecture across frontend and backend systems.",
      "Designed and optimized RESTful APIs with efficient data handling and database queries for improved performance.",
      "Designed MySQL schemas and modular backend services, improving application maintainability and scalability.",
      "Deployed and maintained production applications on AWS, supporting scalable and reliable services.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "MySQL", "REST APIs", "AWS"],
  },
  {
    company: "Fin Coopers Tech Pvt Ltd.",
    role: "Full Stack Developer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Indore, India · On-site",
    bullets: [
      "Developed RESTful APIs using Node.js, Express.js, and MySQL for core application workflows.",
      "Built scalable web applications using Next.js and React.js, implementing reusable components and server-side functionality.",
      "Implemented Redis caching for frequently accessed data, reducing redundant database queries and API latency.",
      "Implemented real-time features using WebSockets for live data updates across the application.",
      "Integrated secure Google OAuth 2.0 authentication for user sign-in and protected application access.",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "Next.js", "Redis", "WebSockets", "OAuth 2.0"],
  },
];

export const projects = [
  {
    name: "VIPRA AI",
    year: "2026",
    tagline: "Voice-based AI physics tutor",
    bullets: [
      "Voice-based AI physics tutor with a RAG pipeline over 6,900+ textbook chunks in pgvector, grounding Azure OpenAI responses with retrieved textbook context.",
      "Hybrid retrieval pipeline combining vector search with PostgreSQL full-text search for better RAG context.",
      "Real-time streaming voice pipeline over WebSockets — latency optimized with connection pooling, embedding pre-warming, and speculative prefetching.",
    ],
    tech: ["FastAPI", "Next.js", "Azure OpenAI", "pgvector", "PostgreSQL", "WebSockets"],
    links: { live: "https://app-tutor-ui-bybdbrfgafe4hubf.canadacentral-01.azurewebsites.net/" },
  },
  {
    name: "myBridge",
    year: "2026",
    tagline: "Professional networking platform",
    bullets: [
      "Built backend services for a networking platform supporting 5+ core modules including jobs, events, and content publishing.",
      "Developed 15+ REST APIs with authentication, role-based authorization, Redis caching, and optimized MySQL queries.",
      "Integrated AWS S3 for media storage and deployed backend services on AWS for production workloads.",
      "Implemented language localization supporting 10+ languages for a multilingual user experience.",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "Redis", "AWS", "React.js"],
    links: { live: "https://www.mybridge.me/" },
  },
  {
    name: "DocuMind",
    year: "2026",
    tagline: "AI-powered document search & RAG platform",
    bullets: [
      "AI-powered document search and chat platform — upload documents, ask natural-language questions, and get context-aware answers with source citations.",
      "Semantic vector search with pgvector on PostgreSQL (Supabase), with RAG orchestration through LangChain and the Gemini API.",
      "FastAPI backend and React + Tailwind CSS frontend, containerized with Docker.",
    ],
    tech: ["React", "Tailwind CSS", "FastAPI", "Python", "Gemini API", "LangChain", "PostgreSQL", "pgvector", "Supabase", "Docker"],
    links: { repo: "https://github.com/UdayMalviya11/AiDocumentSearch" },
  },
  {
    name: "VibeConnect",
    year: "2025",
    tagline: "Full-stack social media platform",
    bullets: [
      "Full-stack social media platform on the MERN stack — user authentication, profiles, posts, and social interactions.",
      "Real-time chat with Socket.IO for live user-to-user messaging.",
      "Responsive interface with a focus on scalable full-stack architecture, deployed on Vercel.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "Vercel"],
    links: {
      live: "https://vibe-connect-ws2o.vercel.app/",
      repo: "https://github.com/UdayMalviya11/VibeConnect",
    },
  },
  {
    name: "Techlog",
    year: "2025",
    tagline: "Tech blogging & news platform",
    bullets: [
      "Full-stack tech blogging platform where users create and share technology-focused posts while staying updated with the latest tech news.",
      "User-generated content with authentication, built on the MERN stack.",
      "Responsive interface for discovering and sharing tech-related content, deployed on Netlify.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Netlify"],
    links: { live: "https://tech-log.netlify.app/" },
  },
  {
    name: "Kabia Travels",
    year: "2025",
    tagline: "Travel booking & content platform",
    bullets: [
      "Developed backend REST APIs using Django for travel packages, destinations, vlogs, bookings, and content management.",
      "Designed PostgreSQL data models, relationships, and business logic to support travel operations and dynamic content workflows.",
      "Implemented API validation, data processing, and backend workflows, integrating Django services with the Angular frontend.",
      "Deployed and configured the application on AWS EC2, managing the production environment and application releases.",
    ],
    tech: ["Django", "PostgreSQL", "Angular", "AWS EC2"],
    links: { live: "https://kabiatravels.com/" },
  },
  {
    name: "Royal York W",
    year: "2025",
    tagline: "Property management CRM",
    bullets: [
      "Built 5+ CRM modules using React.js and Node.js for property management and tenant workflows.",
      "Implemented centralized state management using Redux, improving data flow and state consistency across CRM modules.",
      "Designed and integrated MongoDB database schemas and queries for managing property, tenant, and workflow data.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    links: { live: "http://crm.royalyorkpropertymanagement.ca/" },
  },
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++"] },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux", "SSR", "State Management", "Socket.IO", "shadcn/ui", "Web Performance"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "GraphQL", "Event-Driven Architecture"],
  },
  { label: "Databases & Caching", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "pgvector"] },
  {
    label: "AI / GenAI",
    items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Knowledge Base Design"],
  },
  { label: "Tools & Cloud", items: ["Docker", "AWS", "Git", "GitHub", "Postman"] },
];

export const education = {
  school: "Indore Institute of Science and Technology",
  degree: "B.Tech",
  period: "2021 – 2025",
  detail: "CGPA: 7.32 · Indore, Madhya Pradesh",
};

export const achievements = [
  "Smart India Hackathon 2023 Finalist",
  "Represented Madhya Pradesh in state-level Pickleball tournaments",
];
