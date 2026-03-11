import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Globe,
  ArrowRight,
  Filter,
  X,
  Eye,
  Calendar,
  Users,
  Briefcase,
  Award,
  Sparkles
} from "lucide-react";

// Import from constants
import { PORTFOLIO_ITEMS } from "../data/constants";

// Fallback portfolio data
const portfolioData = PORTFOLIO_ITEMS || [
  {
    id: 1,
    title: "UNDP Somalia Digital Transformation",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "UNDP Somalia",
    year: "2024",
    description: "Complete digital transformation including website, dashboard, and reporting system.",
    tags: ["React", "Node.js", "MongoDB"],
    results: ["40% faster reporting", "10k+ monthly users"],
    link: "/portfolio/undp",
    featured: true
  },
  {
    id: 2,
    title: "Ministry of Education Learning Portal",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "Ministry of Education",
    year: "2024",
    description: "E-learning platform for 50,000+ students across Somalia.",
    tags: ["UI/UX", "Figma", "React"],
    results: ["99.9% uptime", "50k+ students"],
    link: "/portfolio/education",
    featured: true
  },
  {
    id: 3,
    title: "WHO Health Information System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "WHO Somalia",
    year: "2023",
    description: "Real-time health data collection and visualization platform.",
    tags: ["Vue.js", "D3.js", "Firebase"],
    results: ["Real-time tracking", "200+ health facilities"],
    link: "/portfolio/who"
  },
  {
    id: 4,
    title: "Soma Brand Identity System",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "Soma Design",
    year: "2024",
    description: "Complete brand identity including logo, guidelines, and marketing materials.",
    tags: ["Branding", "Print", "Digital"],
    results: ["300% brand recognition", "Design award 2024"],
    link: "/portfolio/brand"
  },
  {
    id: 5,
    title: "UNICEF Child Protection App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "UNICEF Somalia",
    year: "2023",
    description: "Mobile application for child protection case management.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    results: ["5000+ cases tracked", "24/7 accessibility"],
    link: "/portfolio/unicef"
  },
  {
    id: 6,
    title: "East Africa Trade Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    client: "East African Community",
    year: "2023",
    description: "Regional trade information and resource portal.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    results: ["1000+ businesses", "5 countries"],
    link: "/portfolio/trade"
  }
];

// Categories for filtering
const categories = ["All", "Web Development", "UI/UX Design", "Brand Design", "Mobile App"];

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

// Portfolio Card Component
const PortfolioCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] transition-all duration-300"
    >
      {/* Image Container */}
      <Link to={item.link} className="block relative overflow-hidden aspect-video">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        )}
        
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            className="bg-[color:var(--color-soma-cyan)] text-black p-3 rounded-full"
          >
            <Eye className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white dark:bg-[color:var(--color-soma-card)] text-[color:var(--color-soma-cyan)] rounded-full border border-[color:var(--color-soma-cyan)]/20">
            {item.category}
          </span>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-[color:var(--color-soma-cyan)] text-black rounded-full flex items-center gap-1">
              <Award className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Client & Year */}
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {item.client}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-[color:var(--color-soma-cyan)] transition-colors">
          <Link to={item.link}>{item.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-2 mb-4">
          {item.results?.map((result, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-soma-cyan)]" />
              <span className="text-zinc-600 dark:text-zinc-400">{result}</span>
            </div>
          ))}
        </div>

        {/* View Project Link */}
        <Link
          to={item.link}
          className="inline-flex items-center gap-2 text-[color:var(--color-soma-cyan)] font-medium hover:gap-3 transition-all group"
        >
          View Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

// Stats Section
const StatsSection = () => (
  <motion.div
    variants={itemVariants}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8 rounded-2xl bg-zinc-50 dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
  >
    {[
      { value: "50+", label: "Projects Delivered", icon: Briefcase },
      { value: "25+", label: "Happy Clients", icon: Users },
      { value: "15+", label: "NGO Partners", icon: Globe },
      { value: "6+", label: "Years Experience", icon: Award },
    ].map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="text-center"
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

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects by category
  const filteredProjects = portfolioData.filter(item => 
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  // Featured projects
  const featuredProjects = portfolioData.filter(item => item.featured);

  return (
    <section className="py-24 bg-white dark:bg-[color:var(--color-soma-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Our Work
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
            Featured{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Projects
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Selected work from branding, web platforms, and digital
            campaigns delivered to organizations across East Africa.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-[color:var(--color-soma-cyan)]" />
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden w-full flex items-center justify-between p-4 bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-xl mb-4"
          >
            <span className="font-medium">Filter by Category</span>
            <Filter className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Filter Options */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`
                    px-6 py-3 rounded-xl font-medium transition-all
                    ${selectedCategory === category
                      ? 'bg-[color:var(--color-soma-cyan)] text-black'
                      : 'bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] text-zinc-600 dark:text-zinc-400 hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)]'
                    }
                  `}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-400">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-[color:var(--color-soma-cyan)] hover:underline"
            >
              View all projects
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[color:var(--color-soma-cyan)]/10 to-transparent rounded-3xl p-12 border border-[color:var(--color-soma-cyan)]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
              Let's create something exceptional together. We're here to bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-semibold hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}