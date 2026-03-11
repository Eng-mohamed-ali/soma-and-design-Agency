import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Badge component for highlighting metadata with multiple variants and sizes
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content
 * @param {React.ReactNode} props.icon - Optional icon to display
 * @param {string} props.variant - 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.shape - 'rounded' | 'pill' | 'square'
 * @param {boolean} props.animated - Enable entrance animation
 * @param {boolean} props.hoverable - Enable hover effects
 * @param {boolean} props.dismissible - Show dismiss button
 * @param {Function} props.onDismiss - Dismiss handler
 * @param {string} props.className - Additional classes
 */
const Badge = ({ 
  children, 
  icon: Icon,
  variant = 'default', 
  size = 'md',
  shape = 'pill',
  animated = true,
  hoverable = false,
  dismissible = false,
  onDismiss,
  className = '' 
}) => {
  
  // Variant classes using CSS variables
  const variants = {
    default: `
      bg-zinc-100 dark:bg-zinc-800
      text-zinc-700 dark:text-zinc-300
      border border-zinc-200 dark:border-zinc-700
    `,
    primary: `
      bg-[color:var(--color-soma-cyan)]/10 dark:bg-[color:var(--color-soma-cyan)]/20
      text-[color:var(--color-soma-cyan)]
      border border-[color:var(--color-soma-cyan)]/20 dark:border-[color:var(--color-soma-cyan)]/30
    `,
    success: `
      bg-green-100 dark:bg-green-500/20
      text-green-700 dark:text-green-400
      border border-green-200 dark:border-green-500/30
    `,
    warning: `
      bg-yellow-100 dark:bg-yellow-500/20
      text-yellow-700 dark:text-yellow-400
      border border-yellow-200 dark:border-yellow-500/30
    `,
    error: `
      bg-red-100 dark:bg-red-500/20
      text-red-700 dark:text-red-400
      border border-red-200 dark:border-red-500/30
    `,
    outline: `
      bg-transparent
      border border-zinc-300 dark:border-zinc-600
      text-zinc-700 dark:text-zinc-300
    `,
    ghost: `
      bg-transparent
      text-zinc-600 dark:text-zinc-400
      border-none
    `,
  };

  // Size classes
  const sizes = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-sm gap-1.5',
    lg: 'px-4 py-1.5 text-base gap-2',
  };

  // Shape classes
  const shapes = {
    rounded: 'rounded-md',
    pill: 'rounded-full',
    square: 'rounded-none',
  };

  // Hover animations
  const hoverAnimations = hoverable ? {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  } : {};

  // Entrance animation
  const entranceAnimation = animated ? {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  } : {};

  return (
    <motion.span
      {...entranceAnimation}
      {...hoverAnimations}
      className={`
        inline-flex items-center justify-center
        font-medium
        whitespace-nowrap
        ${sizes[size] || sizes.md}
        ${shapes[shape] || shapes.pill}
        ${variants[variant] || variants.default}
        ${dismissible ? 'pr-1' : ''}
        ${className}
      `}
    >
      {/* Icon */}
      {Icon && (
        <Icon className={`
          ${size === 'sm' ? 'w-3 h-3' : ''}
          ${size === 'md' ? 'w-3.5 h-3.5' : ''}
          ${size === 'lg' ? 'w-4 h-4' : ''}
        `} />
      )}
      
      {/* Content */}
      <span>{children}</span>
      
      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={onDismiss}
          className={`
            ml-1 p-0.5 rounded-full
            hover:bg-black/10 dark:hover:bg-white/10
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-[color:var(--color-soma-cyan)]/50
          `}
          aria-label="Dismiss"
        >
          <svg 
            className={`
              ${size === 'sm' ? 'w-2.5 h-2.5' : ''}
              ${size === 'md' ? 'w-3 h-3' : ''}
              ${size === 'lg' ? 'w-3.5 h-3.5' : ''}
            `}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </motion.span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['rounded', 'pill', 'square']),
  animated: PropTypes.bool,
  hoverable: PropTypes.bool,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  className: PropTypes.string,
};

Badge.defaultProps = {
  variant: 'default',
  size: 'md',
  shape: 'pill',
  animated: true,
  hoverable: false,
  dismissible: false,
};

export default Badge;