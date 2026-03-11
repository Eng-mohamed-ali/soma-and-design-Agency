import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  COMPANY_INFO, 
  SOCIAL_LINKS, 
  NAVIGATION,
  QUICK_LINKS 
} from '../../data/constants';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Professional footer with contact information and quick links
 * Designed for institutional credibility and conversion
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Handle newsletter submission - UPDATED to show better message
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! You will receive updates at ' + email);
    e.target.reset();
  };

  return (
    <footer className="bg-white dark:bg-[color:var(--color-soma-card)] border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Company Info - Large Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10">
                <Sparkles className="h-6 w-6 text-[color:var(--color-soma-cyan)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  <span className="text-black dark:text-white">SOMA</span>
                  <span className="text-[color:var(--color-soma-cyan)]">.</span>
                </h3>
                <p className="text-xs text-zinc-500">Design & Marketing</p>
              </div>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md leading-relaxed">
              {COMPANY_INFO.description || "Empowering businesses with cutting-edge design and marketing solutions across East Africa."}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-white transition-colors ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-black dark:text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-[color:var(--color-soma-cyan)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-black dark:text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Digital Marketing', 'Brand Design', 'UI/UX Design', 'SEO Optimization'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-[color:var(--color-soma-cyan)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h4 className="text-black dark:text-white font-semibold mb-6 text-lg">Contact Us</h4>
            
            {/* Contact Info - UPDATED with new phone number and WhatsApp */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm group">
                <MapPin className="w-5 h-5 text-[color:var(--color-soma-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.address || "Mogadishu · Nairobi · Berlin"}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm group">
                <Mail className="w-5 h-5 text-[color:var(--color-soma-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-[color:var(--color-soma-cyan)] transition-colors"
                >
                  {COMPANY_INFO.email || "info@soma.design"}
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm group">
                <Phone className="w-5 h-5 text-[color:var(--color-soma-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-[color:var(--color-soma-cyan)] transition-colors"
                >
                  {COMPANY_INFO.phone || "+358 45 174290"}
                </a>
              </li>
              {/* Added WhatsApp contact option */}
              <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm group">
                <MessageCircle className="w-5 h-5 text-[color:var(--color-soma-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-soma-cyan)] transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.whatsappDisplay || "+358 45 174290"}
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-6 border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
              <h5 className="text-black dark:text-white font-medium mb-3 flex items-center gap-2">
                <Send className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                Subscribe to Newsletter
              </h5>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-4">
                Get the latest updates on design trends and marketing strategies.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-[color:var(--color-soma-border)] text-black dark:text-white text-sm focus:outline-none focus:border-[color:var(--color-soma-cyan)] transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-medium text-sm hover:bg-[color:var(--color-soma-cyan)]/80 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-zinc-500 dark:text-zinc-500 text-sm text-center md:text-left">
              © {currentYear} Soma Design & Marketing. All rights reserved.
              <span className="mx-2">|</span>
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> in East Africa
              </span>
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-xs text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-xs text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <p className="mt-4 text-center text-xs text-zinc-500">
            Trusted by government institutions and NGOs across East Africa.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;