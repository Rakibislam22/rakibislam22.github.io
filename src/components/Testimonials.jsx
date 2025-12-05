import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
    const items = [
        {
            quote: `Working with Sahil was seamless from day one. Not only did they deliver a full-stack solution ahead of schedule, but they also communicated clearly throughout the project. It's rare to find a developer who understands both the tech and the business side so well`,
            name: "Alex Johnson",
            role: "Product Director at TechCorp"
        },
        {
            quote: `I've reviewed hundreds of portfolios, and this work is truly exceptional. The animations while maintaining performance is masterful. The design elements add depth without overwhelming.`,
            name: "Maria Chen",
            role: "Senior UX Designer at DesignHub"
            
        },
        {
            quote: `From wireframes to deployment, Sahil owned the entire stack with confidence and creativity. The final product is fast, reliable, and looks incredible. I wouldn't hesitate to work with them again.`,
            name: "David Wilson",
            role: "CTO at Startup Ventures"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-flex items-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark rounded-full px-4 py-1.5 text-sm mb-4">
                    <span className="material-symbols-outlined text-primary text-base">reviews</span>
                    Client Feedback
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    What People Say
                </h2>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    What Clients Will Say About Working With Me.
                </p>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {items.map((t) => (
                    <motion.div
                        key={t.name}
                        variants={cardVariant}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
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
