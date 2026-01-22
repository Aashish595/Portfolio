import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[9998]
  bg-gradient-to-r from-blue-500/20 to-cyan-400/10 blur-3xl"
        style={{
          transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        }}
      />

      {/* Cursor */}
      <div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]
  border border-blue-400/80 mix-blend-difference"
        style={{
          transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </>
  );
}
