import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../../data/constants';
import * as Icons from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/**
 * Premium SaaS Navigation Bar
 * Features: Sticky header with blur, mobile-responsive menu, active states,
 * micro-interactions, and conversion-focused design
 */
const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEsc);
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${scrolled 
            ? 'py-3 md:py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-[color:var(--color-soma-border)] shadow-lg' 
            : 'py-4 md:py-6 bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Premium Logo with Tagline */}
            <Link 
              to="/" 
              className="relative group"
              aria-label="SOMA - Home"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  {/* Logo Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10">
                    <Icons.Sparkles className="h-5 w-5 text-[color:var(--color-soma-cyan)]" />
                  </div>
                  
                  <div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight">
                      <span className="text-zinc-900 dark:text-white">SOMA</span>
                      <span className="text-[color:var(--color-soma-cyan)]">.</span>
                    </span>
                    {/* Tagline - visible on larger screens */}
                    <span className="hidden lg:inline-block ml-3 text-sm text-zinc-500 font-normal border-l pl-3 border-zinc-300 dark:border-zinc-700">
                      Design & Marketing
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Clean Border Bottom Only */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1">
                {NAVIGATION.map((item) => {
                  const Icon = Icons[item.icon] || Icons.HelpCircle;
                  const isActive = location.pathname === item.path;
                  const isHovered = hoveredItem === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="relative px-4 py-2.5 block"
                      onMouseEnter={() => setHoveredItem(item.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className={`
                        flex items-center gap-2 text-sm font-medium transition-colors duration-200
                        ${isActive 
                          ? 'text-[color:var(--color-soma-cyan)]' 
                          : isHovered
                            ? 'text-zinc-900 dark:text-white'
                            : 'text-zinc-600 dark:text-zinc-400'
                        }
                      `}>
                        <Icon className={`
                          w-4 h-4 transition-all duration-200
                          ${isActive ? 'opacity-100' : 'opacity-70'}
                          ${isHovered ? 'scale-110' : ''}
                        `} />
                        
                        <span>{item.name}</span>
                      </div>
                      
                      {/* Active state permanent border */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-4 right-4 h-[2px] bg-[color:var(--color-soma-cyan)] rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 35 
                          }}
                        />
                      )}
                      
                      {/* Hover state temporary border */}
                      {!isActive && isHovered && (
                        <motion.div
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
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Desktop WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block"
              >
                <Link
                  to="/contact"
                  className="group relative px-5 py-2.5 border rounded-xl font-medium transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-soma-cyan) 10%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--color-soma-cyan) 30%, transparent)',
                    color: 'var(--color-soma-cyan)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-soma-cyan) 20%, transparent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-soma-cyan) 10%, transparent)';
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    <Icons.MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  
                  {/* Subtle glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-soma-cyan) 5%, transparent)'
                    }}
                  />
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-zinc-300 dark:border-[color:var(--color-soma-border)] flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="absolute w-5 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                    style={{ top: 2 }}
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-5 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                    style={{ top: 8 }}
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="absolute w-5 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                    style={{ bottom: 2 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-[color:var(--color-soma-card)] border-l border-zinc-200 dark:border-[color:var(--color-soma-border)] shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-[color:var(--color-soma-border)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-soma-cyan)]/20 bg-[color:var(--color-soma-cyan)]/10">
                      <Icons.Sparkles className="h-5 w-5 text-[color:var(--color-soma-cyan)]" />
                    </div>
                    <div>
                      <span className="text-xl font-bold">
                        <span className="text-zinc-900 dark:text-white">SOMA</span>
                        <span className="text-[color:var(--color-soma-cyan)]">.</span>
                      </span>
                      <p className="text-xs text-zinc-500 mt-0.5">Design & Marketing</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-zinc-300 dark:border-[color:var(--color-soma-border)] flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <Icons.X className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-2">
                    {NAVIGATION.map((item, index) => {
                      const Icon = Icons[item.icon] || Icons.HelpCircle;
                      const isActive = location.pathname === item.path;
                      
                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            className={`
                              flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-200
                              ${isActive 
                                ? 'text-[color:var(--color-soma-cyan)] bg-[color:var(--color-soma-cyan)]/5' 
                                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                              }
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className={`
                              w-5 h-5
                              ${isActive ? 'text-[color:var(--color-soma-cyan)]' : 'text-zinc-400'}
                            `} />
                            <span className="font-medium flex-1">
                              {item.name}
                            </span>
                            {isActive && (
                              <Icons.ChevronRight className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)] space-y-4">
                  {/* Theme Toggle - Mobile */}
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>

                  {/* WhatsApp CTA - Mobile */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-3 w-full py-3.5 px-4 border rounded-xl font-medium transition-all"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-soma-cyan) 10%, transparent)',
                        borderColor: 'color-mix(in srgb, var(--color-soma-cyan) 30%, transparent)',
                        color: 'var(--color-soma-cyan)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-soma-cyan) 20%, transparent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-soma-cyan) 10%, transparent)';
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icons.MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </Link>
                  </motion.div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-6 pt-2">
                    {['Github', 'Twitter', 'Linkedin'].map((social) => {
                      const Icon = Icons[social];
                      return (
                        <motion.a
                          key={social}
                          whileHover={{ y: -2 }}
                          href="#"
                          className="text-zinc-400 hover:text-[color:var(--color-soma-cyan)] transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;