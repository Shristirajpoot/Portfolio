"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const getRandomHeight = () => `${Math.random() * 100}vh`;

const NyanCat = () => {
  const [divs, setDivs] = useState<{ id: string }[]>([]);

  const spawnDiv = () => {
    setDivs((prev) => [
      ...prev,
      { id: crypto.randomUUID() },
    ]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // safer trigger
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        spawnDiv();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]"
      aria-hidden
    >
      <AnimatePresence>
        {divs.map((div) => (
          <AnimatedDiv
            key={div.id}
            id={div.id}
            onCompleted={() =>
              setDivs((prev) => prev.filter((d) => d.id !== div.id))
            }
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const AnimatedDiv = ({
  id,
  onCompleted,
}: {
  id: string;
  onCompleted: () => void;
}) => {
  const randY = getRandomHeight();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "110vw",
      y: randY,
      transition: { duration: 5, ease: "linear" },
    });
  }, [controls, randY]);

  return (
    <motion.div
      key={id}
      initial={{ x: "-20vw", y: randY }}
      animate={controls}
      onAnimationComplete={onCompleted}
      className="fixed z-10"
    >
      <img
        src="/assets/nyan-cat.gif"
        alt="Nyan Cat"
        className={cn("h-36 w-auto select-none")}
        draggable={false}
      />
    </motion.div>
  );
};

export default NyanCat;
