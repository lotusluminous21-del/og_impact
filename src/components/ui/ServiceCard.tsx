import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
    className?: string;
    index?: number;
    inView?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    features = [],
    className = '',
    index = 0,
    inView = false,
}) => {
    return (
        <motion.div
            className={`relative group bg-gray-50 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 overflow-hidden transition-all duration-300 ${className}`}
            whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                delay: 1.4 + (index * 0.15),
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-500">
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-neutral-600 dark:to-neutral-800 rounded-full blur-xl"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 dark:from-neutral-700 dark:to-neutral-900 rounded-full blur-xl"></div>
            </div>

            {/* Title at the top */}
            <div className="relative z-10 text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                    {title}
                </h3>
            </div>

            {/* Central Graphic Container - Minimal Design */}
            <div className="relative mb-4 sm:mb-6">
                <div className="w-full aspect-video rounded-lg bg-gray-100 dark:bg-black border border-gray-300 dark:border-neutral-700 group-hover:border-gray-400 dark:group-hover:border-neutral-600 transition-colors duration-300">
                    {/* Subtle inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent dark:from-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            {/* Description at the bottom */}
            <div className="relative z-10 text-center">
                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Minimal Hover Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/10 to-gray-300/10 dark:from-neutral-800/10 dark:to-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />
        </motion.div>
    );
};

