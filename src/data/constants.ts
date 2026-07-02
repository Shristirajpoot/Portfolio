// thoda zada ts ho gya idhar — fixed cleanly 😄

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

  POSTGRES = "postgres",
  MONGODB = "mongodb",
  REDIS = "redis",

  DOCKER = "docker",
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  GITHUB = "github",

  TENSORFLOW = "tensorflow",
  OPENCV = "opencv",
 DJANGO = "django",
EXPRESS = "express",
FIREBASE = "firebase",
POSTMAN = "postman",
GEMINI = "gemini",
MEDIAPIPE = "mediapipe",
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
    shortDescription: "Primary language for backend engineering, AI, automation, and machine learning",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.JAVASCRIPT]: {
    id: 2,
    name: "javascript",
    label: "JavaScript",
    shortDescription: "Core language for building scalable web applications.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TYPESCRIPT]: {
    id: 3,
    name: "typescript",
    label: "TypeScript",
    shortDescription: "Type-safe development for large-scale frontend and backend applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.GO]: {
    id: 4,
    name: "go",
    label: "Go",
    shortDescription: "Concurrent backend services and high-performance APIs.",
    color: "#00ADD8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },

  [SkillNames.SQL]: {
    id: 5,
    name: "sql",
    label: "SQL",
    shortDescription: "Database design, querying, and performance optimization.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.REACT]: {
    id: 6,
    name: "react",
    label: "React",
    shortDescription: "Building modern, responsive, component-driven user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production-ready full-stack React framework with SSR and routing.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "tailwind",
    shortDescription: "Utility-first CSS framework for rapid UI development.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 8,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Building high-performance REST APIs with automatic OpenAPI documentation.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend services with JavaScript runtime.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Reliable relational database systems.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Scalable NoSQL database.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.REDIS]: {
    id: 12,
    name: "redis",
    label: "Redis",
    shortDescription: "In-memory caching and queues.",
    color: "#DC382D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 13,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.AWS]: {
    id: 14,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure and deployment.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 15,
    name: "linux",
    label: "Linux",
    shortDescription: "Server & system-level operations.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.GIT]: {
    id: 16,
    name: "git",
    label: "Git",
    shortDescription: "Version control and collaboration.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.TENSORFLOW]: {
    id: 17,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Deep learning frameworks.",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },

  [SkillNames.OPENCV]: {
    id: 18,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Computer vision pipelines.",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
};

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
id:1,

startDate:"May 2025",

endDate:"Jul 2025",

title:"Backend Development Intern",

company:"Bluestock Fintech",

description:[
"Developed production-grade backend services using FastAPI and PostgreSQL.",
"Built and maintained 10+ REST APIs supporting financial workflows and integrations.",
"Implemented authentication, request validation, and structured exception handling.",
"Optimized PostgreSQL queries and collaborated with frontend teams for API integration."
],

skills:[
SkillNames.PYTHON,
SkillNames.FASTAPI,
SkillNames.POSTGRES,
SkillNames.DOCKER,
SkillNames.POSTMAN
],
},
   {
id:2,

startDate:"Aug 2025",

endDate:"Apr 2026",

title:"Student Developer (Team Lead)",

company:"Fusion ERP Portal • IIITDM Jabalpur",

description:[
"Led a team of 10 developers building ERP modules for IIITDM Jabalpur.",
"Developed backend features using Django, Python, SQL, and Git.",
"Coordinated task planning, code reviews, and module integration across contributors."
],

skills:[
SkillNames.DJANGO,
SkillNames.PYTHON,
SkillNames.SQL,
SkillNames.GIT
],
},
  {
    id: 3,
    startDate: "Sep 2025",
    endDate: "Nov 2025",
    title: "Software Engineer Intern",
    company: "Infosys Springboard",
    description: [
      "Worked on industry-relevant software development projects.",
      "Gained hands-on experience with backend systems and databases.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.GIT,
      SkillNames.LINUX,
    ],
  },
 {
id:4,

startDate:"Jun 2026",

endDate:"Present",

title:"Intern Developer",

company:"Itransition",

description:[
"Selected after clearing the competitive placement test.",
"Participating in mentor-led software engineering training focused on backend and frontend development.",
"Building industry-standard software engineering practices through collaborative assignments."
],

skills:[
SkillNames.PYTHON,
SkillNames.GIT,
SkillNames.LINUX,
SkillNames.DJANGO
],
},{
id:5,

startDate:"2023",

endDate:"Present",

title:"AI & Full-Stack Developer",

company:"Open Source & Personal Projects",

description:[
"Built AI-powered applications spanning accessibility, cybersecurity, and computer vision.",
"Developed full-stack web applications using React, FastAPI, Node.js, and MongoDB.",
"Contributed to multiple open-source repositories through GSSoC and SSOC."
],

skills:[
SkillNames.PYTHON,
SkillNames.REACT,
SkillNames.NEXTJS,
SkillNames.FASTAPI,
SkillNames.TENSORFLOW,
SkillNames.OPENCV,
SkillNames.GEMINI
],
},
];

/* =========================
   THEME DISCLAIMERS
========================= */

export const themeDisclaimers = {
  light: [
    "Warning: light mode unlocked 🌞",
    "Your eyes have entered hard mode",
    "Brightness turned up to 11",
  ],
  dark: [
    "Welcome back to the shadows 🌙",
    "Dark mode supremacy 🖤",
    "Your eyes thank you",
  ],
};
