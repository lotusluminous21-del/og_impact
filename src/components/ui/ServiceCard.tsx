import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    features = [],
    className = '',
}) => {
    return (
        <motion.div
            className={`relative group bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 overflow-hidden transition-all duration-300 ${className}`}
            whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-full blur-xl"></div>
            </div>

            {/* Title at the top */}
            <div className="relative z-10 text-center mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300">
                    {title}
                </h3>
            </div>

            {/* Central Graphic Container - Minimal Design */}
            <div className="relative mb-6">
                <div className="w-full aspect-video rounded-lg bg-black border border-neutral-700 group-hover:border-neutral-600 transition-colors duration-300">
                    {/* Subtle inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            {/* Description at the bottom */}
            <div className="relative z-10 text-center">
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Minimal Hover Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />
        </motion.div>
    );
};

