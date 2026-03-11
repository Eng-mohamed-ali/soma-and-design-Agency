import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Briefcase,
  GraduationCap,
  PhoneCall,
  Home,
  User,
  FolderKanban,
  MessageCircle,
  ChevronRight
} from "lucide-react";

// Constants - UPDATED with new WhatsApp number
const WHATSAPP_NUMBER = "35845174290"; // Removed + for URL
const WHATSAPP_DISPLAY = "+358 45 174290"; // For display
const WHATSAPP_MESSAGE = "Hello SOMA! I would like to know more about your services.";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Portfolio", path: "/portfolio", icon: FolderKanban },
  { name: "Academy", path: "/courses", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: PhoneCall }
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const drawerVariants = {
  hidden: { x: "100%", opacity: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 28 }
  },
  exit: {
    x: "100%",
    opacity: 0.8,
    transition: { duration: 0.22, ease: "easeInOut" }
  }
};

const drawerListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: "easeOut" }
  }
};

// Theme Toggle Component
function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    window.dispatchEvent(new Event("themeChange"));
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

// Navigation Link with Glow Effect
function NavGlowLink({ item }) {
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });
  const location = useLocation();
  const Icon = item.icon;
  const isActive = location.pathname === item.path;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        [
          "group relative px-4 py-2.5 text-sm font-medium transition-colors block outline-none",
          isActive
            ? "text-[color:var(--color-soma-cyan)]"
            : "text-zinc-700 dark:text-white/70 hover:text-black dark:hover:text-white"
        ].join(" ")
      }
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlow({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          visible: true
        });
      }}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, visible: false }))}
    >
      {({ isActive }) => (
        <>
          <span
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-lg"
            style={{
              background: glow.visible
                ? `radial-gradient(120px circle at ${glow.x}px ${glow.y}px, color-mix(in srgb, var(--color-soma-cyan) 16%, transparent), transparent 55%)`
                : "none"
            }}
          />

          <span className="relative z-10 flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Icon
                className={`
                  h-4 w-4 transition-all duration-200
                  ${isActive ? "text-[color:var(--color-soma-cyan)]" : ""}
                `}
              />
            </motion.span>
            <span>{item.name}</span>
          </span>

          {isActive && (
            <motion.span
              layoutId="activeNavBorder"
              className="absolute bottom-0 left-4 right-4 h-[2px] bg-[color:var(--color-soma-cyan)] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35
              }}
            />
          )}

          {!isActive && glow.visible && (
            <motion.span
              className="absolute bottom-0 left-4 right-4 h-[2px] bg-[color:var(--color-soma-cyan-50)] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 40
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}

// Main Header Component
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const logo = useMemo(
    () => (
      <Link
        to="/"
        className="flex items-center gap-3 group outline-none"
        aria-label="SOMA Home"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10 shadow-[0_0_30px_color-mix(in_srgb,_var(--color-soma-cyan)_14%,_transparent)] group-hover:shadow-[0_0_40px_color-mix(in_srgb,_var(--color-soma-cyan)_20%,_transparent)] transition-shadow">
          <Sparkles className="h-5 w-5 text-[color:var(--color-soma-cyan)] group-hover:scale-110 transition-transform" />
        </div>

        <div className="leading-tight text-left">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-black dark:text-white">
            Soma
          </div>
          <div className="text-xs text-zinc-500 dark:text-white/50">
            Design & Marketing
          </div>
        </div>
      </Link>
    ),
    []
  );

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "mt-4 flex items-center justify-between rounded-2xl border px-4 py-3 md:px-6",
              "backdrop-blur-md transition-all duration-300",
              scrolled
                ? "border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white/80 dark:bg-black/55 shadow-[0_12px_50px_rgba(0,0,0,0.25)]"
                : "border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white/60 dark:bg-black/35"
            ].join(" ")}
          >
            {logo}

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden items-center gap-2 lg:flex"
            >
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavGlowLink item={item} />
                </motion.div>
              ))}
            </motion.nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* UPDATED WhatsApp button with new number */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-soma-cyan)] px-5 h-10 text-sm font-semibold text-black hover:bg-[color:var(--color-soma-cyan)]/80 transition-all whitespace-nowrap"
                title={`Chat with us on WhatsApp: ${WHATSAPP_DISPLAY}`}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 text-black dark:text-white"
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] h-screen w-[85%] max-w-[320px] border-l border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-[color:var(--color-soma-card)] p-6 backdrop-blur-2xl lg:hidden overflow-y-auto"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mb-10 flex items-center justify-between">
                {logo}
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 text-black dark:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                variants={drawerListVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3"
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <motion.div key={item.path} variants={drawerItemVariants}>
                      <NavLink
                        to={item.path}
                        onClick={() => {
                          setOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className={({ isActive }) =>
                          [
                            "flex items-center gap-3 rounded-xl border px-4 py-4 text-base font-medium transition-all group pointer-events-auto",
                            isActive
                              ? "border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10 text-[color:var(--color-soma-cyan)]"
                              : "border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 text-zinc-700 dark:text-white/80"
                          ].join(" ")
                        }
                      >
                        <Icon className={`h-5 w-5 ${isActive ? "text-[color:var(--color-soma-cyan)]" : ""}`} />
                        <span className="flex-1">{item.name}</span>
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* UPDATED Mobile WhatsApp button with new number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[color:var(--color-soma-cyan)] px-5 py-3.5 text-sm font-semibold text-black"
                  title={`Chat with us on WhatsApp: ${WHATSAPP_DISPLAY}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact on WhatsApp</span>
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}