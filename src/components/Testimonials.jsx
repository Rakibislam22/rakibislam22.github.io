import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
    const items = [
        {
            quote: `Collaborating with Rakib on our academic and team projects was an awesome experience. He quickly breaks down tough backend problems and delivers reliable, clean solutions on time. A genuinely dedicated teammate.`,
            name: "Md Jobaer Islam Alif",
            role: "Software Engineering Intern"
        },
        {
            quote: `Working with Rakib on frontend development is effortless. He brings designs to life with slick animations and responsive layouts while keeping the codebase neat and fast. He really cares about user experience.`,
            name: "Ismail Hossain Shizan",
            role: "UI/UX & Frontend Collaborator"
        },
        {
            quote: `From architecting databases to managing deployment, Rakib handles full-stack challenges with confidence. Whenever our team hit a roadblock, he was always ready to debug and find the right solution.`,
            name: "Pranta Kumer Pandit",
            role: "Full-Stack Project Partner"
        }
    ];

    // Animation variants
    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="mb-24 lg:mb-32">

            {/* Header */}
            <motion.div
                id="testimonials"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-flex items-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark rounded-full px-4 py-1.5 text-sm mb-4">
                    <span className="material-symbols-outlined text-primary text-base">reviews</span>
                    Teammate Feedback
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    What People Say
                </h2>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    What Teammates Will Say About Working With Me.
                </p>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05, margin: "100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {items.map((t) => (
                    <motion.div
                        key={t.name}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.08 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card-light dark:bg-card-dark border border-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
                    >
                        {/* Quote mark */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl text-primary font-serif"
                        >
                            "
                        </motion.span>

                        {/* Quote text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-gray-600 dark:text-gray-400 mb-6"
                        >
                            "{t.quote}"
                        </motion.p>

                        <div className="flex items-center gap-4 mt-4">


                            {/* Name + Role */}
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">
                                    {t.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {t.role}
                                </p>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
