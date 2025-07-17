import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Language Exchange Platform",
    description: "Real-time platform with 1-on-1/group video, chat & screen sharing (MERN).",
    image: "/lep.png?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveLink: "https://language-exchange-plateform.onrender.com/",
    githubLink: "https://github.com/Aashish595/Language-Exchange-Plateform",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "Food ordering app with real-time order tracking & admin dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://food-delivery-frontend-tsqv.onrender.com/",
    githubLink: "https://github.com/Aashish595/Food-delivery-App.git",
  },
  {
    id: 3,
    title: "DeepSeek Clone - AI Assistant",
    description: "AI-based coding assistant using Next.js & Google GenAI.",
    image: "/deepseek_clone.png?height=200&width=400",
    technologies: ["Next.js", "Clerk", "Google GenAI", "MongoDB"],
    liveLink: "https://deepseek-clone-pi-one.vercel.app/",
    githubLink: "https://github.com/Aashish595/Deepseek_clone.git",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Social network with messaging, sharing, and privacy controls.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "GraphQL", "Redis"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/social",
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "Crypto app with real-time stats, chat, and secure video calls.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Zustand", "TanStack", "JWT", "Stream SDK"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/crypto",
  },
  {
    id: 6,
    title: "Food Delivery App v2",
    description: "Improved version using Supabase & Framer Motion.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/lms",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My recent work in full-stack development using modern tools & stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, technologies, liveLink, githubLink }) => (
            <div
              key={id}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center flex-1 justify-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm font-medium px-4 py-2 rounded-md transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center flex-1 justify-center text-sm px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
