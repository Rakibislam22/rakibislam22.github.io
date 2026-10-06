import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ExternalLink, X, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";

const MotionAside = motion.aside;
const MotionButton = motion.button;

export default function OSPortfolioPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("os_portfolio_popup_dismissed") === "true";
  });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isDismissed || hasTriggered) return;

    const checkScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0 && scrollTop / scrollHeight >= 0.5) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Check once in case the page loaded partway down
    checkScrollProgress();

    window.addEventListener("scroll", checkScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", checkScrollProgress);
  }, [hasTriggered, isDismissed]);

  // Also support Lenis smooth scroll updates
  useLenis((lenis) => {
    if (hasTriggered || isDismissed) return;
    const progress =
      typeof lenis.progress === "number"
        ? lenis.progress
        : lenis.limit > 0
        ? lenis.scroll / lenis.limit
        : 0;

    if (progress >= 0.5) {
      setIsOpen(true);
      setHasTriggered(true);
    }
  });

  const handleDismiss = () => {
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem("os_portfolio_popup_dismissed", "true");
  };

  const handleReopen = () => {
    setIsOpen(true);
    setIsDismissed(false);
    sessionStorage.removeItem("os_portfolio_popup_dismissed");
  };

  return (
    <>
      {/* Floating Card Popup at Bottom-Right */}
      <AnimatePresence>
        {isOpen && (
          <MotionAside
            key="os-portfolio-popup"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[350px] max-w-full"
            role="dialog"
            aria-label="Secondary OS Portfolio invitation"
          >
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-white/95 dark:bg-[#100f1c]/95 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_10px_35px_rgba(138,43,226,0.2)] dark:shadow-[0_10px_35px_rgba(160,32,240,0.25)] transition-all">
              {/* Subtle top gradient glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

              {/* Header with pill and close button */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-primary border border-purple-500/20">
                  <Sparkles className="w-2.5 h-2.5 text-primary animate-pulse" />
                  Interactive OS
                </span>

                <button
                  type="button"
                  onClick={handleDismiss}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
                  aria-label="Close popup"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Main Content */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white leading-tight truncate">
                    Explore OS Portfolio
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 mt-0.5 leading-snug line-clamp-2">
                    Simulated macOS, Windows & Ubuntu environment.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-1.5">
                <div className="aura text-primary w-full">
                  <a
                    href="https://dev.mdrakibali.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-1.5 sm:py-2 px-3 rounded-xl bg-primary/90 hover:bg-primary text-white font-medium text-xs sm:text-sm transition shadow-sm shadow-purple-500/20 active:scale-[0.98]"
                  >
                    <span>Launch OS Portfolio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="text-[11px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition hover:underline cursor-pointer py-0.5"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </MotionAside>
        )}
      </AnimatePresence>

      {/* Minimized Quick-Access Button when dismissed */}
      <AnimatePresence>
        {!isOpen && hasTriggered && (
          <MotionButton
            key="os-portfolio-reopen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReopen}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-purple-500/30 bg-white/90 dark:bg-[#100f1c]/90 backdrop-blur-xl shadow-[0_6px_25px_rgba(138,43,226,0.25)] text-primary hover:border-primary/50 transition cursor-pointer"
            aria-label="Open Secondary OS Portfolio popup"
            title="Explore OS Portfolio"
          >
            <div className="relative">
              <Monitor className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
              OS Portfolio
            </span>
          </MotionButton>
        )}
      </AnimatePresence>
    </>
  );
}
