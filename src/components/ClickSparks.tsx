"use client";

import { useEffect } from "react";

const COLORS = ["#ffd23f", "#ff4fa3", "#4fe3e0", "#fff8e1"];
const SPARKS = 8;
const DISTANCE = 26;

// A tiny burst of pixel squares wherever the visitor clicks. Skipped when reduced motion is on.
export function ClickSparks() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    function burst(e: PointerEvent) {
      if (reduced.matches || e.button !== 0) return;
      const root = document.createElement("div");
      root.className = "spark";
      root.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      for (let i = 0; i < SPARKS; i++) {
        const angle = (i / SPARKS) * Math.PI * 2;
        const piece = document.createElement("i");
        piece.style.setProperty("--dx", `${Math.round(Math.cos(angle) * DISTANCE)}px`);
        piece.style.setProperty("--dy", `${Math.round(Math.sin(angle) * DISTANCE)}px`);
        piece.style.setProperty("--c", COLORS[i % COLORS.length]);
        root.appendChild(piece);
      }
      document.body.appendChild(root);
      setTimeout(() => root.remove(), 500);
    }

    window.addEventListener("pointerdown", burst);
    return () => window.removeEventListener("pointerdown", burst);
  }, []);

  return null;
}
