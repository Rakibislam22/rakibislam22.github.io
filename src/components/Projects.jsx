import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionArticle = motion.article;

export default function Projects() {
    const [activeTab, setActiveTab] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const tabs = [
        { id: "all", label: "All" },
        { id: "featured", label: "Feature" },
        { id: "fullstack", label: "Full Stack" },
        { id: "frontend", label: "Frontend" },
        { id: "saas", label: "SaaS" },
    ];

    const projects = [
        {
            title: "ConvoX - Real-Time Platform",
            desc: "A full-stack real-time collaboration and messaging platform with a Next.js frontend and a production-grade Node.js backend.",
            img: "convox.png",
            categories: ["featured", "fullstack", "saas"],
            featured: true,
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
                "Direct messaging and group chat with live audio/video rooms via LiveKit",
                "Workspaces and channels plus a real-time social feed",
            ],
            live_link: "https://convox-chat.vercel.app",
            repo_link: "https://github.com/the-team-undefined",
        },
        {
            title: "ScholarStream Client",
            desc: "A React-based frontend for discovering and applying to curated scholarship opportunities worldwide.",
            img: "scholarstream-client.png",
            categories: ["featured", "fullstack", "frontend"],
            featured: true,
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
            ],
            live_link: "https://scholarstream-1.web.app/",
            repo_link: "https://github.com/Rakibislam22/ScholarStream-Client",
        },
        {
            title: "NextLevel Shop",
            desc: "A modern full-stack Next.js + Express.js + MongoDB application for managing products with secure authentication, product creation, deletion.",
            img: "a.png",
            categories: ["featured", "fullstack", "saas"],
            featured: true,
            tags: ["TypeScript", "axios", "express", "nextauth", "nextjs", "tailwindcss"],
            bullets: [
                "Full-stack Next.js (App Router) frontend with an Express.js backend",
                "MongoDB for data storage and product catalog",
                "Authentication via NextAuth with role-based access",
            ],
            live_link: "https://first-next-app-ten-lac.vercel.app",
            repo_link: "https://github.com/Rakibislam22/first-next-app",
        },
        {
            title: "Movie Master Pro",
            desc: "Movie Master Pro is a modern, animated, and responsive movie discovery web application built using React + Vite.",
            img: "b.png",
            categories: ["frontend"],
            featured: false,
            tags: ["JavaScript", "react", "vite", "daisyui", "firebase-auth", "tailwind"],
            bullets: [
                "Movie discovery UI with animated/responsive interactions",
                "Firebase Authentication integration for watchlists",
                "Carousel/slider functionality via Swiper with touch support"
            ],
            live_link: "https://movie-master-pro-8f1b1.web.app/",
            repo_link: "https://github.com/Rakibislam22/MovieMasterPro-Client",
        },
        {
            title: "Green Nest",
            desc: "A modern React + Firebase web app for plant lovers and botanical enthusiasts.",
            img: "c.png",
            categories: ["frontend"],
            featured: false,
            tags: ["JavaScript", "react", "firebase-auth", "context-api", "nodejs", "reactrouter"],
            bullets: [
                "Plant-focused web app built with React",
                "Authentication using Firebase Auth",
                "State management with Context API for plant care guides"
            ],
            live_link: "https://green-nest-2025.web.app/",
            repo_link: "https://github.com/Rakibislam22/Green-Nest",
        },
        {
            title: "GreenEarth",
            desc: "GreenEarth is a modern, eco-themed landing page designed to spread awareness about environmental protection.",
            img: "d.png",
            categories: ["frontend"],
            featured: false,
            tags: ["HTML", "css3", "daisyui", "html5", "javascript", "tailwindcss"],
            bullets: [
                "Eco-themed landing page to promote environmental awareness",
                "Built with semantic HTML5 and TailwindCSS",
                "UI components styled with DaisyUI theme primitives"
            ],
            live_link: "https://greeenearth.netlify.app/",
            repo_link: "https://github.com/Rakibislam22/GreenEarth",
        },
        {
            title: "Smart Bachelor Life",
            desc: "A MERN-stack roommate and mess management platform for meal tracking, shared utility bills, and monthly cost calculation.",
            img: "e.png",
            categories: ["fullstack", "saas"],
            featured: false,
            tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Firebase Auth"],
            bullets: [
                "Automated meal calculation and monthly cost breakdown",
                "Role-based manager and member dashboard",
                "Live balance tracking and shared utility ledger"
            ],
            live_link: "https://smart-bachelor-life.web.app/",
            repo_link: "https://github.com/Rakibislam22/Smart-bachelor-life",
        },
        {
            title: "Smart Print Plus",
            desc: "A full-stack document printing and order tracking platform with instant pricing calculations and file uploads.",
            img: "f.png",
            categories: ["fullstack", "saas"],
            featured: false,
            tags: ["React", "Express.js", "MongoDB", "Node.js", "TailwindCSS", "Cloudinary"],
            bullets: [
                "Document upload with instant page count and price calculator",
                "Order status tracking from submission to fulfillment",
                "Admin dashboard to manage queue and printing jobs"
            ],
            live_link: "https://smart-print-plus.web.app/",
            repo_link: "https://github.com/Rakibislam22/smart-print-plus",
        }
    ];

    const filteredProjects = projects.filter((p) => {
        if (activeTab === "all") return true;
        if (activeTab === "featured") return p.featured || p.categories?.includes("featured");
        return p.categories?.includes(activeTab);
    });

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section className="mb-24 lg:mb-32 projects-section">
            {/* Header */}
            <MotionDiv
                id="projects"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Project <span className="text-primary">Portfolio</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A collection of projects I've built to showcase my skills in MERN-stack development, SaaS products, and modern web technologies.
                </p>
            </MotionDiv>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <MotionButton
                            key={tab.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setShowAll(false);
                            }}
                            className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                isActive
                                    ? "bg-primary-gradient text-white shadow-lg shadow-purple-500/25"
                                    : "bg-card border border-card text-surface/80 hover:text-primary hover:border-primary/40"
                            }`}
                        >
                            {tab.label}
                        </MotionButton>
                    );
                })}
            </div>

            {/* Projects Grid */}
            <MotionDiv
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((p) => (
                        <MotionArticle
                            key={p.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35 }}
                            className="bg-card border border-card p-6 rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <MotionDiv
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        alt={`${p.title} project screenshot by Md Rakib Ali`}
                                        className="rounded-lg h-48 w-full object-cover"
                                        src={p.img.startsWith('/') ? p.img : `/${p.img}`}
                                        width="640"
                                        height="360"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </MotionDiv>

                                {p.featured && (
                                    <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow">
                                        <span className="material-symbols-outlined text-sm">star</span>
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 my-2 flex-grow">{p.desc}</p>

                            <ul className="space-y-2 text-sm mb-4">
                                {p.bullets.map((b) => (
                                    <li key={b} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                                        <span className="line-clamp-2">{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tags.map((t) => (
                                    <span key={t} className="tag text-xs font-semibold px-2 py-1 rounded text-surface">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <div className="aura text-primary flex-1">
                                    <a
                                        className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={p.live_link}
                                    >
                                        <span className="material-symbols-outlined text-base">visibility</span>
                                        Live Demo
                                    </a>
                                </div>

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
                        </MotionArticle>
                    ))}
                </AnimatePresence>
            </MotionDiv>

            {/* View More Controls */}
            <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
                {filteredProjects.length > 6 && (
                    <div className="aura text-primary">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-7 rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer active:scale-95"
                        >
                            <span>{showAll ? "Show Less" : "View More Projects"}</span>
                            <span className="material-symbols-outlined text-base">
                                {showAll ? "expand_less" : "expand_more"}
                            </span>
                        </button>
                    </div>
                )}

                <a
                    href="https://github.com/Rakibislam22?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-card text-surface font-semibold py-3 px-6 rounded-xl shadow-sm hover:border-primary/50 hover:text-primary transition-all group"
                >
                    <span>View More on GitHub</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </a>
            </div>
        </section>
    );
}
