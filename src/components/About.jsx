import React, { useState, useEffect } from 'react';
import {
    Briefcase, Code, User, Download, Sparkles, Target,
    Github, Linkedin, Twitter, Mail, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [counter, setCounter] = useState(0);

    // ----------- SCROLL ANIMATION VARIANTS -----------
    const scrollFadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const achievements = [
        { number: "5+", label: "Projects", icon: <Briefcase className="h-5 w-5 text-primary" />, suffix: "" },
        { number: "99", label: "Success", icon: <Target className="h-5 w-5 text-primary" />, suffix: "%" },
        { number: "10", label: "Clients", icon: <User className="h-5 w-5 text-primary" />, suffix: "+" }
    ];

    const techStack = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind"] },
        { category: "Backend", items: ["Node.js", "Express"] },
        { category: "Cloud", items: ["Vercel", "MongoDB"] }
    ];

    const features = [
        "MERN-stack expertise", "Clean, maintainable code", "Performance optimization",
        "Agile methodology", "24/7 support", "Timely delivery"
    ];

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/Rakibislam22" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/md-rakib-ali-383947218/" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/rakibislam44" },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:mdrakibali.kcn@gmail.com" }
    ];

    const tabContent = {
        personal:
            "I’m a mindset-driven developer who enjoys building impactful digital experiences. Outside of coding, I actively explore emerging technologies, contribute to open-source communities, and help fellow learners grow in their tech journey.",

        professional:
            "With hands-on experience in MERN-stack development, I've built and deployed multiple full-stack applications using modern frameworks. My strengths include crafting scalable architectures, optimizing performance, and developing clean, maintainable solutions.",

        approach:
            "I follow a clean-code philosophy grounded in clarity, testing, and user-focused design. My workflow embraces collaboration, agile practices, and continuous iteration to deliver reliable and high-quality software."
    };

    useEffect(() => {
        const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
        return () => clearInterval(interval);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Md_Rakib_Ali_Resume.pdf';
        link.download = 'Md_Rakib_Ali_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <section
            id="about"
            className="relative py-16 px-4 sm:px-6 lg:px-12
                       bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">

            <div className="container mx-auto relative">

                {/* ================= HEADER (Scroll Animated) ================= */}
                <motion.div
                    variants={scrollFadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16 md:mb-20 px-2 sm:px-6"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                        <span className="text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            Transforming
                        </span>
                        <span className="block text-primary animate-pulse">Ideas Into Reality</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Building digital experiences with innovation, performance, and elegance.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* LEFT COLUMN */}
                    <div className="xl:col-span-2 space-y-8">

                        {/* ================= ABOUT CARD (Scroll Animated) ================= */}
                        <motion.div
                            variants={scrollFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-card border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
                        >

                            <div className="flex flex-col md:flex-row items-center gap-8">

                                {/* Profile */}
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                                        <img src="/profile-logo.jpg" alt="MD Rakib" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse" />
                                </div>

                                {/* Achievements */}
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-surface">Md Rakib Ali</h2>
                                    <p className="text-primary text-lg font-semibold mb-4">MERN Stack Developer</p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {achievements.map((a, i) => (
                                            <div key={i}
                                                className={`p-3 rounded-xl border bg-card transition 
                                                ${counter === i ? "bg-primary/10 border-primary/50" : "border-border"}`}>
                                                <div className="flex items-center gap-3">
                                                    {a.icon}
                                                    <div>
                                                        <p className="font-bold text-lg">{a.number}{a.suffix}</p>
                                                        <p className="text-xs text-muted-foreground">{a.label}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Tabs */}
                            <div className="flex border-b mt-6">
                                {["personal", "professional", "approach"].map(tab => (
                                    <button key={tab} onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-3 font-medium transition 
                                            ${activeTab === tab ? "text-primary border-b-2 border-primary"
                                                : "text-muted-foreground hover:text-foreground"}`}>
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Switch Animation */}
                            <div className="mt-6 min-h-[140px] relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="sm:absolute inset-0"
                                    >
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {tabContent[activeTab]}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </motion.div>

                        {/* ================= TECH STACK (Scroll Animated) ================= */}
                        <motion.div
                            variants={scrollFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-card border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Code className="h-6 w-6 text-primary" /> Tech Stack Overview
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {techStack.map((stack, i) => (
                                    <div key={i} className="p-6 rounded-2xl border bg-card hover:border-primary/30 transition">
                                        <h4 className="font-semibold text-lg mb-4 text-surface">{stack.category}</h4>
                                        <div className="space-y-2">
                                            {stack.items.map((item, idx) => (
                                                <p key={idx} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* ================= RIGHT COLUMN ================= */}
                    <div className="space-y-8">

                        {/* Work Together */}
                        <motion.div
                            variants={scrollFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-card border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center text-surface">Let's Work Together</h3>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact"
                                    className="flex-1 bg-primary text-white p-4 rounded-xl text-center font-semibold hover:bg-primary/90">
                                    <User className="inline-block mr-2" /> Start a Project
                                </a>

                                <button
                                    onClick={handleDownload}
                                    className="flex-1 p-4 border border-border rounded-xl text-center font-semibold hover:bg-accent">
                                    <Download className="inline-block mr-2" />
                                    Download Resume
                                </button>
                            </div>

                            <div className="mt-6 bg-card border border-border p-4 rounded-xl text-center">
                                <h4 className="font-semibold mb-2 text-surface">Quick Connect</h4>
                                <div className="flex justify-center gap-4">
                                    {socialLinks.map((s, i) => (
                                        <a key={i} href={s.href} className="p-2 rounded-lg hover:text-primary hover:scale-110 transition bg-transparent">
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Why Choose Me */}
                        <motion.div
                            variants={scrollFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            className="bg-card border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
                        >
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-surface">
                                <Star className="h-5 w-5 text-primary" /> Why Choose Me
                            </h3>

                            <div className="space-y-3">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        <p className="text-sm text-muted-foreground hover:text-foreground">{f}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            variants={scrollFadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            className="bg-card border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="font-semibold text-sm text-surface">Available</span>
                                </div>
                                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                                    For new projects
                                </span>
                            </div>

                            <p className="text-xs text-muted-foreground text-center bg-card p-2 rounded-lg">
                                ⚡ Response time: Under 24 hours
                            </p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;