import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, TrendingUp, ExternalLink } from "lucide-react";

// Move data outside component to prevent recreation on every render
const PLATFORMS_DATA = [
    {
        id: "leetcode",
        name: "LeetCode",
        username: "rakibislam22",
        profileUrl: "https://leetcode.com/u/rakibislam22/",
        problemsSolved: 150,
        rank: "Top 15%",
        badge: "Medium",
        achievements: [
            "Solved 150+ problems",
            "Active streak: 30 days",
            "Contest rating: 1500+",
        ],
    },
    {
        id: "codeforces",
        name: "Codeforces",
        username: "rakibislam22",
        profileUrl: "https://codeforces.com/profile/rakibislam22",
        problemsSolved: 200,
        rank: "Specialist",
        badge: "Advanced",
        achievements: [
            "Participated in 50+ contests",
            "Max rating: 1400+",
            "Solved 200+ problems",
        ],
    },
    {
        id: "hackerrank",
        name: "HackerRank",
        username: "rakibislam22",
        profileUrl: "https://www.hackerrank.com/profile/rakibislam22",
        problemsSolved: 100,
        rank: "5 Stars",
        badge: "Expert",
        achievements: [
            "5 stars in Problem Solving",
            "5 stars in JavaScript",
            "5 stars in Python",
        ],
    },
    {
        id: "codechef",
        name: "CodeChef",
        username: "rakibislam22",
        profileUrl: "https://www.codechef.com/users/rakibislam22",
        problemsSolved: 120,
        rank: "3 Stars",
        badge: "Intermediate",
        achievements: [
            "3 star rating",
            "Solved 120+ problems",
            "Active participant",
        ],
    },
];

const CONTEST_HIGHLIGHTS_DATA = [
    {
        id: "leetcode-weekly",
        contest: "LeetCode Weekly Contest",
        rank: "Top 500",
        date: "2024-01-15",
        description: "Achieved top 500 ranking in weekly contest",
    },
    {
        id: "codeforces-round",
        contest: "Codeforces Round 900",
        rank: "Rank 1200",
        date: "2024-02-20",
        description: "Solved 3 out of 5 problems in Div. 2 contest",
    },
    {
        id: "hackerrank-30days",
        contest: "HackerRank 30 Days of Code",
        rank: "Completed",
        date: "2023-12-01",
        description: "Successfully completed all 30 days challenge",
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

// Move badge color mapping outside component
const BADGE_COLORS = {
    Beginner: "bg-green-500/20 text-green-600 dark:text-green-400",
    Intermediate: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    Medium: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
    Advanced: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
    Expert: "bg-red-500/20 text-red-600 dark:text-red-400",
};

const getBadgeColor = (badge) => BADGE_COLORS[badge] || BADGE_COLORS.Beginner;

function CompetitiveProgramming() {
    // Memoize data to prevent unnecessary re-renders
    const platforms = useMemo(() => PLATFORMS_DATA, []);
    const contestHighlights = useMemo(() => CONTEST_HIGHLIGHTS_DATA, []);

    return (
        <section className="mb-24 lg:mb-32">
            <motion.div
                id="competitive-programming"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Competitive <span className="text-primary">Programming</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    My journey in competitive programming across various platforms, showcasing problem-solving skills and algorithmic thinking.
                </p>
            </motion.div>

            {/* Platforms Section */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
                {platforms.map((platform) => (
                    <motion.article
                        key={platform.id}
                        variants={cardVariant}
                        className="bg-card border border-card p-6 rounded-2xl flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Code2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {platform.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        @{platform.username}
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(
                                    platform.badge
                                )}`}
                            >
                                {platform.badge}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="p-3 bg-card border border-card rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Problems</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {platform.problemsSolved}+
                                </p>
                            </div>
                            <div className="p-3 bg-card border border-card rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <Trophy className="h-4 w-4 text-primary" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Rank</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {platform.rank}
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-2 text-sm mb-4 flex-grow">
                            {platform.achievements.map((achievement) => (
                                <li key={achievement} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true"></span>
                                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={platform.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${platform.name} profile`}
                            className="flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            <span>View Profile</span>
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </motion.article>
                ))}
            </motion.div>

            {/* Contest Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Contest <span className="text-primary">Highlights</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contestHighlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-card p-5 rounded-xl hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Trophy className="h-5 w-5 text-primary" />
                                <h4 className="font-bold text-gray-900 dark:text-white">
                                    {highlight.contest}
                                </h4>
                            </div>
                            <p className="text-primary font-semibold mb-2">{highlight.rank}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {highlight.description}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">{highlight.date}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default React.memo(CompetitiveProgramming);
