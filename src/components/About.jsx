import React from "react";

export default function About() {
    return (
        <section className="mb-24 lg:mb-32">
            <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark rounded-full px-4 py-1.5 text-sm mb-4">
                    <span className="material-symbols-outlined text-primary text-base">person</span> About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Transforming <span className="text-primary">Ideas Into</span> Reality
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Building digital experiences that combine innovation, performance, and elegance</p>
            </div>

            <div className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-8 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="relative mb-4">
                            <img alt="profile picture" className="w-32 h-32 rounded-lg object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6MVH5ljNB_mai196Qeuc61bI9Pf-5xoX-W3JcvdwyhndSgF8pJGxvMdrnmsmqR-k3lO--IOX-_Z6h2_gYBkuWyvIZDM4VU-bsBWozb7UUfDVTu8FbCokMJmvt8onHWrjFWl3SMUCM9Arlb6naYlT-TfjsCczp7WUFbCPbtn0KM_lWTJWiIeTLjckqq_iaCHArEi_TXXfhcYNE6ZBxUU4t9Ag_cP6bYu9gh9jvPsSw56rVzinzuOCfcNiBFzPdJcM2syst-dBQ" />
                            <span className="absolute -bottom-1 -right-1 block h-5 w-5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">MD Rakib Ali</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">MERN Stack Developer</p>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <SmallStat icon="emoji_events" value="15+" label="Projects" />
                            <SmallStat icon="calendar_month" value="1+" label="Years Exp" />
                            <SmallStat icon="verified" value="99%" label="Success" />
                            <SmallStat icon="groups" value="10+" label="Clients" />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="border-b border-card-light dark:border-card-dark mb-6">
                            <nav aria-label="Tabs" className="flex space-x-8">
                                <button className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-primary border-primary">Personal</button>
                                <button className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-gray-500 dark:text-gray-400 border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300">Professional</button>
                                <button className="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm text-gray-500 dark:text-gray-400 border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300">Achievements</button>
                            </nav>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.
                        </p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h4>
                                <div className="flex gap-4">
                                    <a className="flex-1 flex flex-col items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity" href="#">
                                        <span className="material-symbols-outlined">person_add</span> Start a Project
                                    </a>
                                    <a className="flex-1 flex flex-col items-center justify-center gap-2 bg-background-light dark:bg-background-dark border border-card-light dark:border-card-dark text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 dark:hover:bg-white transition-colors" href="#">
                                        <span className="material-symbols-outlined">download</span> Download Resume
                                    </a>
                                </div>

                                <div className="mt-4 bg-background-light dark:bg-background-dark border border-card-light dark:border-card-dark p-3 rounded-lg">
                                    <h5 className="text-sm font-semibold text-center mb-2 text-gray-900 dark:text-white">Quick Connect</h5>
                                    <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
                                        <IconButton />
                                        <IconButton />
                                        <IconButton />
                                        <IconButton />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background-light dark:bg-background-dark border border-card-light dark:border-card-dark p-6 rounded-lg">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">star</span> Why Choose Me
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Full-stack expertise</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Clean, maintainable code</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Performance optimization</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Agile methodology</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>24/7 support</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Timely delivery</li>
                                </ul>

                                <div className="mt-4 pt-4 border-t border-card-light dark:border-card-dark flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                        <span>Available</span>
                                        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full text-xs font-medium">For new projects</span>
                                    </div>
                                    <p className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400">
                                        <span className="material-symbols-outlined text-sm">bolt</span> Response time: Under 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SmallStat({ icon, value, label }) {
    return (
        <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">{icon}</span>
            <div>
                <p className="font-bold text-gray-900 dark:text-white">{value}</p>
                <p className="text-xs">{label}</p>
            </div>
        </div>
    );
}

function IconButton() {
    return (
        <a className="hover:text-primary" href="#">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M16.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 9.75a.75.75 0 00-1.5 0v.255a8.25 8.25 0 01-11.42 6.31l-.1.045a.75.75 0 00.42.145h12.1a.75.75 0 00.42-.145l-.1-.045A8.25 8.25 0 0118.75 10.005V9.75z" fillRule="evenodd"></path>
            </svg>
        </a>
    );
}