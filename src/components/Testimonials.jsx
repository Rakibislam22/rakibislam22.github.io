import React from "react";

export default function Testimonials() {
    const items = [
        {
            quote: `Working with Sahil was seamless from day one. Not only did they deliver a full-stack solution ahead of schedule, but they also communicated clearly throughout the project. It's rare to find a developer who understands both the tech and the business side so well`,
            name: "Alex Johnson",
            role: "Product Director at TechCorp",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMkAHfZfYvj0iRCtiyODP6CVU3KBpdxz1jWTHsXmcTmTJNUeXDtiajPkwAL70BcyOeG3dffJZwK48EQOXhdd9FA3UgmDjrQqfrVFrccOJd9xJ3BqgNCTZPMRCT_il3LgxBZLuQeGc6U4Vj5Hr1qEPw7xfrl2yr51IZ8YFjdZyPkD0bXhKFrJudFot7kwsbf2PpjQ9rCXgsJhPdy_neoomEjbPD0phM51qZAU4EiKWN-keSh4FxfO_MNL0zGwoyo8SeGPLOpwa_"
        },
        {
            quote: `I've reviewed hundreds of portfolios, and this work is truly exceptional. The animations while maintaining performance is masterful. The design elements add depth without overwhelming.`,
            name: "Maria Chen",
            role: "Senior UX Designer at DesignHub",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIRPo4yO3YjtChX38J7eEOcvlzldX1SFD3ztyilLt-HGEL7ijtrUaS0GsBPaR0QsqckE7oP6qsDCZTnJcoa4Sb7FpRf4hMR8sT_NQG9Lkxpy5HhnZ_Rk07OZYrRlDeCQc0gHx6y-BqA3aLYmKB1VHrv9QYcrXy65feVXTownbj1S3Xn64TvaeUsarvU2GqvZfYKPCEgKopNXpis1l7DTgF_IBtFNIMhxjVR5j0Dw1tLv9hfjBkgt_cLlFlv6dbyJQmLfuaeCAe"
        },
        {
            quote: `From wireframes to deployment, Sahil owned the entire stack with confidence and creativity. The final product is fast, reliable, and looks incredible. I wouldn't hesitate to work with them again.`,
            name: "David Wilson",
            role: "CTO at Startup Ventures",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0HfgjcXm8vDTDgfc7Ptd7IN7--ecKETAHbpgFqlIHjh70nhCbkpCenMiBi1t5ZhasMxGq2AU1aoivbg07_JpsXufWX4vYrh5uVEI_SRL6JmnMEgENVnlOEKy7uIOQ_CjU1I0WxUG-ZjcawdU-aDq3bxl8zrCFzD4NLQqoTqI4nZHedxsKmqnVoOcLIGUlPRhKCDEjhiagFghRr4KEdGTH1nLvCuR58-PW_VoDsnvyYV0S2fUzkF069oaPPzE-v8JHU7q7EswS"
        }
    ];

    return (
        <section className="mb-24 lg:mb-32">
            <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark rounded-full px-4 py-1.5 text-sm mb-4">
                    <span className="material-symbols-outlined text-primary text-base">reviews</span> Client Feedback
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">What People Say</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">What Clients Will Say About Working With Me.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((t) => (
                    <div key={t.name} className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-8 rounded-2xl">
                        <span className="text-5xl text-primary font-serif">"</span>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">"{t.quote}"</p>
                        <div className="flex items-center">
                            <img alt={`${t.name} profile`} className="h-12 w-12 rounded-full object-cover mr-4" src={t.img} />
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}