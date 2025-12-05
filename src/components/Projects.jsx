import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "First Next App",
            desc: "A modern full-stack Next.js + Express.js + MongoDB application for managing products with secure authentication, product creation, deletion.",
            img: "https://i.ibb.co.com/27Z14v2b/a.png",
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
            title: "Movie Master Pro Client",
            desc: "Movie Master Pro is a modern, animated, and responsive movie discovery web application built using React + Vite.",
            img: "https://i.ibb.co.com/wF6H0Ky5/b.png",
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
            img: "https://i.ibb.co.com/b5YtGhcC/c.png",
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
            img: "https://i.ibb.co.com/tp3rH9LS/d.png",
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
        },
        {
            title: "Hero IO",
            desc: "Hero-IO is a front-end practice project showcasing multiple resource usages and UI patterns (live demo on Netlify).",
            img: "https://i.ibb.co.com/5hMW3rsr/e.png",
            tags: ["JavaScript", "react", "react-hooks", "react-router", "tailwindcss", "daisyui"],
            bullets: [
                "Front-end practice project focusing on UI/UX",
                "Built with React, React Hooks and React Router",
                "Styling with TailwindCSS and DaisyUI",
                "Demonstrates fetching resources and local state handling",
            ],
            live_link: "https://hero-io-system.netlify.app/",
            repo_link: "https://github.com/Rakibislam22/hero-io",
            featured: false,
        },
        {
            title: "English Janala",
            desc: "A small practice website built for learning and experimentation.",
            img: "https://i.ibb.co.com/5XJ0hgT9/f.png",
            tags: ["HTML", "daisyui", "html5", "javascript", "tailwindcss"],
            bullets: [
                "Practice/learning site (English-focused content)",
                "Built using plain HTML enhanced with TailwindCSS and DaisyUI",
                "Lightweight, responsive layout",
            ],
            live_link: "https://rakibislam22.github.io/englishJanala/",
            repo_link: "https://github.com/Rakibislam22/englishJanala",
            featured: false,
        }
    ];

    // Animation Variants
    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="mb-24 lg:mb-32">

            {/* HEADER */}
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
                        className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-6 rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                                <span key={t} className="bg-background-light dark:bg-background-dark text-xs font-semibold px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <a
                                className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                                target="_blank"
                                href={p.live_link}
                            >
                                <span className="material-symbols-outlined text-base">visibility</span>
                                Live Demo
                            </a>

                            <a
                                className="flex-1 flex items-center justify-center gap-2 bg-background-light dark:bg-background-dark border border-card-light dark:border-card-dark text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 dark:hover:bg-white transition-colors"
                                target="_blank"
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
