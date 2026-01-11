"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type DockItem = {
  title: string;
  icon: React.ReactNode;
};

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
}) => {
  // ✅ filter invalid items
  const safeItems = items.filter(
    (item) => item && item.title && item.icon
  );

  if (safeItems.length === 0) return null;

  return (
    <FloatingDockDesktop items={safeItems} className={desktopClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const [showHint, setShowHint] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (!showHint) return;

    const animateHint = async () => {
      await controls.start({
        opacity: [0, 1, 1, 0],
        x: [-40, -40, 40, 40],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
        },
      });
    };

    animateHint();

    return () => {
      controls.stop();
    };
  }, [showHint, controls]);

  return (
    <div className="relative flex justify-center">
      <motion.div
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
          setShowHint(false);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "flex gap-2 md:gap-4 h-16 px-4 pb-3 items-end rounded-2xl",
          "bg-gray-50 dark:bg-neutral-900",
          className
        )}
      >
        {items.map((item, i) => (
          <IconContainer
            key={`${item.title}-${i}`}
            mouseX={mouseX}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            className="absolute top-0 left-1/2 w-4 h-4 border-2 border-gray-400 dark:border-gray-600 rounded-full pointer-events-none"
            animate={controls}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return Infinity;
    return x - rect.x - rect.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconSizeSync = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const iconSize = useSpring(iconSizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative cursor-pointer"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute -top-8 px-2 py-0.5 text-xs bg-white dark:bg-neutral-800 border dark:border-neutral-700 rounded-md whitespace-nowrap shadow-lg z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

export default FloatingDock;
