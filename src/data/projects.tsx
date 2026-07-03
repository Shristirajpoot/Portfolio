import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiSupabase,
  SiOpencv,
  SiTensorflow,
  SiFastapi,
  SiRedis,
  SiDjango,
  SiAmazon,
  SiGoogle,
  SiStreamlit,
} from "react-icons/si";
import { SiGo } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

export const PROJECT_SKILLS: Record<string, Skill> = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },

  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },

  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },

  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },

  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },

  go: {
    title: "Go",
    bg: "black",
    fg: "white",
    icon: <SiGo />,
  },

  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },

  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },

  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },

  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },

  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },

  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },

  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },

  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazon />,
  },

  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },

  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },

  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },

  mediapipe: {
    title: "MediaPipe",
    bg: "black",
    fg: "white",
    icon: (
      <img
        src="/icons/mediapipe.svg"
        alt="MediaPipe"
        className="w-4 h-4"
      />
    ),
  },

  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <SiGoogle />,
  },
playwright: {
  title: "Playwright",
  bg: "black",
  fg: "white",
  icon: <img src="/icons/playwright.svg" className="w-4 h-4" />,
},
  huggingface: {
  title: "Hugging Face",
  bg: "black",
  fg: "white",
  icon: <img src="/icons/huggingface.svg" className="w-4 h-4" />,
},
  langchain: {
  title: "LangChain",
  bg: "black",
  fg: "white",
  icon: <img src="/icons/langchain.svg" className="w-4 h-4" />,
},
  socketio: {
    title: "Socket.IO",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },

  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },

  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },

  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },

  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },

  framer: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};


export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  live: string;
  github?: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: ReactNode;
};

const projects: Project[] = [
{
  id: "bluestock",
  category: "FinTech • Production Engineering",
  title: "Bluestock IPO Platform",
  src: "/assets/projects-screenshots/bluestock/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png"],
  live: "https://github.com/Shristirajpoot/Bluestock_fintech_webapp",
  github: "https://github.com/Shristirajpoot/Bluestock_fintech_webapp",
 skills: {
  frontend: [
    PROJECT_SKILLS.react,
  ],
  backend: [
    PROJECT_SKILLS.django,
    PROJECT_SKILLS.postgres,
    PROJECT_SKILLS.python,
  ],
},
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Developed during my Bluestock Fintech Internship, this production-grade
          IPO management platform enables investors to explore upcoming IPOs
          while providing administrators with a secure dashboard to manage IPO
          listings through authenticated REST APIs.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
         Platform Features
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built a responsive IPO listing platform with search, filters, pagination and real-time data rendering</li>
          <li>Developed secure JWT-authenticated REST APIs supporting complete IPO CRUD operations</li>
          <li>Designed an admin dashboard for managing IPO lifecycle with validation, protected routes and PostgreSQL integration</li>
          <li>Validated API workflows using Postman and followed production-oriented backend architecture during internship development</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/bluestock/1.png`,
            `${BASE_PATH}/bluestock/2.png`,
            `${BASE_PATH}/bluestock/3.png`,
            `${BASE_PATH}/bluestock/4.png`,
          ]}
        />
      </div>
    );
  },
},{
  id: "wastezero",
  category: "Full-Stack • Infosys Springboard Internship",
  title: "WasteZero",
  src: "/assets/projects-screenshots/wastezero/1.png",
  screenshots: ["1.png", "2.png", "3.png"],
  live: "https://youtu.be/GqzxXxHSdHk",
  github: "https://github.com/Shristirajpoot/Infosys_Intern",
skills: {
  frontend: [
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.tailwind,
  ],
  backend: [
    PROJECT_SKILLS.node,
    PROJECT_SKILLS.express,
    PROJECT_SKILLS.mongo,
    PROJECT_SKILLS.socketio,
  ],
},

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          WasteZero is a full-stack smart waste management platform developed
          during my Infosys Springboard Internship, enabling volunteers, NGOs,
          and administrators to coordinate waste collection, recycling, and
          community engagement through secure, real-time digital workflows.
        </TypographyP>

        <ProjectsLinks
          live={this.live}
          repo={this.github}
        />

        <TypographyH3 className="my-4 mt-8">
          Core Features
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Developed a role-based platform for volunteers, NGOs, and administrators with secure JWT authentication</li>
          <li>Built RESTful APIs and real-time chat using Express.js, MongoDB, and Socket.IO</li>
          <li>Designed scalable MongoDB schemas, CRUD operations, and validated APIs using Postman</li>
          <li>Implemented responsive React interfaces for opportunity management, analytics dashboards, and volunteer tracking</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/wastezero/1.png`,
            `${BASE_PATH}/wastezero/2.png`,
            `${BASE_PATH}/wastezero/3.png`,
          ]}
        />
      </div>
    );
  },
},
{
  id: "hrchacha",
  category: "Generative AI / LLM Application",
  title: "HRChacha",
  src: "/assets/projects-screenshots/hrchacha/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png"],
  live: "https://hrchacha-bmerkgxmqzeiwvlkvjccwt.streamlit.app/",
  github: "https://github.com/Shristirajpoot/HRChacha",
skills: {
  frontend: [
    PROJECT_SKILLS.streamlit,
  ],
  backend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.mongo,
    PROJECT_SKILLS.aws,
    PROJECT_SKILLS.docker,
  ],
},

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          HRChacha is an AI-powered hiring assistant that automates technical
          candidate screening using Llama 3.3 LLM. It conducts dynamic
          interviews, adapts questions based on candidate skills, and generates
          structured hiring reports, helping recruiters streamline the initial
          evaluation process.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
          LLM Pipeline
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built an LLM-powered interview assistant using Llama 3.3, Python and Together AI for intelligent candidate interactions</li>

          <li>Designed prompt-engineering workflows to collect candidate details, generate skill-specific technical questions and produce structured hiring reports</li>

          <li>Integrated MongoDB for persistent candidate data storage and deployed the application using Docker, GitHub Actions, AWS ECR and EC2</li>

          <li>Implemented conversational memory, streaming responses and production-ready deployment for a seamless recruiter and candidate experience</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/hrchacha/1.png`,
            `${BASE_PATH}/hrchacha/2.png`,
            `${BASE_PATH}/hrchacha/3.png`,
            `${BASE_PATH}/hrchacha/4.png`,
          ]}
        />
      </div>
    );
  },
},
  {
  id: "scamsathi",
  category: "Cybersecurity / AI",
  title: "ScamSathi",
  src: "/assets/projects-screenshots/scamsathi/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png"],
  live: "https://cyberrakkshak.netlify.app/",
  github: "https://github.com/Shristirajpoot/ScamSathi",
 skills: {
  frontend: [
    PROJECT_SKILLS.react,
  ],
  backend: [
    PROJECT_SKILLS.fastapi,
    PROJECT_SKILLS.huggingface,
    PROJECT_SKILLS.langchain,
    PROJECT_SKILLS.mongo,
  ],
},

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          ScamSathi is an AI-powered cybersecurity platform that detects phishing
          messages, fraudulent URLs, and online scams while educating users
          through multilingual AI assistance. Built for Digital Bharat, it
          combines machine learning, LLM-powered guidance, and real-time threat
          analysis to improve cyber awareness and digital trust.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
       Security Features
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Developed an AI-powered scam detection engine using BERT, FastAPI and Hugging Face for real-time classification of suspicious messages and URLs</li>

          <li>Built a multilingual awareness assistant with LangChain and LLM workflows to explain cyber threats and recommended actions in regional languages</li>

          <li>Implemented a community-driven reporting dashboard with MongoDB and Firebase to track emerging scam patterns and improve threat visibility</li>

          <li>Designed a responsive React application with accessibility features, REST APIs and offline-ready workflows for users across urban and rural India</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/scamsathi/1.png`,
            `${BASE_PATH}/scamsathi/2.png`,
            `${BASE_PATH}/scamsathi/3.png`,
            `${BASE_PATH}/scamsathi/4.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "gestura",
  category: "AI • Computer Vision",
  title: "Gestura",
  src: "/assets/projects-screenshots/gestura/1.png",
  screenshots: ["1.png", "2.png", "3.png"],
  live: "https://youtu.be/eQEPefRtuNg",
  github: "https://github.com/Shristirajpoot/Gestura-Retail-Accessibility-AI",
  skills: {
    frontend: [PROJECT_SKILLS.react],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.tensorflow,
      PROJECT_SKILLS.mediapipe,
      PROJECT_SKILLS.opencv,
    ],
  },

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Gestura is an AI-powered sign language translation platform that
          enables real-time communication by converting hand gestures into
          text and speech using computer vision and machine learning,
          making everyday interactions more accessible for the deaf and
          hard-of-hearing community.
        </TypographyP>

        <ProjectsLinks
          live={this.live}
          repo={this.github}
        />

        <TypographyH3 className="my-4 mt-8">
          AI & Engineering Highlights
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built a real-time gesture recognition pipeline using MediaPipe, OpenCV and TensorFlow</li>
          <li>Achieved over 95% recognition accuracy with optimized low-latency inference</li>
          <li>Converts sign language into instant text and speech for seamless communication</li>
          <li>Accessibility solution designed for inclusive public and retail environments</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/gestura/1.png`,
            `${BASE_PATH}/gestura/2.png`,
            `${BASE_PATH}/gestura/3.png`,
          ]}
        />
      </div>
    );
  },
},
  {
  id: "webclonepro",
  category: "AI • Browser Automation",
  title: "WebClonePro",
  src: "/assets/projects-screenshots/webcloner.png",
  screenshots: ["webcloner.png"],
  live: "https://youtu.be/jfMwgjjgFoE",
  github: "https://github.com/Shristirajpoot/WebClonePro",
 skills: {
  frontend: [
    PROJECT_SKILLS.next,
  ],
  backend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.fastapi,
    PROJECT_SKILLS.playwright,
  ],
},

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          WebClonePro is an intelligent web cloning platform that recreates
          modern websites by rendering JavaScript-driven pages, extracting
          layouts and content through browser automation, and generating
          interactive previews using a scalable FastAPI backend.
        </TypographyP>

        <ProjectsLinks
          live={this.live}
          repo={this.github}
        />

        <TypographyH3 className="my-4 mt-8">
          Architecture
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built browser automation workflows using Playwright to render and extract dynamic web content</li>
          <li>Developed an asynchronous FastAPI backend for efficient crawling and HTML processing</li>
          <li>Supports modern JavaScript applications, single-page apps (SPAs), and dynamically rendered websites</li>
          <li>Containerized with Docker for reproducible deployments and scalable execution environments</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/webcloner.png`,
            `${BASE_PATH}/webclo.png`,
            `${BASE_PATH}/webb.png`,
            `${BASE_PATH}/web.png`,
            `${BASE_PATH}/we.png`,
          ]}
        />
      </div>
    );
  },
},
  {
  id: "drams",
  category: "AI • Disaster Intelligence",
  title: "DRAMS (Disaster Relief & Rescue System)",
  src: "/assets/projects-screenshots/drams/1.png",
  screenshots: ["1.png", "2.png", "3.png", "4.png"],
  live: "https://youtu.be/4QeUZMUl0Ec",
  github: "https://github.com/Shristirajpoot/Disaster-Relief-and-Rescue-System",
  skills: {
    frontend: [],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.tensorflow,
      PROJECT_SKILLS.opencv,
      PROJECT_SKILLS.mongo,
    ],
  },

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          DRAMS is an AI-powered disaster detection platform that performs
          real-time fire and flood recognition from live video streams,
          automatically generates emergency alerts with evidence snapshots, and
          provides explainable AI visualizations to support faster and more
          reliable disaster response.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
          Detection Pipeline
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built deep learning pipelines for real-time fire and flood detection using OpenCV and TensorFlow</li>
          <li>Integrated Grad-CAM visualizations to explain model predictions and improve AI interpretability</li>
          <li>Implemented automatic alert generation with captured evidence snapshots stored in MongoDB</li>
          <li>Developed a live monitoring dashboard for continuous disaster surveillance and rapid emergency response</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/drams/1.png`,
            `${BASE_PATH}/drams/2.png`,
            `${BASE_PATH}/drams/3.png`,
            `${BASE_PATH}/drams/4.png`,
          ]}
        />
      </div>
    );
  },
},
   {
  id: "tickethub",
  category: "Backend • Distributed Systems",
  title: "TicketHub",
  src: "/assets/projects-screenshots/tickethub/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://github.com/Shristirajpoot/TicketHub",
  github: "https://github.com/Shristirajpoot/TicketHub",
 skills: {
  frontend: [
    PROJECT_SKILLS.next,
  ],
  backend: [
    PROJECT_SKILLS.go,
    PROJECT_SKILLS.postgres,
    PROJECT_SKILLS.redis,
    PROJECT_SKILLS.docker,
  ],
},

  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          TicketHub is a high-performance event ticketing platform engineered
          for flash-sale scenarios, featuring a concurrent Go backend,
          Redis-powered inventory management, secure payment workflows, and a
          scalable containerized architecture.
        </TypographyP>

        <ProjectsLinks
          live={this.live}
          repo={this.github}
        />

        <TypographyH3 className="my-4 mt-8">
        System Highlights
        </TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Built concurrent backend services in Go with PostgreSQL for reliable ticket management</li>
          <li>Implemented Redis-based distributed locking to eliminate overselling during high-demand sales</li>
          <li>Integrated secure payment processing with Stripe webhooks and asynchronous order confirmation</li>
          <li>Containerized the application with Docker for reproducible deployments and scalable infrastructure</li>
        </ul>

        <TypographyH3 className="my-6">
          Screenshots
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/tickethub/1.png`,
            `${BASE_PATH}/tickethub/2.png`,
          ]}
        />
      </div>
    );
  },
},
];

export default projects;
