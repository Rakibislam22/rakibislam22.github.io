import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, Users, TrendingUp, Briefcase, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const codeSnippets = [
    "import { MERNStackDeveloper } from 'rakib.dev';",
    "",
    "const developer = new MERNStackDeveloper({",
    "  name: 'Rakib',",
    "  stack: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],",
    "  focus: 'Building scalable web applications',",
    "  status: 'Open to new opportunities'",
    "});",
    "",
    "await developer.launchPortfolio();",
    "// Featured: E-commerce, SaaS, Enterprise, Startup MVPs",
    "",
    "developer.connect();",
    "console.log('Let\\'s build something exceptional together!');"
];

const Header = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [currentCodeLine, setCurrentCodeLine] = useState(0);
    const [displayedCode, setDisplayedCode] = useState("");
    const [showProfileLoading, setShowProfileLoading] = useState(false);
    const [showProfileImage, setShowProfileImage] = useState(false);
    const terminalRef = useRef(null);

    const MotionDiv = motion.div;
    const MotionA = motion.a;
    const MotionButton = motion.button;
    const MotionSpan = motion.span;

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [currentCodeLine, displayedCode]);


    useEffect(() => {
        if (showProfileImage) {
            return;
        }

        let timeoutId;
        const currentLine = codeSnippets[currentCodeLine];
        if (displayedCode.length < currentLine.length) {
            timeoutId = setTimeout(() => {
                setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
            }, 30);
        } else {
            timeoutId = setTimeout(() => {
                if (currentCodeLine < codeSnippets.length - 1) {
                    setCurrentCodeLine(prev => prev + 1);
                    setDisplayedCode("");
                } else {
                    setShowProfileLoading(true);
                    timeoutId = setTimeout(() => {
                        setShowProfileLoading(false);
                        setShowProfileImage(true);
                    }, 300);
                }
            }, 800);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [displayedCode, currentCodeLine, showProfileImage]);

    const handleViewResume = () => {
        // Open resume in new tab
        window.open('/Md_Rakib_Ali_Resume.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="hero" className="relative min-h-[90vh] lg:max-h-[93vh] mt-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background/95 to-primary/10" ref={ref}>

            <div className="container mx-auto w-full mt-16 sm:mt-0">
                <MotionDiv className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>

                    <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                        <MotionDiv className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
                            <Briefcase className="h-4 w-4" /> Currently Accepting new Opportunities
                        </MotionDiv>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                            }}
                        >
                            <span className="block text-foreground">I'm Rakib</span>

                            <motion.span
                                className="inline-block w-fit bg-clip-text text-transparent mt-2 pr-2 pb-2"
                                animate={{
                                    /* Ekhane direct color change hocche: Left ALWAYS Purple, Right Pink <> Purple */
                                    backgroundImage: [
                                        'linear-gradient(to right, #A020F0, #ec4899)', /* State 1: Left Purple, Right Pink */
                                        'linear-gradient(to right, #A020F0, #A020F0)', /* State 2: Pura Purple */
                                        'linear-gradient(to right, #A020F0, #ec4899)'  /* Back to State 1 */
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                MERN-Stack Developer
                            </motion.span>
                        </motion.h1>
                        <MotionDiv as="p" className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
                            I build <span className="text-primary font-semibold">high-performance web applications</span> that drive business growth. Specializing in React, Node.js, and scalable architecture for startups and enterprises.
                        </MotionDiv>

                        <MotionDiv className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start py-10" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
                            <div className="aura text-primary bg-primary/10 inline-flex flex-1 rounded-xl">
                                <MotionA href="#projects" className="text-white bg-primary group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3 w-full" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                    <Code className="h-5 w-5" />
                                    <span>View Case Studies</span>
                                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </MotionA>
                            </div>

                            <MotionA href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Mail className="h-4 w-4" />
                                <span>Technical Interview</span>
                            </MotionA>

                            <MotionButton
                                onClick={handleViewResume}
                                className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="h-4 w-4" />
                                <span>View Resume</span>
                            </MotionButton>
                        </MotionDiv>

                        <MotionDiv className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
                            <p className="text-sm text-muted-foreground">
                                <span className="text-primary font-semibold">Available immediately</span> for MERN-stack, React, Next.js, and frontend roles
                            </p>
                        </MotionDiv>
                    </div>

                    <MotionDiv className="flex-1 flex justify-center lg:justify-end w-full" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
                        <div className=" relative w-full max-w-md">
                            <MotionDiv className="bg-background/50 border border-border rounded-2xl p-8 my-20 backdrop-blur-sm shadow-xl w-full group hover:shadow-2xl transition-all duration-500" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                                    </div>
                                    <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                                </div>

                                {showProfileLoading ? (
                                    <div className="h-87.5 flex items-center justify-center rounded-lg border border-primary/10 bg-primary/5">
                                        <span className="loading loading-spinner loading-lg text-primary"></span>
                                    </div>
                                ) : !showProfileImage ? (
                                    <div ref={terminalRef} className="font-mono text-sm
                                        bg-primary/5
                                        rounded-lg
                                        border border-primary/10
                                        flex
                                        h-87.5
                                        overflow-y-auto
                                        hide-scrollbar">
                                        <div className="p-6 w-full">
                                            <div className="grid grid-cols-1 gap-1  content-start">
                                                {codeSnippets.map((line, index) => (
                                                    <div
                                                        key={index}
                                                        className={`
                            min-h-5 flex items-start
                            ${index < currentCodeLine ? 'opacity-100' : 'opacity-0'}
                            ${index === currentCodeLine ? 'opacity-100' : ''}
                            transition-opacity duration-150 ease-in-out
                            ${line.includes("import") ? "text-purple-400 font-semibold" :
                                                                line.includes("const") || line.includes("new") ? "text-blue-400 font-semibold" :
                                                                    line.includes("React") || line.includes("Node.js") || line.includes("TypeScript") ? "text-cyan-400" :
                                                                        line.includes("FullStackDeveloper") ? "text-emerald-400 font-semibold" :
                                                                            line.includes("//") ? "text-muted-foreground italic" :
                                                                                line.includes("await") || line.includes("connect") ? "text-yellow-400" :
                                                                                    line.includes("'") ? "text-amber-400" :
                                                                                        "text-foreground"}
                          `}
                                                    >
                                                        {index < currentCodeLine ? line : ''}
                                                        {index === currentCodeLine ? (
                                                            <>
                                                                {displayedCode}
                                                                <MotionSpan
                                                                    animate={{ opacity: [1, 0, 1] }}
                                                                    transition={{ duration: 0.8, repeat: Infinity }}
                                                                    className="ml-1 text-primary inline-block"
                                                                >
                                                                    |
                                                                </MotionSpan>
                                                            </>
                                                        ) : ''}
                                                        {line === '' && '\u00A0'}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hover-3d inline-grid w-full justify-center">
                                        <figure className="relative w-full h-87.5 rounded-lg overflow-hidden border border-primary/10 bg-primary/5">
                                            <img
                                                src="/profile-logo.jpg"
                                                alt="Md Rakib Ali profile logo"
                                                className="w-full h-full object-contain bg-background/70 p-8"
                                                loading="eager"
                                                fetchPriority="high"
                                                decoding="async"
                                                width="350"
                                                height="350"
                                            />
                                        </figure>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                )}

                                <MotionDiv className="absolute -bottom-3 -right-3 w-14 h-14 bg-primary rounded-xl flex items-center justify-center border-2 border-background shadow-2xl" animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                                    <Code className="h-5 w-5 text-white" />
                                </MotionDiv>

                                <MotionDiv className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}>
                                    <Award className="h-4 w-4 text-amber-500" />
                                    <span className="text-sm font-semibold text-foreground">Solutions</span>
                                </MotionDiv>

                            </MotionDiv>
                        </div>
                    </MotionDiv>
                </MotionDiv>
            </div>

            <MotionDiv className="max-sm:hidden absolute bottom-8 transform -translate-x-1/5 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
                <MotionDiv className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
                    <MousePointerClick className="h-3 w-3" />
                    <span>Explore Technical Portfolio</span>
                </MotionDiv>
                <MotionDiv animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
                    <MotionDiv animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
                </MotionDiv>
            </MotionDiv>

        </section>
    );
};

export default Header;
