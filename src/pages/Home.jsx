import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  ArrowRight,
  Star,
  Briefcase,
  Award,
  Sparkles,
  ChevronRight,
  Zap,
  Target,
  Heart,
  Clock,
  Rocket,
  CheckCircle,
  Play,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  X,
  Crown,
  Medal,
  Trophy,
  BadgeCheck,
  Gem,
  Diamond
} from 'lucide-react';

// Import existing components
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

// Lazy load sections
const Hero = lazy(() => import('../components/sections/Hero'));
const ServicesGrid = lazy(() => import('../components/sections/ServicesGrid'));
const AcademyBento = lazy(() => import('../components/sections/AcademyBento'));

// Import constants
import { 
  COMPANY_INFO, 
  STATS, 
  TESTIMONIALS,
  FEATURES,
  TRUST_BADGES,
  COURSES
} from '../data/constants';

// Loading component - Premium
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="relative">
      {/* Outer ring */}
      <div className="w-20 h-20 border-4 border-[#00E5FF]/20 rounded-full"></div>
      {/* Spinning ring */}
      <div className="absolute top-0 left-0 w-20 h-20 border-4 border-[#00E5FF] border-t-transparent rounded-full animate-spin"></div>
      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-[#00E5FF] rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Parallax Section Component
const ParallaxSection = ({ children, speed = 0.5 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 200]);
  
  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};

// Floating Action Button - Premium
const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-[#00E5FF] text-black flex items-center justify-center shadow-2xl hover:shadow-[#00E5FF]/30 hover:shadow-2xl transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Quick Chat */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(!showChat)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00E5FF] to-blue-500 text-black flex items-center justify-center shadow-2xl hover:shadow-2xl transition-all"
        aria-label="Quick chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-[#0b0b0b] rounded-2xl shadow-2xl border border-[#00E5FF]/20 p-6"
          >
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Quick Question?</h4>
                <p className="text-xs text-zinc-500">We reply within minutes</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Premium Testimonial Card
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-[#0b0b0b] rounded-2xl p-8 border border-zinc-200 dark:border-[#1f1f1f] shadow-xl hover:shadow-2xl transition-all"
    >
      {/* Quote icon */}
      <div className="text-6xl font-serif text-[#00E5FF]/20 leading-none mb-2">"</div>
      
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-lg leading-relaxed">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00E5FF] to-blue-500 p-[2px]">
          <div className="w-full h-full rounded-full bg-white dark:bg-[#0b0b0b] flex items-center justify-center">
            <Users className="w-6 h-6 text-[#00E5FF]" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
          <p className="text-sm text-zinc-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Live Counter Component - Premium
const Counter = ({ value, label, icon: Icon, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center group">
      <div className="relative inline-block">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-[#00E5FF]" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-2">{count}+</div>
      <div className="text-base text-zinc-600 dark:text-zinc-400">{label}</div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const stats = STATS || [
    { label: 'Years Experience', value: '7', icon: Award },
    { label: 'Projects Completed', value: '150', icon: Briefcase },
    { label: 'NGO Partners', value: '35', icon: Users },
    { label: 'Success Rate', value: '99', icon: TrendingUp },
  ];

  const testimonials = TESTIMONIALS?.slice(0, 3) || [
    {
      quote: "Soma Design transformed our digital presence. Their understanding of the NGO sector is unmatched.",
      author: "Sarah Johnson",
      role: "Program Director, UNDP Somalia",
      rating: 5
    },
    {
      quote: "The AI training in Af-Somali was exceptional. Our team now leverages AI effectively.",
      author: "Mohamed Ali",
      role: "Chief of Staff, Ministry of Education",
      rating: 5
    },
    {
      quote: "Their design work is world-class. They truly understood our brand vision.",
      author: "Fatima Ahmed",
      role: "CEO, Somali Tech Hub",
      rating: 5
    }
  ];

  const features = FEATURES || [
    { icon: Rocket, title: "Lightning Fast", description: "Projects delivered 2x faster than industry average" },
    { icon: Shield, title: "Bank-Level Security", description: "ISO 27001 certified, enterprise-grade protection" },
    { icon: Crown, title: "Premium Quality", description: "Award-winning design for institutional clients" },
    { icon: Clock, title: "24/7 Priority Support", description: "Dedicated account managers for NGOs" }
  ];

  const trustBadges = TRUST_BADGES || [
    { icon: Gem, name: "UNDP" },
    { icon: Diamond, name: "UNICEF" },
    { icon: Trophy, name: "WHO" },
    { icon: Medal, name: "Ministry of Education" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-[#050505]"
    >
      {/* Hero Section */}
      <Suspense fallback={<SectionLoader />}>
        <ParallaxSection speed={0.3}>
          <Hero />
        </ParallaxSection>
      </Suspense>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Trust Badges with Counters - CRYSTAL CLEAR */}
      <section className="py-20 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="primary" size="lg" icon={Sparkles} className="mb-4">
              Trusted Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
              Leading the{' '}
              <span className="text-[#00E5FF]">
                Digital Revolution
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Trusted by leading institutions across East Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-12"
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-[#0b0b0b] border border-zinc-200 dark:border-[#1f1f1f] flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-[#00E5FF]" />
                  </div>
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {badge.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Premium Features */}
      <section className="py-20 bg-zinc-50 dark:bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="primary" size="lg" icon={Target} className="mb-4">
              Why Leading Institutions Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
              Built for{' '}
              <span className="text-[#00E5FF]">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              We combine technical expertise with deep understanding of the institutional sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="relative p-8 h-full bg-white dark:bg-[#050505] border-2 border-transparent hover:border-[#00E5FF]/20 transition-all duration-300">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#00E5FF]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <BadgeCheck className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesGrid />
      </Suspense>

      {/* Academy Section */}
      <Suspense fallback={<SectionLoader />}>
        <AcademyBento />
      </Suspense>

      {/* Client Success Section - CRYSTAL CLEAR */}
      <section className="py-20 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="primary" size="lg" icon={Star} className="mb-4">
              Client Success
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              Real Results for{' '}
              <span className="text-[#00E5FF]">
                Real Partners
              </span>
            </h2>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              Join hundreds of organizations that have transformed their digital presence with Soma Design.
            </p>
          </motion.div>

          {/* Testimonials Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00E5FF] text-black rounded-xl font-semibold text-lg hover:bg-[#00E5FF]/90 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#00E5FF]/25">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-zinc-300 dark:border-[#1f1f1f] text-black dark:text-white rounded-xl font-semibold text-lg hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
                <Play className="w-5 h-5" />
                <span>View Case Studies</span>
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-zinc-200 dark:border-[#1f1f1f]"
          >
            <div className="flex items-center gap-2 text-zinc-500">
              <CheckCircle className="w-5 h-5 text-[#00E5FF]" />
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Users className="w-5 h-5 text-[#00E5FF]" />
              <span>35+ NGO Partners</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Award className="w-5 h-5 text-[#00E5FF]" />
              <span>Award-Winning Agency</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 bg-gradient-to-br from-[#00E5FF]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" size="lg" icon={Rocket} className="mb-8">
              Limited Opportunity
            </Badge>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6">
              Ready to Transform Your{' '}
              <span className="text-[#00E5FF]">
                Digital Presence?
              </span>
            </h2>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
              Join leading government institutions and NGOs who trust Soma Design 
              for their digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00E5FF] text-black rounded-xl font-semibold text-xl hover:bg-[#00E5FF]/90 transition-all shadow-2xl hover:shadow-2xl hover:shadow-[#00E5FF]/25">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-zinc-300 dark:border-[#1f1f1f] text-black dark:text-white rounded-xl font-semibold text-xl hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
                  <Play className="w-6 h-6" />
                  <span>Watch Success Stories</span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-zinc-500">
                <Shield className="w-5 h-5 text-[#00E5FF]" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Users className="w-5 h-5 text-[#00E5FF]" />
                <span>35+ NGO Partners</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Sparkles className="w-5 h-5 text-[#00E5FF]" />
                <span>Free NGO Consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar - Sticky at bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="sticky bottom-0 z-40 bg-white dark:bg-[#0b0b0b] border-t border-zinc-200 dark:border-[#1f1f1f] py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#00E5FF] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#00E5FF] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span className="hidden lg:inline">{COMPANY_INFO.address}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-500">Quick support:</span>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;