import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "ConvoX – Real-Time Platform",
            desc: "A full-stack real-time collaboration and messaging platform with a Next.js frontend and a production-grade Node.js backend.",
            img: "convox.png",
            tags: [
                "Next.js",
                "TailwindCSS",
                "Node.js",
                "Express.js",
                "Socket.IO",
                "MongoDB",
                "Redis",
                "LiveKit",
                "JWT",
                "Axios",
            ],
            bullets: [
                "Next.js client with protected routes, Auth/Socket context, and real-time chat UI",
                "Direct messaging and group chat with ",
                "Workspaces and channels plus a social feed",
                "Audio calls powered by LiveKit and file uploads to Cloudflare",
            ],
            live_link: "https://convox-chat.vercel.app",
            repo_link: "https://github.com/the-team-undefined",
            featured: false,
        },
        {
            title: "ScholarStream Client",
            desc: "A React-based frontend for discovering and applying to curated scholarship opportunities worldwide.",
            img: "scholarstream-client.png",
            tags: [
                "React",
                "React Router",
                "TailwindCSS",
                "DaisyUI",
                "Axios",
                "Firebase Auth",
                "React Hook Form",
                "Framer Motion",
            ],
            bullets: [
                "Scholarship discovery by category, country, and deadline",
                "Application workflow with submission management",
                "User dashboard to manage scholarships",
                "Responsive UI styled with TailwindCSS ",
            ],
            live_link: "https://scholarstream-1.web.app/",
            repo_link: "https://github.com/Rakibislam22/ScholarStream-Client",
            featured: false,
        },
        {
            title: "NextLevel Shop",
            desc: "A modern full-stack Next.js + Express.js + MongoDB application for managing products with secure authentication, product creation, deletion.",
            img: "a.png",
            tags: ["TypeScript", "axios", "express", "nextauth", "nextjs", "tailwindcss"],
            bullets: [
                "Full-stack Next.js (App Router) frontend with an Express.js backend",
                "MongoDB for data storage",
                "Authentication via NextAuth",
                "Dynamic product creation/deletion and responsive UI",
            ],
            live_link: "https://first-next-app-ten-lac.vercel.app",
            repo_link: "https://github.com/Rakibislam22/first-next-app",
            featured: false,
        },
        {
            title: "Movie Master Pro",
            desc: "Movie Master Pro is a modern, animated, and responsive movie discovery web application built using React + Vite.",
            img: "b.png",
            tags: ["JavaScript", "react", "vite", "daisyui", "firebase-auth", "tailwind"],
            bullets: [
                "Movie discovery UI with animated/responsive interactions",
                "Firebase Authentication integration",
                "Carousel/slider functionality via Swiper",
                "Polished UI using TailwindCSS / DaisyUI"
            ],
            live_link: "https://movie-master-pro-8f1b1.web.app/",
            repo_link: "https://github.com/Rakibislam22/MovieMasterPro-Client",
            featured: false,
        },
        {
            title: "Green Nest",
            desc: "A modern React + Firebase web app for plant lovers.",
            img: "c.png",
            tags: ["JavaScript", "react", "firebase-auth", "context-api", "nodejs", "reactrouter"],
            bullets: [
                "Plant-focused web app built with React",
                "Authentication using Firebase Auth",
                "State management with Context API",
                "Routing with React Router",
            ],
            live_link: "https://green-nest-2025.web.app/",
            repo_link: "https://github.com/Rakibislam22/Green-Nest",
            featured: false,
        },
        {
            title: "GreenEarth",
            desc: "GreenEarth is a modern, eco-themed landing page designed to spread awareness about environmental protection.",
            img: "d.png",
            tags: ["HTML", "css3", "daisyui", "html5", "javascript", "tailwindcss"],
            bullets: [
                "Eco-themed landing page to promote environmental awareness",
                "Built with semantic HTML5 and TailwindCSS",
                "UI components styled with DaisyUI",
                "Responsive layout and small footprint",
            ],
            live_link: "https://greeenearth.netlify.app/",
            repo_link: "https://github.com/Rakibislam22/GreenEarth",
            featured: false,
        }
    ];

    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="mb-24 lg:mb-32">
            <motion.div
                id="projects"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Project <span className="text-primary">Portfolio</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    A collection of projects I've built to showcase my skills in MERN-stack development and modern web technologies.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((p) => (
                    <motion.article
                        key={p.title}
                        variants={cardVariant}
                        className="bg-card border border-card p-6 rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <motion.div
                            className="relative mb-4"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                alt={`${p.title} screenshot`}
                                className="rounded-lg h-48 w-full object-cover"
                                src={p.img}
                            />

                            {p.featured && (
                                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">star</span>
                                    Featured
                                </span>
                            )}
                        </motion.div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 my-2 flex-grow">{p.desc}</p>

                        <ul className="space-y-2 text-sm mb-4">
                            {p.bullets.map((b) => (
                                <li key={b} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    {b}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {p.tags.map((t) => (
                                // use the new semantic tag class so dark and light both work
                                <span key={t} className="tag text-xs font-semibold px-2 py-1 rounded text-surface">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <a
                                className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                                target="_blank"
                                rel="noreferrer"
                                href={p.live_link}
                            >
                                <span className="material-symbols-outlined text-base">visibility</span>
                                Live Demo
                            </a>

                            <a
                                className="flex-1 flex items-center justify-center gap-2 bg-surface border border-card text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 transition-colors"
                                target="_blank"
                                rel="noreferrer"
                                href={p.repo_link}
                            >
                                <span className="material-symbols-outlined text-base">code_blocks</span>
                                Code
                            </a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}