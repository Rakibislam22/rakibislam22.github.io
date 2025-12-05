import React from "react";

export default function Contact() {
    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Get In <span className="text-primary">Touch</span></h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
            </div>

            <div className="bg-card-light dark:bg-card-dark border border-card-light dark:border-card-dark p-8 rounded-2xl max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"><span className="w-2.5 h-2.5 bg-primary rounded-full"></span>Contact Details</h3>

                        <div className="space-y-6">
                            <ContactRow icon="email" label="Email" value="mdrakibali.kcn@gmail.com" />
                            <ContactRow icon="phone" label="Phone" value="+880 178693744" />
                            <ContactRow icon="location_on" label="Location" value="Dhaka, Bangladesh" />
                        </div>

                        <div className="mt-8 pt-6 border-t border-card-light dark:border-card-dark">
                            <h4 className="text-center font-semibold text-gray-900 dark:text-white mb-4">Find me on</h4>
                            <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400">
                                <a className="hover:text-primary" href="#"><svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M16.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 9.75a.75.75 0 00-1.5 0v.255a8.25 8.25 0 01-11.42 6.31l-.1.045a.75.75 0 00.42.145h12.1a.75.75 0 00.42-.145l-.1-.045A8.25 8.25 0 0118.75 10.005V9.75z" fillRule="evenodd"></path></svg></a>
                                <a className="hover:text-primary" href="#"><svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.721 12.752a9.711 9.711 0 00-.945-5.033 3.284 3.284 0 00-2.43-1.85C16.736 5.66 13.014 5.25 12 5.25c-1.014 0-4.736.41-6.346.619a3.284 3.284 0 00-2.43 1.85A9.711 9.711 0 002.279 12.752a9.711 9.711 0 00.945 5.033 3.284 3.284 0 002.43 1.85c1.61.209 5.332.619 6.346.619 1.014 0 4.736-.41 6.346-.619a3.284 3.284 0 002.43-1.85 9.711 9.711 0 00.945-5.033zM10.864 15.356V9.144l4.537 3.106-4.537 3.106z"></path></svg></a>
                                <a className="hover:text-primary" href="#"><svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.75 2.25a2.25 2.25 0 00-2.25 2.25v2.25H15.75a2.25 2.25 0 00-2.25 2.25v2.25h-2.25a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-2.25h2.25a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H19.75zM4.5 6.75A2.25 2.25 0 016.75 4.5h3.75a.75.75 0 010 1.5H6.75A.75.75 0 006 6.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V15a.75.75 0 011.5 0v2.25A2.25 2.25 0 0118 19.5H6.75A2.25 2.25 0 014.5 17.25V6.75z"></path></svg></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>Send Me a Message
                        </h3>

                        <form action="#" className="space-y-6" method="POST">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Your Name</label>
                                <input className="mt-1 block w-full bg-background-light dark:bg-background-dark border-card-light dark:border-card-dark rounded-md shadow-sm focus:ring-primary focus:border-primary" id="name" name="name" placeholder="John Doe" type="text" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Your Email</label>
                                <input className="mt-1 block w-full bg-background-light dark:bg-background-dark border-card-light dark:border-card-dark rounded-md shadow-sm focus:ring-primary focus:border-primary" id="email" name="email" placeholder="john@example.com" type="email" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Your Message</label>
                                <textarea className="mt-1 block w-full bg-background-light dark:bg-background-dark border-card-light dark:border-card-dark rounded-md shadow-sm focus:ring-primary focus:border-primary" id="message" name="message" placeholder="Hey, I'd love to collaborate on..." rows="4"></textarea>
                            </div>

                            <div>
                                <button className="w-full flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity" type="submit">
                                    Send Message <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactRow({ icon, label, value }) {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg"><span className="material-symbols-outlined text-primary">{icon}</span></div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
            </div>
        </div>
    );
}