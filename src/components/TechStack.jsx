import React from "react";

export default function TechStack() {
    return (
        <section className="mb-24 lg:mb-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-outlined text-4xl md:text-5xl align-bottom">code</span> Tech Stack Overview
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card title="Frontend" icon="code" items={["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind"]} />
                <Card title="Backend" icon="dns" items={["Node.js", "Express", "Java", "Python"]} />
                <Card title="Cloud" icon="cloud" items={["AWS", "Docker", "Vercel", "MongoDB"]} />
            </div>
        </section>
    );
}

function Card({ title, icon, items }) {
    return (
        <div className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">{icon}</span> {title}
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {it}
                    </li>
                ))}
            </ul>
        </div>
    );
}