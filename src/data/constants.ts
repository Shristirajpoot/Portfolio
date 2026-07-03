// thoda zada ts ho gya idhar — fixed cleanly 😄

/* =========================
   SKILLS
========================= */

/* =========================
   SKILLS
========================= */

export enum SkillNames {
  PYTHON = "python",
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  GO = "go",
  SQL = "sql",

  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",

  FASTAPI = "fastapi",
  FLASK = "flask",
  NODEJS = "nodejs",
  EXPRESS = "express",
  DJANGO = "django",

  POSTGRES = "postgres",
  MONGODB = "mongodb",
  REDIS = "redis",
  FIREBASE = "firebase",

  DOCKER = "docker",
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  GITHUB = "github",
  POSTMAN = "postman",

  TENSORFLOW = "tensorflow",
  OPENCV = "opencv",
  MEDIAPIPE = "mediapipe",
  GEMINI = "gemini",
  SOCKETIO = "socketio",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription:
      "Backend engineering, AI, automation, and scalable software development.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.JAVASCRIPT]: {
    id: 2,
    name: "javascript",
    label: "JavaScript",
    shortDescription:
      "Modern language for interactive frontend and backend applications.",
    color: "#F7DF1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TYPESCRIPT]: {
    id: 3,
    name: "typescript",
    label: "TypeScript",
    shortDescription:
      "Type-safe development for scalable frontend and backend systems.",
    color: "#3178C6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.GO]: {
    id: 4,
    name: "go",
    label: "Go",
    shortDescription:
      "High-performance concurrent backend services and APIs.",
    color: "#00ADD8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },

  [SkillNames.SQL]: {
    id: 5,
    name: "sql",
    label: "SQL",
    shortDescription:
      "Database design, querying, and performance optimization.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.REACT]: {
    id: 6,
    name: "react",
    label: "React",
    shortDescription:
      "Building responsive and component-driven user interfaces.",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Production-ready React framework with SSR and App Router.",
    color: "#E5E5E5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Utility-first CSS framework for modern responsive interfaces.",
    color: "#38BDF8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  [SkillNames.FASTAPI]: {
    id: 9,
    name: "fastapi",
    label: "FastAPI",
    shortDescription:
      "High-performance REST APIs with automatic OpenAPI documentation.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },

  [SkillNames.FLASK]: {
    id: 10,
    name: "flask",
    label: "Flask",
    shortDescription:
      "Lightweight Python framework for APIs and web applications.",
    color: "#E5E5E5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },

  [SkillNames.NODEJS]: {
    id: 11,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "Backend development using JavaScript runtime.",
    color: "#68A063",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 12,
    name: "express",
    label: "Express.js",
    shortDescription:
      "Minimal and scalable Node.js backend framework.",
    color: "#E5E5E5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.DJANGO]: {
    id: 13,
    name: "django",
    label: "Django",
    shortDescription:
      "Secure Python framework for scalable web applications.",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "Relational database design, optimization, and complex querying.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 15,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "Flexible NoSQL database for scalable applications.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.REDIS]: {
    id: 16,
    name: "redis",
    label: "Redis",
    shortDescription:
      "In-memory caching, pub/sub messaging, and session storage.",
    color: "#DC382D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Authentication, cloud storage, and real-time backend services.",
    color: "#FFCA28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Containerization and reproducible development environments.",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.AWS]: {
    id: 19,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Cloud infrastructure, deployment, and backend services.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  [SkillNames.LINUX]: {
    id: 20,
    name: "linux",
    label: "Linux",
    shortDescription:
      "Linux server administration and development environment.",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.GIT]: {
    id: 21,
    name: "git",
    label: "Git",
    shortDescription:
      "Version control and collaborative software development.",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 22,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Code hosting, collaboration, CI/CD, and open-source development.",
    color: "#E5E5E5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.POSTMAN]: {
    id: 23,
    name: "postman",
    label: "Postman",
    shortDescription:
      "API development, testing, and documentation.",
    color: "#FF6C37",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },

  [SkillNames.TENSORFLOW]: {
    id: 24,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription:
      "Deep learning models for AI and computer vision.",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },

  [SkillNames.OPENCV]: {
    id: 25,
    name: "opencv",
    label: "OpenCV",
    shortDescription:
      "Real-time computer vision and image processing.",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },

  [SkillNames.MEDIAPIPE]: {
    id: 26,
    name: "mediapipe",
    label: "MediaPipe",
    shortDescription:
      "Real-time hand, face, and pose landmark detection.",
    color: "#00BCD4",
    icon: "/icons/mediapipe.svg",
  },

  [SkillNames.GEMINI]: {
    id: 27,
    name: "gemini",
    label: "Gemini API",
    shortDescription:
      "LLM integration, prompt engineering, and AI-powered applications.",
    color: "#4285F4",
    icon: "/icons/gemini.svg",
  },

  [SkillNames.SOCKETIO]: {
    id: 28,
    name: "socketio",
    label: "Socket.IO",
    shortDescription:
      "Real-time bidirectional communication for web applications.",
    color: "#E5E5E5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
};

/* =========================
   EXPERIENCE
========================= */


/* =========================
   EXPERIENCE
========================= */

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jun 2026",
    endDate: "Present",
    title: "Intern Developer",
    company: "Itransition",
    description: [
  "Selected after clearing Itransition's competitive internship selection process.",
  "Participating in mentor-led software engineering training focused on modern backend and frontend development.",
  "Developing production-quality software through mentor-guided assignments and collaborative engineering projects."
],
    skills: [
      SkillNames.PYTHON,
      SkillNames.DJANGO,
      SkillNames.GIT,
      SkillNames.LINUX,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2025",
    endDate: "Apr 2026",
    title: "Student Developer (Team Lead)",
    company: "Fusion ERP Portal • IIITDM Jabalpur",
   description: [
  "Led a team of 10 student developers building ERP modules for IIITDM Jabalpur.",
  "Developed backend features using Django, Python, SQL, and Git.",
  "Coordinated task allocation, pull request reviews, and integration across multiple contributors.",
  "Worked within a production ERP codebase following collaborative development practices."
],
    skills: [
      SkillNames.DJANGO,
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.GIT,
    ],
  },

  {
    id: 3,
    startDate: "Sep 2025",
    endDate: "Nov 2025",
    title: "Software Engineer Intern",
    company: "Infosys Springboard",
    description: [
  "Engineered WasteZero, a MERN-based smart waste pickup platform during the internship.",
  "Implemented role-based authentication, REST APIs, MongoDB schema design, and Socket.IO based real-time communication.",
  "Collaborated in an industry-oriented software development environment following Agile practices."
],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.SOCKETIO,
    ],
  },
   {
    id: 4,
    startDate: "May 2025",
    endDate: "Jul 2025",
    title: "Backend Development Intern",
    company: "Bluestock Fintech",
    description: [
  "Built and maintained 10+ production-grade REST APIs using FastAPI and PostgreSQL.",
  "Implemented authentication, request validation, and structured exception handling for secure backend services.",
  "Optimized SQL queries and improved API performance for financial workflows.",
  "Collaborated with frontend developers to deliver scalable API integrations."
],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.POSTMAN,
    ],
  },

  {
    id: 5,
    startDate: "2023",
    endDate: "Present",
    title: "AI & Full-Stack Developer",
    company:"Independent Projects & Open Source",
    description: [
  "Designed and developed AI-powered applications spanning accessibility, cybersecurity, NLP, and computer vision.",
  "Developed scalable full-stack systems using React, FastAPI, Node.js, MongoDB, PostgreSQL, and Firebase.",
  "Integrated TensorFlow, OpenCV, MediaPipe, and Gemini APIs into real-world AI applications.",
  "Contributed to multiple open-source repositories through GSSoC and SSOC."
],
    skills: [
      SkillNames.PYTHON,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.FASTAPI,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.FIREBASE,
      SkillNames.TENSORFLOW,
      SkillNames.OPENCV,
      SkillNames.MEDIAPIPE,
      SkillNames.GEMINI,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

/* =========================
   THEME DISCLAIMERS
========================= */

export const themeDisclaimers = {
light: [
  "Light mode enabled ☀️",
  "Brightness turned all the way up.",
  "Hope your eyes are ready 😄",
],

dark: [
  "Dark mode activated 🌙",
  "Built for late-night coding.",
  "Your eyes thank you.",
],
};
