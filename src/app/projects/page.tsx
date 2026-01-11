"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "TicketHub",
    description: `Scalable event ticketing system handling high traffic with real-time inventory control, secure Stripe payments, Redis-based locking, and Go-powered backend.`,
    link: "https://github.com/Shristirajpoot/TicketHub",
    images: [
      "/assets/projects/tickethub/1.webp",
      "/assets/projects/tickethub/2.webp",
    ],
  },
  {
    id: 2,
    name: "VoteChain",
    description: `Decentralized blockchain-based e-voting platform ensuring transparency, immutability, and auditability using Ethereum smart contracts and IPFS.`,
    link: "https://github.com/Shristirajpoot/VoteChain",
    images: [
      "/assets/projects/votechain/1.webp",
      "/assets/projects/votechain/2.webp",
    ],
  },
  {
    id: 3,
    name: "PaySwift",
    description: `Production-ready full-stack payment gateway built with Go and React, featuring Paystack integration, webhooks, billing system, and Dockerized deployment.`,
    link: "https://github.com/Shristirajpoot/PaySwift",
    images: [
      "/assets/projects/payswift/1.webp",
      "/assets/projects/payswift/2.webp",
    ],
  },
  {
    id: 4,
    name: "Gestura",
    description: `AI-powered real-time sign language translator using computer vision, converting gestures into text and speech to improve accessibility.`,
    link: "https://github.com/Shristirajpoot/Gestura-Retail-Accessibility-AI",
    images: ["/assets/projects/gestura/1.webp"],
  },
  {
    id: 5,
    name: "Senticome",
    description: `Amazon-style e-commerce platform with integrated NLP-based sentiment analysis, providing real-time insights from user reviews.`,
    link: "https://github.com/Shristirajpoot/Senticome",
    images: [
      "/assets/projects/senticome/1.webp",
      "/assets/projects/senticome/2.webp",
    ],
  },
  {
    id: 6,
    name: "WebClonePro",
    description: `AI-powered website cloning tool that scrapes and reconstructs public websites, handling dynamic JavaScript content using Playwright and FastAPI.`,
    link: "https://github.com/Shristirajpoot/WebClonePro",
    images: ["/assets/projects/webclonepro/1.webp"],
  },
];

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen py-8">
      <h1 className="text-4xl font-bold mt-[100px] mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {PROJECTS.map((project) => (
          <li
            className="w-full max-w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600 overflow-hidden hover:border-zinc-500 transition-colors"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px] overflow-hidden bg-zinc-900">
              {project.images.length > 1 ? (
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    pagination: false,
                  }}
                  aria-label={`${project.name} screenshots`}
                >
                  {project.images.map((image, index) => (
                    <SplideSlide key={`${project.id}-${index}`}>
                      <Image
                        src={image}
                        alt={`Screenshot ${index + 1} of ${project.name}`}
                        className="w-full h-[200px] object-cover"
                        width={300}
                        height={200}
                        priority={index === 0}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              ) : (
                <Image
                  src={project.images[0]}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-[200px] object-cover"
                  width={300}
                  height={200}
                  priority
                />
              )}
            </div>
            <div className="p-4 text-zinc-300 h-[200px] flex flex-col">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              </Link>
              <p className="text-xs text-zinc-500 flex-grow overflow-y-auto">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                View Project →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
