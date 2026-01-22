"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-6 bg-slate-950 border-t border-slate-800"
      aria-label="Footer"
    >
      <p className="text-center text-xs tracking-wide text-slate-500">
        © {year} Gurudas Maurya. All rights reserved.
      </p>
    </footer>
  );
}
