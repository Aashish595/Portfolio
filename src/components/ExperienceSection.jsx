
import {
  ExternalLink,
  ChevronDown,
  Briefcase,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";


/* ================= MAIN SECTION ================= */

export default function ExperienceSection() {

  return (
    <section
      id="experience"
      className="py-22 relative bg-slate-950 text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-gray-400 mt-2">
            Internships, professional work & real-world projects
          </p>
        </motion.div>

        {/* ===== EXPERIENCE STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <StatBadge icon={Briefcase} label="1+ Years Total Experience" />
          
        </motion.div>

        {/* ===== EXPERIENCE + DSA ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: TIMELINE */}
          <div className="lg:col-span-2 space-y-12">
            <TimelineCard
              title="Software Developer Intern"
              company="Bluestock Fintech"
              duration="July 2025 – Aug 2025"
              points={[
                "Built responsive IPO web platform using React.js & Tailwind CSS",
                "Optimized frontend workflow for faster builds and deployments",
                "Created reusable UI components following scalable architecture",
              ]}
            />

            <TimelineCard
              title="Frontend Developer Intern"
              company="Leafny Web Pack Services & Consultancy"
              duration="Sep 2025 – Nov 2025"
              points={[
                "Developed SaaS AI Interview platform using Next.js & TypeScript",
                "Implemented dashboard, authentication & onboarding flows",
                "Improved UI performance and design consistency",
              ]}
            />
          </div>

          {/* RIGHT: DSA CARD */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="h-fit lg:sticky top-28
    rounded-2xl p-6
    bg-white/5 border border-white/10
    backdrop-blur"
>
  {/* Header */}
  <h4 className="text-xl font-semibold text-white">
    Problem Solving & Data Structures
  </h4>

  <p className="text-slate-400 text-sm leading-relaxed">
    Strong command over core data structures and algorithms with a focus on   
    writing efficient, optimized, and interview-ready solutions.
  </p>

  <div className="space-y-2 text-sm text-slate-300">
    <p>• Arrays, Strings, Recursion, Hashing</p>
  <p>• Trees, Graphs, Stack & Queue</p>
  <p>• Time & Space Complexity Analysis</p>
  <p>• Clean, readable & optimized code</p>
</div>


  {/* Platforms */}
  <div className="mt-5 pt-4 border-t border-white/10 text-xs text-gray-400 space-y-1">
    <p>Platforms:</p>
    <a
      href="https://leetcode.com/u/Guru959/"
      target="_blank"
      rel="noreferrer"
      className="block text-blue-400 hover:underline"
    >
      LeetCode 
    </a>
    <a
      href="https://auth.geeksforgeeks.org/user/"
      target="_blank"
      rel="noreferrer"
      className="block text-green-400 hover:underline"
    >
      GeeksforGeeks 
    </a>
  </div>
</motion.div>

        </div>

        {/* ===== FREELANCE ===== */}
        <section id="freelance" className="mt-32">
          <h3 className="text-3xl font-bold text-center mb-4">
            Freelance & Client Work
          </h3>

          <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
            Trusted by startups & local businesses. Click logos to verify live
            work.
          </p>

          {/* FREELANCE STATS */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
            <MiniStat value="1+" label="Years Freelancing" />
            <MiniStat value="3+" label="Clients Served" />
            <MiniStat value="5+" label="Projects Delivered" />
          </div>

          <LogoMarquee />
        </section>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const StatBadge = ({ icon : Icon, label }) => (
  <div
    className="flex items-center gap-2 px-4 py-2 rounded-full
    bg-white/5 border border-white/10 backdrop-blur
    text-sm text-gray-300"
  >
    <Icon size={16} className="text-blue-400" />
    {label}
  </div>
);

const TimelineCard = ({ title, company, duration, points }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l border-blue-500/30"
  >
    <span className="absolute -left-[7px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40" />

    <h4 className="text-xl font-semibold">{title}</h4>
    <p className="text-sm text-gray-400">
      {company} · {duration}
    </p>

    <ul className="mt-3 space-y-2 text-gray-300 text-sm">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </motion.div>
);

const MiniStat = ({ value, label }) => (
  <div className="text-center rounded-xl bg-white/5 border border-white/10 p-4">
    <p className="text-2xl font-bold text-blue-400">{value}</p>
    <p className="text-xs text-gray-400 mt-1">{label}</p>
  </div>
);

/* ================= LOGO MARQUEE ================= */

const LogoMarquee = () => {
  const companies = [
    {
      name: "Glitch Studio",
      logo: "/logos/glitch.svg",
      link: "https://glitchstudio.in/",
    },
    {
      name: "Rareframe Studio",
      logo: "/logos/rareframe.svg",
      link: "https://rareframe.studio/",
    },
    {
      name: "Laser Printing Business",
      logo: "/logos/laser.svg",
      link: "#",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-12 py-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...companies, ...companies].map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="group min-w-[220px] h-28 flex items-center justify-center
              bg-white/5 border border-white/10 rounded-xl
              backdrop-blur hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <img
              src={c.logo}
              alt={c.name}
              className="h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <ExternalLink
              size={14}
              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 text-blue-400"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};
