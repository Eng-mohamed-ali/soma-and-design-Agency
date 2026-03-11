import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Reusable Card component with luxury styling and multiple variants
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional classes
 * @param {boolean} props.hoverable - Enable hover effects
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Card style variant (default, glass, gradient, elevated)
 * @param {string} props.size - Card size (sm, md, lg)
 * @param {string} props.padding - Padding size (none, sm, md, lg)
 * @param {boolean} props.borderless - Remove border
 * @param {boolean} props.animated - Enable entrance animation
 * @param {number} props.animationDelay - Delay for entrance animation
 * @param {string} props.hoverEffect - Hover effect type (lift, glow, scale, border)
 */
const Card = ({ 
  children, 
  className = '', 
  hoverable = true, 
  onClick, 
  variant = 'default',
  size = 'md',
  padding = 'md',
  borderless = false,
  animated = false,
  animationDelay = 0,
  hoverEffect = 'lift',
  ...props 
}) => {
  
  // Size mappings
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'w-full',
  };

  // Padding mappings
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // Variant classes using CSS variables
  const variantClasses = {
    default: `
      bg-white dark:bg-[color:var(--color-soma-card)]
      border ${borderless ? 'border-0' : 'border border-zinc-200 dark:border-[color:var(--color-soma-border)]'}
      shadow-lg dark:shadow-xl
    `,
    glass: `
      bg-white/80 dark:bg-black/40 backdrop-blur-xl
      border ${borderless ? 'border-0' : 'border border-white/20 dark:border-white/10'}
      shadow-xl
    `,
    gradient: `
      bg-gradient-to-br from-white to-zinc-50 dark:from-[color:var(--color-soma-card)] dark:to-[color:var(--color-soma-dark)]
      border ${borderless ? 'border-0' : 'border border-zinc-200 dark:border-[color:var(--color-soma-border)]'}
      shadow-lg
    `,
    elevated: `
      bg-white dark:bg-[color:var(--color-soma-card)]
      border ${borderless ? 'border-0' : 'border border-zinc-200 dark:border-[color:var(--color-soma-border)]'}
      shadow-xl dark:shadow-2xl
    `,
    outline: `
      bg-transparent
      border-2 border-[color:var(--color-soma-cyan)]/20
      shadow-none
    `,
  };

  // Hover effect classes
  const hoverClasses = {
    lift: 'hover:shadow-2xl dark:hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)]',
    glow: 'hover:shadow-[0_0_30px_color-mix(in_srgb,_var(--color-soma-cyan)_15%,_transparent)]',
    scale: 'hover:scale-[1.02]',
    border: 'hover:border-[color:var(--color-soma-cyan)]/50',
    none: '',
  };

  // Animation variants
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: animationDelay,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  // Hover animations
  const hoverAnimations = hoverable ? {
    lift: { 
      y: -6,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    glow: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    scale: { 
      scale: 1.03,
      transition: { duration: 0.15 }
    },
    border: { 
      y: -2,
      transition: { duration: 0.2 }
    },
    none: {},
  }[hoverEffect] : undefined;

  return (
    <motion.div
      initial={animated ? "hidden" : false}
      animate={animated ? "visible" : false}
      variants={animationVariants}
      whileHover={hoverAnimations}
      className={`
        ${sizeClasses[size] || sizeClasses.md}
        ${paddingClasses[padding] || paddingClasses.md}
        ${variantClasses[variant] || variantClasses.default}
        ${hoverable ? hoverClasses[hoverEffect] : ''}
        ${onClick ? 'cursor-pointer' : ''}
        rounded-2xl
        transition-all duration-300
        ${className}
      `}
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...props}
    >
      {/* Decorative corner accent (optional) */}
      {variant === 'gradient' && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[color:var(--color-soma-cyan)]/10 to-transparent rounded-bl-3xl -z-10" />
      )}
      
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'glass', 'gradient', 'elevated', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  borderless: PropTypes.bool,
  animated: PropTypes.bool,
  animationDelay: PropTypes.number,
  hoverEffect: PropTypes.oneOf(['lift', 'glow', 'scale', 'border', 'none']),
};

Card.defaultProps = {
  className: '',
  hoverable: true,
  variant: 'default',
  size: 'md',
  padding: 'md',
  borderless: false,
  animated: false,
  animationDelay: 0,
  hoverEffect: 'lift',
};

export default Card;