"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;

    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%c👀 Curious engineer detected!\n\n" +
          "Looks like you opened the DevTools 🔍\n" +
          "Want to unlock a tiny secret? ✨\n\n" +
          "Type %cshristi%c and hit enter 👩‍💻🚀",
        "color: #00E5FF; font-size: 16px; font-weight: bold; background:black; padding:12px; border-radius:10px;",
        "color: #7CFF00; font-size: 16px; font-weight: bold; background:black; padding:12px; border-radius:10px;",
        "color: #00E5FF; font-size: 16px; font-weight: bold; background:black; padding:12px; border-radius:10px;"
      );

      ["shristi", "Shristi", "SHRISTI"].forEach((name) => {
        // @ts-ignore
        if (Object.hasOwn(window, name)) return;

        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ Access Granted ✨\n\n" +
                "You’ve discovered Shristi’s hidden console layer 🧠⚙️\n" +
                "AI • Backend • Systems • Curiosity\n\n" +
                "Engineers who explore always go further 🚀",
              "color:#FF9100; font-size:18px; font-weight:bold; background:black; padding:12px; border-radius:10px;"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPsst 👋\n\n" +
                  "Like easter eggs? 🐱\n" +
                  "Press %c'S'%c on the page and see what happens 👀✨",
                "color:#FF69B4; font-size:16px; font-weight:bold; background:black; padding:12px; border-radius:10px;",
                "color:#7CFF00; font-weight:bold;",
                "color:#FF69B4; font-weight:bold;"
              );
              clearTimeout(timer);
            }, 6000);

            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return <NyanCat />;
};

export default EasterEggs;
