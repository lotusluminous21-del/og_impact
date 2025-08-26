import React from 'react';
import { motion } from 'framer-motion';

interface AutomatixButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    showArrow?: boolean;
}

export const AutomatixButton: React.FC<AutomatixButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    disabled = false,
    icon,
    iconPosition = 'right',
    showArrow = false,
}) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden group';

    const variants = {
        primary: 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-neutral-200 border-0 shadow-lg hover:shadow-xl',
        secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 border-0 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 hover:border-gray-400 dark:hover:border-neutral-500 hover:bg-gray-50 dark:hover:bg-neutral-800/50',
        ghost: 'text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800/50 border-0',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm gap-2',
        md: 'px-6 py-3 text-base gap-2',
        lg: 'px-8 py-4 text-lg gap-3',
        xl: 'px-10 py-5 text-xl gap-3',
    };

    // Arrow icon component
    const ArrowIcon = () => (
        <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 rotate-90"
        >
            <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    );

    return (
        <motion.button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            whileHover={{
                scale: 1.02,
                y: -2,
            }}
            whileTap={{
                scale: 0.98,
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
            }}
        >
            {/* Subtle background glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Subtle border glow for primary variant */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary-400/20 via-secondary-400/10 to-secondary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                />
            )}

            {/* Content container */}
            <div className="relative z-10 flex items-center justify-center">
                {icon && iconPosition === 'left' && (
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {icon}
                    </motion.div>
                )}

                <span className="relative">
                    {children}
                    {/* Text underline effect */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-current opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ width: '100%' }}
                    />
                </span>

                {icon && iconPosition === 'right' && (
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ x: 5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {icon}
                    </motion.div>
                )}

                {showArrow && (
                    <motion.div
                        className="flex-shrink-0 ml-2"
                        initial={{ x: 5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <ArrowIcon />
                    </motion.div>
                )}
            </div>

            {/* Ripple effect on click */}
            <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl opacity-0"
                whileTap={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
            />
        </motion.button>
    );
};
