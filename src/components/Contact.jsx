import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Send, Loader2, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .send(
                "service_ehf7j2a",
                "template_b1fhrdi",
                formData,
                "8C2-PMaXJeATcg7Ir"
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    setLoading(false);
                    setTimeout(() => {
                        setStatus("");
                    }, 1500);
                },
                () => {
                    setStatus("Failed to send message. Try again!");
                    setLoading(false);
                }
            );
    };

    return (
        <section>
            {/* HEADER SCROLL ANIMATION */}
            <motion.div
                id="contact"
                className="text-center mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Have a project in mind or just want to say hi? My inbox is always open.
                </p>
            </motion.div>

            <motion.div
                className="bg-card border border-card p-8 rounded-2xl max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                            Contact Details
                        </h3>

                        <div className="space-y-6">
                            <ContactRow icon={<Mail className="text-primary" />} label="Email" value="mdrakibali.kcn@gmail.com" />
                            <ContactRow icon={<Phone className="text-primary" />} label="Phone" value="+880 178693744" />
                            <ContactRow icon={<MapPin className="text-primary" />} label="Location" value="Dhaka, Bangladesh" />
                        </div>

                        <div className="mt-8 pt-6 border-t border-card">
                            <h4 className="text-center font-semibold text-gray-900 dark:text-white mb-4">
                                Find me on
                            </h4>

                            <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400">
                                <a className="hover:text-primary" href="https://github.com/Rakibislam22"><Github className="w-6 h-6" /></a>
                                <a className="hover:text-primary" href="https://www.facebook.com/rakibislam.KCN"><Facebook className="w-6 h-6" /></a>
                                <a className="hover:text-primary" href="https://www.instagram.com/rakibislam789/"><Instagram className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE — FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                            Send Me a Message
                        </h3>

                        <form onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    className="mt-1 block w-full bg-card border border-card rounded-md shadow-sm focus:ring-primary focus:border-primary text-surface placeholder-gray-400 dark:placeholder-gray-400 px-3 py-2"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    className="mt-1 block w-full bg-card border border-card rounded-md shadow-sm focus:ring-primary focus:border-primary text-surface placeholder-gray-400 dark:placeholder-gray-400 px-3 py-2"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    className="mt-1 block w-full bg-card border border-card rounded-md shadow-sm focus:ring-primary focus:border-primary text-surface placeholder-gray-400 dark:placeholder-gray-400 px-3 py-2"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Hey, I'd love to collaborate on..."
                                    required
                                ></textarea>
                            </div>

                            {/* SUBMIT BUTTON WITH LOADING */}
                            <button
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-primary-gradient text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                type="submit"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status && <p className="text-center text-sm text-primary mt-2">{status}</p>}
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

function ContactRow({ icon, label, value }) {
    return (
        <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="bg-card p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
            </div>
        </motion.div>
    );
}