// Updated Navbar: clearer, accessible GitHub icon SVG
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(() =>
        typeof window !== "undefined" && document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else if (saved === "light") {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (typeof window === "undefined") return;
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    const links = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-40 backdrop-blur-sm">
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <a
                        href="#hero"
                        className="flex items-center gap-3 text-sm font-semibold text-foreground dark:text-gray-100"
                        aria-label="Rakib - Home"
                    >
                        <div className="w-[3px] h-5 rounded-lg bg-primary-gradient ">
                        </div>
                        <span className="text-lg ml-[-8px]">RA<span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">K</span>IB</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex items-center gap-4">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-primary transition"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3">
                            <a
                                href="/Md_Rakib_Ali_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary/90 text-white text-sm font-medium hover:opacity-95 transition"
                            >
                                Resume
                            </a>

                            {/* Clear, accessible GitHub icon */}
                            <a
                                href="https://github.com/Rakibislam22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition flex items-center"
                                aria-label="GitHub - Rakibislam22"
                                title="GitHub"
                            >
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="false"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>GitHub</title>
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>

                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2 rounded-md bg-background/60 border border-border hover:bg-background/75 transition"
                                title="Toggle theme"
                            >
                                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-md bg-background/60 border border-border mr-2"
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            className="p-2 rounded-md bg-background/60 border border-border"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-max-height duration-300 overflow-hidden bg-background-light/60 dark:bg-background-dark/60 border-t border-border ${open ? "max-h-[400px]" : "max-h-0"
                    }`}
            >
                <div className="px-4 py-4 space-y-3">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block text-base font-medium text-foreground hover:text-primary"
                        >
                            {l.label}
                        </a>
                    ))}

                    <a
                        href="/Md_Rakib_Ali_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 px-3 py-2 rounded-md bg-primary/90 text-white text-center"
                    >
                        Resume
                    </a>

                    <div className="flex items-center justify-center gap-4 pt-2">
                        <a
                            href="https://github.com/Rakibislam22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://rakibislam22.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}