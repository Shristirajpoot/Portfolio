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

  SOLIDITY = "solidity",
  ETHEREUM = "ethereum",
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
    shortDescription: "Primary language for AI, ML pipelines, and backend systems.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.JAVASCRIPT]: {
    id: 2,
    name: "javascript",
    label: "JavaScript",
    shortDescription: "Core language for full-stack development.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TYPESCRIPT]: {
    id: 3,
    name: "typescript",
    label: "TypeScript",
    shortDescription: "Type-safe scalable frontend & backend systems.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.GO]: {
    id: 4,
    name: "go",
    label: "Go",
    shortDescription: "High-performance concurrent backend services.",
    color: "#00ADD8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },

  [SkillNames.SQL]: {
    id: 5,
    name: "sql",
    label: "SQL",
    shortDescription: "Relational database querying and optimization.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.REACT]: {
    id: 6,
    name: "react",
    label: "React",
    shortDescription: "Interactive and scalable UI development.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production-ready full-stack React framework.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.FASTAPI]: {
    id: 8,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance Python REST APIs.",
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
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    title: "SDE Intern",
    company: "Bluestock Fintech",
    description: [
      "Worked on production-grade fintech backend systems using FastAPI and PostgreSQL.",
      "Developed and optimized 10+ REST APIs for secure data handling and integrations.",
      "Improved system performance, reliability, and scalability.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
  {
    id: 2,
    startDate: "Sep 2025",
    endDate: "Nov 2025",
    title: "Intern",
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
    id: 3,
    startDate: "2023",
    endDate: "Present",
    title: "AI & Full-Stack Developer",
    company: "Independent Projects & Open Source",
    description: [
      "Built AI-powered systems in fraud detection, NLP, and computer vision.",
      "Developed full-stack and blockchain-based applications with real-world impact.",
      "Contributed to industrial-grade open-source projects (GSSoC, SSOC).",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.TENSORFLOW,
      SkillNames.OPENCV,
      SkillNames.REACT,
      SkillNames.NEXTJS,
    ],
  },
];


export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

