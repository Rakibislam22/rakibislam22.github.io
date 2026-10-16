import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionArticle = motion.article;

export default function Projects() {
    const [activeTab, setActiveTab] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleProject = (title) => {
        setExpandedProject((prev) => (prev === title ? null : title));
    };

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
            title: "Smart Bachelor Life",
            desc: "A MERN-stack roommate and mess management platform for meal tracking, shared utility bills, and monthly cost calculation.",
            img: "g.png",
            categories: ["fullstack", "saas"],
            featured: true,
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
            title: "Movie Master Pro",
            desc: "Movie Master Pro is a modern, animated, and responsive movie discovery web application built using React + Vite.",
            img: "b.png",
            categories: ["frontend", "fullstack"],
            featured: true,
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
            title: "AmarPoster - AI Studio",
            desc: "An AI-powered poster generation and campaign studio designed for authentic Bangladeshi political, cultural, and festive posters with automated canvas rendering.",
            img: "amarposter.png",
            categories: ["featured", "fullstack", "saas"],
            featured: true,
            tags: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "Google Gemini AI", "Vercel"],
            bullets: [
                "Multi-slot portrait uploader with automated leader circle masking and layout positioning",
                "Google Gemini AI slogan assistant for authentic rhyming Bengali campaign headlines",
                "Resilient 5-tier direct high-resolution PNG print download engine without watermarks",
            ],
            live_link: "https://amarposter.vercel.app/",
            repo_link: "https://github.com/Rakibislam22/my-poster",
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
            title: "Hero-IO",
            desc: "An interactive, responsive frontend web application featuring dynamic UI components, client-side routing, and data visualization.",
            img: "e.png",
            categories: ["frontend"],
            featured: false,
            tags: ["React", "TailwindCSS", "DaisyUI", "Recharts", "React Router", "Vite"],
            bullets: [
                "Interactive and responsive frontend UI built with React and Vite",
                "Client-side routing and modular component architecture",
                "Dynamic state management with interactive data dashboards",
            ],
            live_link: "https://hero-io-demo.netlify.app/",
            repo_link: "https://github.com/Rakibislam22/hero-io",
        },
        {
            title: "Smart Print Plus",
            desc: "A full-stack document printing and order tracking platform with instant pricing calculations and file uploads.",
            img: "h.png",
            categories: ["fullstack", "saas"],
            featured: false,
            tags: ["React", "Express.js", "MongoDB", "Node.js", "TailwindCSS", "Cloudinary"],
            bullets: [
                "Document upload with instant page count and price calculator",
                "Order status tracking from submission to fulfillment",
                "Admin dashboard to manage queue and printing jobs"
            ],
            live_link: "https://smart-print-plus-client.vercel.app/",
            repo_link: "https://github.com/Rakibislam22/Smart-Print-Plus-Client",
        },
        {
            title: "CareerTrack Lite",
            desc: "A full-stack job application tracking SaaS platform featuring user authentication, pipeline analytics, and application management.",
            img: "i.png",
            categories: ["fullstack", "saas"],
            featured: false,
            tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Recharts", "Vercel"],
            bullets: [
                "End-to-end job application lifecycle tracking with status and source filtering",
                "Interactive pipeline dashboard with Recharts analytics and stat cards",
                "Secure JWT authentication, protected routes, and centralized API client",
            ],
            live_link: "https://myjob-application.vercel.app/",
            repo_link: "https://github.com/Rakibislam22/career-track-frontend",
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
                                setExpandedProject(null);
                            }}
                            className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
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
                    {displayedProjects.map((p) => {
                        const isExpanded = expandedProject === p.title;

                        return (
                            <MotionArticle
                                key={p.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                                className={`group relative bg-card border border-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 overflow-hidden min-h-[460px] md:min-h-[480px] ${isExpanded ? "ring-2 ring-primary/40" : ""
                                    }`}
                            >
                                {/* Top Thumbnail Image */}
                                <div
                                    className="relative mb-4 overflow-hidden rounded-xl cursor-pointer md:cursor-default"
                                    onClick={() => toggleProject(p.title)}
                                >
                                    <MotionDiv
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            alt={`${p.title} project screenshot by Md Rakib Ali`}
                                            className="rounded-xl h-48 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src={p.img.startsWith('/') ? p.img : `/${p.img}`}
                                            width="640"
                                            height="360"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </MotionDiv>

                                    {p.featured && (
                                        <span className="absolute top-2.5 right-2.5 bg-yellow-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md z-10">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            Featured
                                        </span>
                                    )}

                                    {/* Category Pills on Image */}
                                    <div className="absolute bottom-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                                        {p.categories?.map((cat) => (
                                            <span
                                                key={cat}
                                                className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Title & Tech Stack (Visible Initially) */}
                                <div className="mb-4 flex-grow">
                                    <h3
                                        className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer md:cursor-default"
                                        onClick={() => toggleProject(p.title)}
                                    >
                                        {p.title}
                                    </h3>

                                    {/* Tech Stack Tags - Visible on the card */}
                                    <div className="flex flex-wrap gap-1.5 my-3">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="tag text-[11px] font-medium px-2.5 py-1 rounded-md text-surface border border-card shadow-xs"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="hidden md:flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        <span className="material-symbols-outlined text-sm text-primary">visibility</span>
                                        <span>Hover card to view details & features</span>
                                    </p>
                                </div>

                                {/* Initial Action Buttons (Live Demo & Code) */}
                                <div className="flex gap-3 mt-auto pt-2">
                                    <div className="aura text-primary flex-1">
                                        <a
                                            className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-md"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={p.live_link}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined text-base">visibility</span>
                                            Live Demo
                                        </a>
                                    </div>

                                    <a
                                        className="flex-1 flex items-center justify-center gap-2 bg-surface border border-card text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={p.repo_link}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span className="material-symbols-outlined text-base">code_blocks</span>
                                        Code
                                    </a>
                                </div>

                                {/* Mobile Only: Toggle Details Button */}
                                <button
                                    type="button"
                                    onClick={() => toggleProject(p.title)}
                                    className="md:hidden mt-3 w-full py-2 px-3 rounded-xl bg-surface border border-card flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-primary active:scale-[0.98] transition-all cursor-pointer"
                                    aria-expanded={isExpanded}
                                >
                                    <span className="material-symbols-outlined text-base text-primary">
                                        {isExpanded ? "unfold_less" : "read_more"}
                                    </span>
                                    <span>{isExpanded ? "Hide Details" : "View Details & Tech Stack"}</span>
                                    <span
                                        className="material-symbols-outlined text-sm transition-transform duration-300"
                                        style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                    >
                                        expand_more
                                    </span>
                                </button>

                                {/* Mobile Only: Expandable Details Accordion */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <MotionDiv
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="md:hidden overflow-hidden pt-4 mt-3 border-t border-card/60 space-y-3"
                                        >
                                            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {p.desc}
                                            </p>

                                            <div>
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                                                    Key Features
                                                </span>
                                                <ul className="space-y-1.5 text-xs">
                                                    {p.bullets.map((b) => (
                                                        <li key={b} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1"></span>
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                                                    Tech Stack
                                                </span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {p.tags.map((t) => (
                                                        <span key={t} className="tag text-[11px] font-medium px-2 py-0.5 rounded text-surface border border-card">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </MotionDiv>
                                    )}
                                </AnimatePresence>

                                {/* Desktop Only: Hover Details Overlay */}
                                <div className="hidden md:flex absolute inset-0 z-20 rounded-2xl bg-white/95 dark:bg-[#0c0a15]/95 backdrop-blur-md p-6 flex-col justify-between opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out border border-primary/30 shadow-2xl">
                                    <div className="overflow-y-auto hide-scrollbar pr-1 space-y-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {p.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {p.categories?.map((cat) => (
                                                        <span
                                                            key={cat}
                                                            className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {p.featured && (
                                                <span className="shrink-0 bg-yellow-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                                    <span className="material-symbols-outlined text-xs">star</span>
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {p.desc}
                                        </p>

                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1.5">
                                                Key Highlights
                                            </span>
                                            <ul className="space-y-1.5 text-xs">
                                                {p.bullets.map((b) => (
                                                    <li key={b} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1"></span>
                                                        <span className="line-clamp-2 leading-tight">{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1.5">
                                                Tech Stack
                                            </span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="tag text-[11px] font-medium px-2 py-0.5 rounded text-surface border border-card"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Action Buttons inside overlay */}
                                    <div className="flex gap-3 pt-3 mt-2 border-t border-card/60">
                                        <div className="aura text-primary flex-1">
                                            <a
                                                className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-md"
                                                target="_blank"
                                                rel="noreferrer"
                                                href={p.live_link}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span className="material-symbols-outlined text-base">visibility</span>
                                                Live Demo
                                            </a>
                                        </div>

                                        <a
                                            className="flex-1 flex items-center justify-center gap-2 bg-surface border border-card text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={p.repo_link}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined text-base">code_blocks</span>
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </MotionArticle>
                        );
                    })}
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
