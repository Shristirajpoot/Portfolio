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
  SiSolidity,
  SiFastapi,
  SiRedis,
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
  go: {
    title: "Go",
    bg: "black",
    fg: "white",
    icon: <SiGo />,
  },
  express: {
    title: "Express",
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
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
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
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  tailwind: {
    title: "Tailwind",
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
  framer: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
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
    id: "tickethub",
    category: "Backend / Distributed Systems",
    title: "TicketHub",
    src: "/assets/projects-screenshots/tickethub/1.png",
    screenshots: ["1.png", "2.png"],
    live: "https://github.com/Shristirajpoot/TicketHub",
    github: "https://github.com/Shristirajpoot/TicketHub",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next],
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
            TicketHub is a scalable event ticketing platform designed to handle
            high-traffic flash sales with strict consistency guarantees.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Engineering Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Redis-based distributed locking to prevent overselling</li>
            <li>Go-powered backend optimized for concurrency</li>
            <li>Stripe payment integration with webhook handling</li>
            <li>Dockerized microservice-style architecture</li>
          </ul>
           <TypographyH3 className="my-6">Screenshots</TypographyH3>
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

  {
    id: "votechain",
    category: "Blockchain / Web3",
    title: "VoteChain",
    src: "/assets/projects-screenshots/votechain/vote.jpeg",
    screenshots: ["1.png", "2.png"],
    live: "https://github.com/Shristirajpoot/VoteChain",
    github: "https://github.com/Shristirajpoot/VoteChain",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.solidity,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            VoteChain is a decentralized e-voting system built on Ethereum,
            ensuring transparent, immutable, and auditable elections.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Ethereum smart contracts enforcing one-vote-per-user</li>
            <li>IPFS for decentralized candidate metadata</li>
            <li>Public vote verification with on-chain auditability</li>
          </ul>
            <TypographyH3 className="my-6">Screenshots</TypographyH3>
                    <SlideShow
          images={[
            `${BASE_PATH}/votechain/vote.png`,
            `${BASE_PATH}/votechain/vote.jpeg`,
            `${BASE_PATH}/votechain/1.png`,
            `${BASE_PATH}/votechain/2.png`,
          ]}
        />

        </div>
      );
    },
  },

  {
    id: "payswift",
    category: "FinTech / Payments",
    title: "PaySwift",
    src: "/assets/projects-screenshots/payswift/2.png",
    screenshots: ["1.webp", "2.png"],
    live: "https://github.com/Shristirajpoot/PaySwift",
    github: "https://github.com/Shristirajpoot/PaySwift",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.go,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            PaySwift is a production-ready payment gateway supporting secure
            transactions, webhooks, and billing workflows.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">System Design</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Paystack payment integration with idempotent APIs</li>
            <li>Webhook-based transaction confirmation</li>
            <li>Dockerized deployment for reliability</li>
          </ul>
            <TypographyH3 className="my-6">Screenshots</TypographyH3>
              <SlideShow
          images={[
            `${BASE_PATH}/payswift/p.webp`,
            `${BASE_PATH}/payswift/2.png`, `${BASE_PATH}/payswift/1.webp`,
          ]}
        />
        </div>
      );
    },
  },

  {
    id: "gestura",
    category: "AI / Computer Vision",
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
        PROJECT_SKILLS.opencv,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Gestura is a real-time sign language translation system converting
            gestures into text and speech to improve accessibility.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>95% recognition accuracy</li>
            <li>Sub-200ms inference latency</li>
            <li>Patent-filed accessibility solution</li>
          </ul> <TypographyH3 className="my-6">Screenshots</TypographyH3>
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
    id: "senticome",
    category: "AI / NLP",
    title: "Senticome",
    src: "/assets/projects-screenshots/Senticome.png",
    screenshots: ["Senticome.png"],
    live: "https://github.com/Shristirajpoot/Senticome",
    github: "https://github.com/Shristirajpoot/Senticome",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Senticome is an e-commerce platform with integrated NLP-based
            sentiment analysis on user reviews.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time sentiment scoring using NLP</li>
            <li>Insight-driven product feedback</li>
            <li>Amazon-style user experience</li>
          </ul><TypographyH3 className="my-6">Screenshots</TypographyH3>
            <SlideShow
          images={[
            `${BASE_PATH}/sen.webp`,
            `${BASE_PATH}/Amza.webp`,
            `${BASE_PATH}/Senticome.png`,
          ]}
        />
        </div>
      );
    },
  },

  {
    id: "webclonepro",
    category: "AI / Automation",
    title: "WebClonePro",
    src: "/assets/projects-screenshots/webcloner.png",
    screenshots: ["webcloner.png"],
    live: "https://youtu.be/jfMwgjjgFoE",
    github: "https://github.com/Shristirajpoot/WebClonePro",
    skills: {
      frontend: [PROJECT_SKILLS.next],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            WebClonePro is an AI-powered website cloning tool that reconstructs
            public websites, including dynamic JavaScript-rendered content.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Depth</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Playwright-based headless browser automation</li>
            <li>FastAPI backend with async processing</li>
            <li>Handles SPA and dynamic sites</li>
          </ul><TypographyH3 className="my-6">Screenshots</TypographyH3><SlideShow
  
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
];

export default projects;
