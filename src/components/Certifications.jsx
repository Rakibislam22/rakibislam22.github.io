import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

// Move data outside component to prevent recreation on every render
const CERTIFICATIONS_DATA = [
    {
        title: "MERN Stack Development",
        issuer: "Coursera",
        date: "2024",
        credentialId: "CERT-12345",
        credentialUrl: "https://example.com/certificate/12345",
        description: "Comprehensive course covering MongoDB, Express, React, and Node.js",
        skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2023",
        credentialId: "FCC-67890",
        credentialUrl: "https://www.freecodecamp.org/certification/example/javascript-algorithms-and-data-structures",
        description: "Mastered JavaScript fundamentals, algorithms, and data structures",
        skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
    },
    {
        title: "React - The Complete Guide",
        issuer: "Udemy",
        date: "2023",
        credentialId: "UDEMY-11111",
        credentialUrl: "https://www.udemy.com/certificate/example",
        description: "Deep dive into React hooks, context API, and advanced patterns",
        skills: ["React", "Hooks", "Context API", "Redux", "Next.js"],
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialId: "AWS-CCP-22222",
        credentialUrl: "https://www.credly.com/badges/example",
        description: "Understanding of AWS cloud services and architecture",
        skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
    },
];

// Move animation variants outside component
const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Certifications() {
    // Memoize certifications to prevent unnecessary re-renders
    const certifications = useMemo(() => CERTIFICATIONS_DATA, []);

    return (
        <section className="mb-24 lg:mb-32">
            <motion.div
                id="certifications"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <span className="text-primary">Certifications</span> & Credentials
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Professional certifications and credentials that validate my expertise in various technologies and domains.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {certifications.map((cert) => (
                    <motion.article
                        key={cert.credentialId}
                        variants={cardVariant}
                        className="bg-card border border-card p-6 rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-primary font-semibold mb-2">
                                    {cert.issuer}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                    <Calendar className="h-3 w-3" />
                                    <span>{cert.date}</span>
                                    {cert.credentialId && (
                                        <>
                                            <span>•</span>
                                            <span>ID: {cert.credentialId}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                            {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="tag text-xs font-semibold px-2 py-1 rounded text-surface"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View ${cert.title} certificate`}
                                className="flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <span>View Certificate</span>
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </a>
                        )}
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}

export default React.memo(Certifications);
