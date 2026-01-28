"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let x = 0,
      y = 0;
    let targetX = 0,
      targetY = 0;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 80}px, ${y - 80}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none
        bg-gradient-to-r from-blue-500/20 to-cyan-400/10 blur-3xl
        z-[9998]"
      />

      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none
        border border-blue-400/80 mix-blend-difference
        z-[9999]"
      />
    </>
  );
}
