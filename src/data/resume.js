// All site content lives here — edit this file to update the portfolio.
// NOTE: GenAI Engineer bullets are inferred (role is new, not in the PDF) — review before publishing.
// Project links are placeholders ("#") until real URLs are supplied.

export const profile = {
  name: "Uday Malviya",
  headline: "Full Stack + GenAI Engineer",
  pitch:
    "I build scalable web applications with React, Node.js and FastAPI — and voice-driven GenAI systems powered by RAG, LangChain and pgvector.",
  location: "Indore, Madhya Pradesh, India",
  email: "udaymalviya2003@gmail.com",
  github: "https://github.com/udaymalviya",
  linkedin: "https://www.linkedin.com/in/uday-malviya",
  resumeFile: "/Uday_Malviya_Resume.pdf",
};

export const experience = [
  {
    company: "ZenQua Technologies Pvt. Ltd.",
    role: "GenAI Engineer",
    period: "Apr 2026 – Present",
    location: "Indore, India · On-site",
    bullets: [
      "Developing GenAI product features end to end — RAG pipelines, hybrid retrieval (vector + full-text search), and LLM orchestration with LangChain and LangGraph.",
      "Building FastAPI services backing AI features, with PostgreSQL and pgvector for embedding storage and retrieval.",
      "Optimizing LLM response latency with Redis caching, connection pooling, and streaming responses over WebSockets.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "pgvector", "Azure OpenAI", "Redis"],
  },
  {
    company: "ZenQua Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Apr 2026",
    location: "Indore, India · On-site",
    bullets: [
      "Engineered scalable web applications using React.js, TypeScript, and API-driven architecture, contributing across frontend and backend systems.",
      "Designed and optimized RESTful APIs to improve data efficiency and system performance.",
      "Implemented Redis caching to reduce API latency and enhance application responsiveness.",
      "Collaborated on deployments using AWS, ensuring scalable and reliable production systems.",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "REST APIs", "Redis", "AWS"],
  },
  {
    company: "Fin Coopers Tech Pvt Ltd.",
    role: "Full Stack Developer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Indore, India · On-site",
    bullets: [
      "Built and maintained RESTful APIs using Node.js, Express.js, and MongoDB, powering core backend modules.",
      "Designed MongoDB schemas and integrated backend services with clean, modular architecture for scalability.",
      "Implemented real-time functionality using WebSockets, enabling live data updates across the application.",
      "Implemented secure Google OAuth 2.0 authentication, enabling seamless user sign-in and protected application access.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "WebSockets", "OAuth 2.0"],
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
    links: { live: "#", repo: "#" },
  },
  {
    name: "Royal York W",
    year: "2025",
    tagline: "Property management CRM",
    bullets: [
      "Core CRM modules built with React.js and Node.js for property management workflows.",
      "Real-time WebRTC audio/video calling between tenants and property owners.",
      "Google Maps integration for location-based property visualization and management.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Google Maps"],
    links: { live: "#" },
  },
];

export const skillGroups = [
  { label: "Languages", items: ["C++", "Java", "JavaScript", "TypeScript", "Python"] },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "SSR", "State Management", "Socket.IO", "shadcn/ui", "Web Performance"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Event-Driven Architecture"],
  },
  { label: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "Redis", "pgvector"] },
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
