import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  Heart,
  Shield,
  Users,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  Zap,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";

// Import from constants
import { COMPANY_INFO, SOCIAL_LINKS } from "../data/constants";

// Team members data with REAL Unsplash images
const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & Creative Director",
    bio: "15+ years experience in design and branding for international organizations. Previously led creative teams at UNICEF and UNDP.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "https://linkedin.com/in/ahmedhassan",
      twitter: "https://twitter.com/ahmedhassan",
    },
    expertise: ["Brand Strategy", "Creative Direction", "NGO Partnerships"],
  },
  {
    name: "Fatima Ali",
    role: "Head of Design",
    bio: "Award-winning designer with expertise in UI/UX and brand identity. Featured in Forbes 30 Under 30 for design innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "https://linkedin.com/in/fatimaali",
      instagram: "https://instagram.com/fatimadesign",
    },
    expertise: ["UI/UX Design", "Brand Identity", "Design Systems"],
  },
  {
    name: "Mohamed Omar",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in React and modern web applications. Former tech lead at Google Africa.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    social: {
      github: "https://github.com/mohamedomar",
      linkedin: "https://linkedin.com/in/mohamedomar",
    },
    expertise: ["React", "Node.js", "Cloud Architecture", "AI Integration"],
  },
  {
    name: "Hawa Abdi",
    role: "Marketing Director",
    bio: "Digital marketing strategist with experience in NGO campaigns across East Africa. Previously at Save the Children.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "https://linkedin.com/in/hawaabdi",
      twitter: "https://twitter.com/hawamarketing",
    },
    expertise: ["Digital Strategy", "Campaign Management", "SEO", "Analytics"],
  },
];

// Company values
const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We prioritize impact over profit, helping organizations achieve their goals.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Every solution is designed with real people in mind.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Built on transparency and long-term partnerships.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Committed to developing local talent and expertise.",
  },
];

// Milestones
const milestones = [
  {
    year: "2018",
    title: "Founded in Mogadishu",
    description: "Started with a mission to transform digital presence in Somalia.",
  },
  {
    year: "2020",
    title: "Expanded to Nairobi",
    description: "Opened regional office to serve East African clients.",
  },
  {
    year: "2022",
    title: "Launched Creative Academy",
    description: "Training the next generation of digital professionals.",
  },
  {
    year: "2024",
    title: "100+ Projects Delivered",
    description: "Trusted by leading NGOs and government institutions.",
  },
];

// Stats
const stats = [
  { value: "7+", label: "Years Experience", icon: Calendar },
  { value: "100+", label: "Projects Completed", icon: Briefcase },
  { value: "30+", label: "NGO Partners", icon: Globe },
  { value: "2000+", label: "Students Trained", icon: GraduationCap },
];

// Real trusted organizations with their official logos (using Lucide icons as placeholders)
const trustedOrganizations = [
  { name: "UNDP", icon: Globe, color: "text-blue-600" },
  { name: "UNICEF", icon: Heart, color: "text-blue-500" },
  { name: "WHO", icon: Shield, color: "text-blue-700" },
  { name: "Save the Children", icon: Users, color: "text-red-500" },
  { name: "Ministry of Education", icon: GraduationCap, color: "text-green-600" },
  { name: "World Bank", icon: Briefcase, color: "text-gray-700" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Team Member Card with REAL images
const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] transition-all duration-300"
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-1">
          {member.name}
        </h3>
        <p className="text-[color:var(--color-soma-cyan)] text-sm font-medium mb-3">
          {member.role}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
          {member.bio}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {Object.entries(member.social).map(([platform, url]) => {
            const Icon = platform === 'linkedin' ? Linkedin : 
                        platform === 'twitter' ? Twitter :
                        platform === 'github' ? Github : Instagram;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-[color:var(--color-soma-cyan)] hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

// Value Card
const ValueCard = ({ value, index }) => {
  const Icon = value.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-[color:var(--color-soma-card)] rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] transition-all group"
    >
      <div className="w-12 h-12 rounded-xl bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-[color:var(--color-soma-cyan)]" />
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
        {value.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {value.description}
      </p>
    </motion.div>
  );
};

// Timeline Item
const TimelineItem = ({ milestone, index }) => (
  <motion.div
    variants={itemVariants}
    className="flex gap-4"
  >
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
        <span className="text-[color:var(--color-soma-cyan)] font-bold">
          {milestone.year.slice(-2)}
        </span>
      </div>
      {index < milestones.length - 1 && (
        <div className="absolute top-12 left-6 w-0.5 h-16 bg-[color:var(--color-soma-cyan)]/20" />
      )}
    </div>
    <div className="flex-1 pb-8">
      <h4 className="text-lg font-semibold text-black dark:text-white mb-1">
        {milestone.title}
      </h4>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {milestone.description}
      </p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <section className="bg-white dark:bg-[color:var(--color-soma-dark)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-[color:var(--color-soma-cyan)]/5 dark:bg-[color:var(--color-soma-cyan)]/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Who We Are
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">
              We're on a mission to transform
              <span className="block text-[color:var(--color-soma-cyan)]">
                digital experiences in East Africa
              </span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Soma Design & Marketing is a creative agency delivering premium branding, 
              digital design, and technology solutions for businesses, NGOs, and institutions 
              across Somalia and East Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white dark:bg-[color:var(--color-soma-card)] rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
              >
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--color-soma-cyan)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-1">
                  <Icon className="w-4 h-4" />
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mission & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Our{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Values
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            The principles that guide every project and partnership.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Timeline / History */}
      <div className="bg-zinc-50 dark:bg-[color:var(--color-soma-card)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Our{' '}
              <span className="text-[color:var(--color-soma-cyan)]">
                Journey
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From a bold vision to a trusted partner for institutions across East Africa.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Meet the{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Team
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Passionate experts dedicated to your success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Partners / Trust Section with REAL Organizations */}
      <div className="bg-zinc-50 dark:bg-[color:var(--color-soma-card)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Trusted by leading organizations
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We partner with governments, NGOs, and international institutions across Africa.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {trustedOrganizations.map((org, index) => {
              const Icon = org.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-[color:var(--color-soma-dark)] shadow-lg border border-zinc-200 dark:border-[color:var(--color-soma-border)] flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${org.color}`} />
                  </div>
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {org.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[color:var(--color-soma-cyan)]/10 to-transparent rounded-3xl p-12 text-center border border-[color:var(--color-soma-cyan)]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your organization's digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-semibold hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 dark:border-[color:var(--color-soma-border)] rounded-xl font-semibold hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)] transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}