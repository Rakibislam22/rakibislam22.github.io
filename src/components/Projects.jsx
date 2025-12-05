import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "GenAxis",
            desc: "AI saas webapp build with PERN stack and Integrated Gemini . OPEN SOURCE",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzwp2oi5fQbRZIgjJXJCAPeQ2NzGwk89hR30qWCSQutNnlI1paZYyfEkA5ISdUy1gxDvPkdDI45ZfyANmPLioIV6f9WQuCfRwpFfn00dI43dQovLWYwpF9p8mjsURaUueKGLFsfhs8YVig0OUosxxij6pww3fD0vaa68drNr4NVJBjUenVm3-EG8AAK2zix8kmegKREbW7eEmCc4pFgFzyQQiMeXBNnbE-7xj_6YUUD1RxZeqF1Kx0AOAyFZbJ3rOroPBrbnZS",
            tags: ["PERN Stack", "Clerk Auth", "Google Gemini"],
            bullets: ["Image Generation", "Article Writer", "Blog Writer", "Resume Reviewer"],
            featured: true,
        },
        {
            title: "NauraCare",
            desc: "Hospital management platform with multi-role access, patient tracking, and billing systems.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAYoma2IPnPqC2w2RHNbTFIvqokAVYjTf68eZKhchjr-x3467_qkBMC0oGoXB4yUGdy2kiH4Py_Emrd7GM90CObxj2wJsG9BUIRidl0MuCNRmnFKORBSHfvNCEvN2QCjEzUzViWfZ6XHBdBxr6UYelHALcvai2MxQaGky5_OBYLF1WrEm601XMP_zIr2FTa_4aS4Sj0uxo_8L649bE9UQdOJDKbRZd2G8aGfBz_96cKczGjVgntbO5-CmFlZWrFyJyqjEAyW-A",
            tags: ["React", "Node.js", "MongoDB", "JWT Auth"],
        },
        {
            title: "Vante & Co.",
            desc: "Fashion marketplace with product recommendations and seamless checkout experience.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_viZEpJXijYmFAxMVQ4PmS8rxrXq92_iambQlIdTvA0Ws0pzbY290E5Z3n4WGTCua3eI0lqcJLhN-lrgrgCd1g0g3nyh36qyG6jg_dHfJ2vjaDgvr3lWP0xq7ZSBN7gwqy0CsCDQaObXzYWtkIMHMlIRVCx3EQ2fzvrISdUBLbXjogUhkz2WLBsTBGlBDl51bNfWoQNh4cJ3M0cFJl62GXlXtW5xrGexfSr8erd27ndIXRYn6iOSj4H4TNNCDBbHl-0KwKtRo",
            tags: ["React", "Node.js", "Stripe", "Redis"],
            featured: true,
        },
    ];

    return (
        <section className="mb-24 lg:mb-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Project <span className="text-primary">Portfolio</span></h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A collection of projects I've built to showcase my skills in full-stack development and modern web technologies.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
                <button className="bg-primary-gradient text-white px-5 py-2 rounded-full font-semibold">All</button>
                <button className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full font-semibold">AI SaaS</button>
                <button className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full font-semibold">Healthcare SaaS</button>
                <button className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full font-semibold">E-commerce</button>
                <button className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full font-semibold">FinTech</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p) => (
                    <article key={p.title} className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-6 rounded-2xl flex flex-col">
                        <div className="relative mb-4">
                            <img alt={`${p.title} screenshot`} className="rounded-lg h-48 w-full object-cover" src={p.img} />
                            {p.featured && (
                                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">star</span>Featured
                                </span>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 my-2 flex-grow">{p.desc}</p>

                        <ul className="space-y-2 text-sm mb-4">
                            {(p.bullets || []).map((b) => <li key={b} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{b}</li>)}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {p.tags.map((t) => (
                                <span key={t} className="bg-background-light dark:bg-background-dark text-xs font-semibold px-2 py-1 rounded">{t}</span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <a className="flex-1 flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity" href="#">
                                <span className="material-symbols-outlined text-base">visibility</span> Live Demo
                            </a>
                            <a className="flex-1 flex items-center justify-center gap-2 bg-background-light dark:bg-background-dark border border-card-light dark:border-card-dark text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 dark:hover:bg-white transition-colors" href="#">
                                <span className="material-symbols-outlined text-base">code_blocks</span> Code
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="inline-flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity" href="#">
                    View More Projects <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
        </section>
    );
}