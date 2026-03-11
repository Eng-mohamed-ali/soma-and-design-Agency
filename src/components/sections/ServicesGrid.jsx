import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { SERVICES } from '../../data/constants';

/**
 * Services grid with bento layout
 * Each card showcases a service with features
 */
const ServicesGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // If SERVICES is not available, use fallback data
  const servicesData = SERVICES || [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "Globe",
      features: ["React.js", "Node.js", "Responsive Design", "SEO Optimized"],
      price: "$2,999",
      slug: "web-development"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence.",
      icon: "BarChart",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      price: "$1,499",
      slug: "digital-marketing"
    },
    {
      id: 3,
      title: "Brand Design",
      description: "Creative branding that tells your unique story.",
      icon: "Sparkles",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"],
      price: "$1,999",
      slug: "brand-design"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers.",
      icon: "Target",
      features: ["Wireframing", "Prototyping", "User Testing", "Interaction Design"],
      price: "$2,499",
      slug: "ui-ux-design"
    },
    {
      id: 5,
      title: "AI Consulting",
      description: "Leverage AI to automate processes and gain competitive advantage.",
      icon: "Brain",
      features: ["AI Strategy", "ChatGPT Integration", "Automation", "Training"],
      price: "$3,499",
      slug: "ai-consulting"
    },
    {
      id: 6,
      title: "Content Strategy",
      description: "Compelling content that engages your audience and drives action.",
      icon: "FileText",
      features: ["Copywriting", "Content Planning", "SEO Writing", "Brand Voice"],
      price: "$1,299",
      slug: "content-strategy"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[color:var(--color-soma-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 mb-6"
          >
            <Icons.Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
            Enterprise-Grade{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Solutions
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Built for the unique requirements of government institutions and international NGOs.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {servicesData.map((service) => {
            const Icon = Icons[service.icon] || Icons.HelpCircle;
            const isHovered = hoveredId === service.id;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-soma-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Icon and price */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 bg-[color:var(--color-soma-cyan)]/10 rounded-xl group-hover:bg-[color:var(--color-soma-cyan)]/20 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-[color:var(--color-soma-cyan)]" />
                    </motion.div>
                    
                    <motion.span
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      className="text-2xl font-bold text-[color:var(--color-soma-cyan)]"
                    >
                      {service.price}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-2 group-hover:text-[color:var(--color-soma-cyan)] transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs cursor-default border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)] transition-colors"
                          >
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={`/services/${service.slug || service.id}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group/btn"
                      >
                        <span>Learn More</span>
                        <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Decorative corner element */}
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-16 h-16 bg-[color:var(--color-soma-cyan)]/10 rounded-full blur-xl"
                    animate={{
                      scale: isHovered ? 1.5 : 1,
                      opacity: isHovered ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[color:var(--color-soma-cyan)] font-medium hover:gap-3 transition-all group"
          >
            <span>View All Services</span>
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Icons.Shield className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              ISO 27001 Certified
            </span>
            <span className="flex items-center gap-2">
              <Icons.Lock className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              Enterprise Security
            </span>
            <span className="flex items-center gap-2">
              <Icons.Clock className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <Icons.Users className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              50+ Experts
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;