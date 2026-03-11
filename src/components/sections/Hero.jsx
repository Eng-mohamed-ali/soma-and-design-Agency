import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  MessageCircle,
  ChevronRight,
  Award,
  Users,
  Globe,
  Zap
} from "lucide-react";

// Import from constants
import { COMPANY_INFO } from "../../data/constants";

const splitWords = (text) =>
  text.split(" ").map((word, index) => (
    <motion.span
      key={`${word}-${index}`}
      variants={wordVariants}
      className="mr-3 inline-block"
    >
      {word}
    </motion.span>
  ));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const statItems = [
  { label: "Projects Delivered", value: "120+", icon: Award },
  { label: "Institutional Partners", value: "25+", icon: Users },
  { label: "Success Rate", value: "98%", icon: Zap },
];

const serviceCards = [
  {
    title: "Government-ready design systems",
    desc: "Interfaces built for clarity, multilingual audiences, and public trust.",
    icon: ShieldCheck,
  },
  {
    title: "NGO campaign and donor visibility",
    desc: "Digital storytelling and reporting experiences that strengthen impact.",
    icon: Globe,
  },
  {
    title: "AI and modern web transformation",
    desc: "Practical product design for institutions entering the AI era.",
    icon: Sparkles,
  },
];

function PrimaryButton({ children, href = "#", className = "" }) {
  return (
    <Link
      to={href}
      className={[
        "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold",
        "bg-[color:var(--color-soma-cyan)] text-black transition-all duration-300",
        "shadow-[0_0_28px_color-mix(in_srgb,_var(--color-soma-cyan)_18%,_transparent)]",
        "hover:scale-[1.02] hover:bg-[color:var(--color-soma-cyan)]/80 hover:shadow-[0_0_40px_color-mix(in_srgb,_var(--color-soma-cyan)_25%,_transparent)]",
        "active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, href = "#", className = "" }) {
  return (
    <Link
      to={href}
      className={[
        "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold",
        "border border-zinc-200 dark:border-[color:var(--color-soma-border)]",
        "bg-white dark:bg-white/5 text-zinc-800 dark:text-white",
        "transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-white/10",
        "hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)]",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[color:var(--color-soma-dark)] text-zinc-900 dark:text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[color:var(--color-soma-cyan)]/10 dark:bg-[color:var(--color-soma-cyan)]/15 blur-[120px]" />
        <div className="absolute right-[-4%] top-32 h-96 w-96 rounded-full bg-emerald-400/10 dark:bg-emerald-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-200/50 dark:bg-white/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(0,0,0,0.02), transparent_35%)] dark:bg-[radial-gradient(circle_at_top, rgba(255,255,255,0.03), transparent_35%)]" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-[min(94%,1280px)] items-center gap-14 px-4 pb-16 pt-32 md:grid-cols-2 md:px-6 lg:gap-20">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Trust Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 backdrop-blur-sm"
          >
            <BadgeCheck className="h-4 w-4 text-[color:var(--color-soma-cyan)]" />
            Institutional-Tech Digital Partner for Somalia & East Africa
          </motion.div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            <span className="block text-zinc-900 dark:text-white">
              {splitWords("Crafting digital excellence")}
            </span>
            <span className="mt-2 block bg-gradient-to-r from-[color:var(--color-soma-cyan)] via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              {splitWords("for government and NGOs")}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg"
          >
            Soma Design & Marketing builds premium digital experiences that feel
            modern, trustworthy, and mission-aligned—helping institutions,
            public programs, and NGOs communicate with clarity and authority.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <PrimaryButton href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </PrimaryButton>

            <SecondaryButton href="/services">
              Explore Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </SecondaryButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[color:var(--color-soma-cyan)]" />
              Trusted by mission-driven teams
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--color-soma-cyan)]" />
              Premium UX for public-facing brands
            </div>
          </motion.div>

          {/* Stats Row (Mobile) */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-3 gap-4 md:hidden"
          >
            {statItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center">
                  <div className="text-xl font-bold text-[color:var(--color-soma-cyan)]">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 flex items-center justify-center gap-1">
                    <Icon className="w-3 h-3" />
                    {item.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column - Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-soma-cyan)]/10 via-transparent to-emerald-400/10 blur-2xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent p-4 shadow-[0_20px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-[color:var(--color-soma-card)] p-5">
              
              {/* Card Header */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    Institutional Overview
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                    Digital credibility dashboard
                  </h3>
                </div>
                <div className="rounded-xl border border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10 px-3 py-2 text-xs font-semibold text-[color:var(--color-soma-cyan)]">
                  <span className="flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-soma-cyan)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-soma-cyan)]"></span>
                    </span>
                    Live
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid gap-4 sm:grid-cols-3">
                {statItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-zinc-50 dark:bg-white/5 p-4"
                    >
                      <Icon className="h-5 w-5 text-[color:var(--color-soma-cyan)] mb-2" />
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {item.value}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Service Cards */}
              <div className="mt-5 grid gap-4">
                {serviceCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      whileHover={{ y: -4, x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-gradient-to-br from-white to-zinc-50 dark:from-white/5 dark:to-transparent p-5 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-[color:var(--color-soma-cyan)] transition-colors">
                            {card.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            {card.desc}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 p-3 text-[color:var(--color-soma-cyan)] flex-shrink-0"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-gradient-to-r from-emerald-500/5 to-transparent px-4 py-3">
                <div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white">
                    Need a faster conversation?
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Reach Soma instantly through WhatsApp.
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[color:var(--color-soma-cyan)]/10 blur-2xl" />
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}