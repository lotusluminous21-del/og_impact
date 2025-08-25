import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    disabled = false,
}) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden';

    const variants = {
        primary: 'bg-white text-black hover:bg-neutral-200 border-0',
        secondary: 'bg-primary-600 text-white hover:bg-primary-700',
        outline: 'border-2 border-neutral-600 text-neutral-300 hover:border-neutral-500 hover:bg-neutral-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

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
            <motion.div
                className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
            />
            {children}
        </motion.button>
    );
};
