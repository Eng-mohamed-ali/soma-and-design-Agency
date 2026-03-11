import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Premium Button Component with multiple variants and features
 * @param {Object} props - Component props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
 * @param {string} props.size - 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {React.ReactNode} props.children - Button content
 * @param {React.ReactNode} props.leftIcon - Icon to show on left
 * @param {React.ReactNode} props.rightIcon - Icon to show on right
 * @param {Function} props.onClick - Click handler
 * @param {string} props.href - Link URL (makes button an anchor)
 * @param {string} props.to - React Router path (makes button a Link)
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {boolean} props.loading - Show loading spinner
 * @param {boolean} props.disabled - Disable button
 * @param {boolean} props.fullWidth - Full width button
 * @param {string} props.className - Additional classes
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick, 
  href,
  to,
  type = 'button',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseClasses = `
    relative font-medium rounded-xl transition-all duration-300 
    inline-flex items-center justify-center 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
    group
  `;

  // Variant classes using CSS variables
  const variants = {
    primary: `
      bg-[color:var(--color-soma-cyan)] text-black
      hover:bg-[color:var(--color-soma-cyan)]/80
      focus:ring-[color:var(--color-soma-cyan)]/50
      shadow-[0_0_20px_color-mix(in_srgb,_var(--color-soma-cyan)_20%,_transparent)]
      hover:shadow-[0_0_30px_color-mix(in_srgb,_var(--color-soma-cyan)_30%,_transparent)]
    `,
    secondary: `
      bg-zinc-900 dark:bg-[color:var(--color-soma-card)] text-white
      border border-zinc-700 dark:border-[color:var(--color-soma-border)]
      hover:bg-zinc-800 dark:hover:bg-[color:var(--color-soma-card)]/80
      focus:ring-zinc-500/50
    `,
    outline: `
      bg-transparent text-black dark:text-white
      border-2 border-[color:var(--color-soma-cyan)]/30 dark:border-[color:var(--color-soma-cyan)]/40
      hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)]
      focus:ring-[color:var(--color-soma-cyan)]/50
    `,
    ghost: `
      bg-transparent text-black dark:text-white
      hover:bg-zinc-100 dark:hover:bg-white/10
      focus:ring-zinc-500/30
    `,
    danger: `
      bg-red-500 text-white
      hover:bg-red-600
      focus:ring-red-500/50
      shadow-[0_0_20px_rgba(239,68,68,0.3)]
    `,
    success: `
      bg-green-500 text-white
      hover:bg-green-600
      focus:ring-green-500/50
      shadow-[0_0_20px_rgba(34,197,94,0.3)]
    `,
  };

  // Size classes
  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-1.5',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  // Loading spinner sizes
  const spinnerSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  // Icon sizes
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  // Loading spinner component
  const Spinner = () => (
    <svg 
      className={`animate-spin ${spinnerSizes[size]}`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const buttonContent = (
    <>
      {/* Loading State */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
          <Spinner />
        </span>
      )}

      {/* Button Content */}
      <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {LeftIcon && (
          <span className={iconSizes[size]}>
            {LeftIcon}
          </span>
        )}
        {children}
        {RightIcon && (
          <span className={`${iconSizes[size]} transition-transform group-hover:translate-x-1`}>
            {RightIcon}
          </span>
        )}
      </span>

      {/* Primary Button Glow Effect */}
      {variant === 'primary' && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-soma-cyan)] via-[color:var(--color-soma-cyan)]/80 to-[color:var(--color-soma-cyan)] opacity-0 group-hover:opacity-100 blur-xl"
          initial={false}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </>
  );

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'pointer-events-none' : ''}
    ${className}
  `;

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={disabled || loading ? undefined : onClick}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={disabled || loading ? undefined : onClick}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      type={type}
      className={buttonClasses}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger', 'success']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  type: 'button',
  loading: false,
  disabled: false,
  fullWidth: false,
};

export default Button;