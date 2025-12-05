import React from "react";

export default function Header() {
    return (
        <header className="text-center lg:text-left mb-24 lg:mb-32">
            <div className="flex justify-center lg:justify-start mb-4">
                <span className="inline-flex items-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark rounded-full px-4 py-1.5 text-sm">
                    <span className="material-symbols-outlined text-base text-primary">work</span>
                    Currently Accepting new Opportunities
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                I'm Rakib
                <br />
                <span className="text-primary">MERN-Stack</span>
                <br />
                <span className="text-primary">Developer</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-400 mb-8">
                I build high-performance web applications that drive business growth. Specializing in React, Node.js,
                and scalable architecture for startups and enterprises.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 mb-8">
                <Stat icon="hourglass_top" value="1+" label="Years in Production" />
                <Stat icon="rocket_launch" value="15+" label="Projects Delivered" />
                <Stat icon="sentiment_satisfied" value="100%" label="Client Satisfaction" />
                <Stat icon="checklist" value="15+" label="Projects completed" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a className="flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity" href="#">
                    <span className="material-symbols-outlined">code</span> View Case Studies <span className="material-symbols-outlined">trending_flat</span>
                </a>
                <a className="flex items-center justify-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 dark:hover:bg-white transition-colors" href="#">
                    <span className="material-symbols-outlined">biotech</span> Technical Interview
                </a>
                <a className="flex items-center justify-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 dark:hover:bg-white transition-colors" href="#">
                    <span className="material-symbols-outlined">download</span> View Resume
                </a>
            </div>

            <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary">campaign</span>
                    Available Immediately for Full-Stack and Frontend roles
                </span>
            </div>
        </header>
    );
}

function Stat({ icon, value, label }) {
    return (
        <div className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-4 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
            <p className="text-sm">{label}</p>
        </div>
    );
}