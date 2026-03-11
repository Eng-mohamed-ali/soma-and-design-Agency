import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  BadgeCent,
  MonitorSmartphone,
  Megaphone,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Briefcase,
  Users,
  Globe,
  Zap,
  Code,
  PenTool,
  TrendingUp,
  Shield
} from "lucide-react";

// Import from constants
import { SERVICES } from "../data/constants";

// Use SERVICES from constants or fallback with proper spans
const servicesData = SERVICES || [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.",
    icon: Code,
    features: ["React.js", "Node.js", "Responsive Design", "SEO Optimized"],
    slug: "web-development"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence through SEO, social media, and analytics.",
    icon: TrendingUp,
    features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    slug: "digital-marketing"
  },
  {
    id: 3,
    title: "Brand Design",
    description: "Creative branding that tells your unique story through logo design, brand strategy, and visual identity.",
    icon: Palette,
    features: ["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"],
    slug: "brand-design"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers through wireframing, prototyping, and testing.",
    icon: PenTool,
    features: ["Wireframing", "Prototyping", "User Testing", "Interaction Design"],
    slug: "ui-ux-design"
  },
  {
    id: 5,
    title: "AI Consulting",
    description: "Leverage AI to automate processes, integrate ChatGPT, and gain competitive advantage in your industry.",
    icon: Zap,
    features: ["AI Strategy", "ChatGPT Integration", "Automation", "Training"],
    slug: "ai-consulting"
  },
  {
    id: 6,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets and ensure compliance with regulations.",
    icon: Shield,
    features: ["Security Audit", "Penetration Testing", "Compliance", "Monitoring"],
    slug: "cybersecurity"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Service Card Component
function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] transition-all duration-300 h-full"
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-soma-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />

      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-xl bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center"
          >
            <Icon className="w-7 h-7 text-[color:var(--color-soma-cyan)]" />
          </motion.div>

          <span className="text-sm font-medium text-zinc-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[color:var(--color-soma-cyan)] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features?.map((feature, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-[color:var(--color-soma-cyan)] font-medium hover:gap-2 transition-all group/link"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </Link>

          <button
            onClick={() => window.location.href = `/contact?service=${service.slug}`}
            className="text-sm text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
          >
            Quick Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Stats Section
const StatsSection = () => (
  <motion.div
    variants={itemVariants}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
  >
    {[
      { value: "120+", label: "Projects Delivered", icon: Briefcase },
      { value: "98%", label: "Client Satisfaction", icon: Users },
      { value: "25+", label: "NGO Partners", icon: Globe },
      { value: "6+", label: "Years Experience", icon: Zap },
    ].map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="text-center p-6 bg-white dark:bg-[color:var(--color-soma-card)] rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
        >
          <div className="text-3xl font-bold text-[color:var(--color-soma-cyan)] mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-1">
            <Icon className="w-4 h-4" />
            <span>{stat.label}</span>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);

// CTA Section
const CTASection = () => (
  <motion.div
    variants={itemVariants}
    className="mt-20 text-center"
  >
    <div className="bg-gradient-to-r from-[color:var(--color-soma-cyan)]/10 to-transparent rounded-3xl p-12 border border-[color:var(--color-soma-cyan)]/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
        Ready to Start Your Project?
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
        Let's discuss how our services can help transform your organization's digital presence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-semibold hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
        >
          Schedule Consultation
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 dark:border-[color:var(--color-soma-border)] rounded-xl font-semibold hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)] transition-all"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[color:var(--color-soma-dark)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-[color:var(--color-soma-cyan)]/5 dark:bg-[color:var(--color-soma-cyan)]/10 blur-[120px]" />
        <div className="absolute right-[-4%] top-40 h-96 w-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="mb-14 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2"
          >
            <Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Premium Agency Services
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white">
            Built to look{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              exceptional.
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 bg-gradient-to-r from-[color:var(--color-soma-cyan)] to-blue-500 bg-clip-text text-transparent">
            Designed to win trust instantly.
          </h2>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-600 dark:text-white/60 leading-relaxed">
            Soma Design & Marketing delivers high-value creative and digital services
            with a premium visual standard for NGOs, institutions, and modern businesses
            across East Africa and beyond.
          </p>
        </motion.div>

        {/* Services Grid - Fixed to 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id || service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  );
}