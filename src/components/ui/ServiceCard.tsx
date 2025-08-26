import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
    className?: string;
    index?: number;
    inView?: boolean;
    image?: string;
    fullDescription?: string;
    pricing?: string;
    benefits?: string[];
    isExpanded?: boolean;
    onToggle?: () => void;
    rowInfo?: {
        rowIndex: number;
        cardsInRow: number[];
        totalRows: number;
        columnsCount: number;
    };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    className = '',
    index = 0,
    inView = false,
    image,
    fullDescription,
    pricing,
    benefits = [],
    isExpanded = false,
    onToggle,
}) => {
    // Get row information for button text
    const getButtonText = () => {
        return isExpanded ? 'Show Less' : 'Learn More';
    };

    return (
        <motion.div
            className={`relative group bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-neutral-800/50 hover:border-gray-300/70 dark:hover:border-neutral-700/70 overflow-hidden transition-all duration-300 ${className}`}
            layout
            initial={{
                opacity: 0,
                scale: 0.95,
                rotateY: -2,
                filter: "blur(1px)"
            }}
            animate={inView ? {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                filter: "blur(0px)"
            } : {
                opacity: 0,
                scale: 0.95,
                rotateY: -2,
                filter: "blur(1px)"
            }}
            transition={{
                delay: 0.2 + (index * 0.08),
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                layout: { duration: 0.3, ease: "easeInOut" }
            }}
        >
            {/* Main Card Content */}
            <div className="p-6 sm:p-8 pb-0">
                {/* Title */}
                <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                {/* Central Graphic Container */}
                <div className="relative mb-4 sm:mb-6">
                    <div className="w-full aspect-video rounded-lg bg-gray-100 dark:bg-black border border-gray-300 dark:border-neutral-700 group-hover:border-gray-400 dark:group-hover:border-neutral-600 transition-colors duration-300 overflow-hidden">
                        {image ? (
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 origin-top"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent dark:from-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="text-center mb-4">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                        {description}
                    </p>
                </div>

                {/* Learn More Button */}
                {fullDescription && onToggle && (
                    <div className="text-center">
                        <button
                            onClick={onToggle}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/btn"
                        >
                            {getButtonText()}
                            <svg
                                className={`ml-2 w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
                {isExpanded && fullDescription && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200/50 dark:border-neutral-700/50">
                            {/* Pricing Badge */}
                            {pricing && (
                                <div className="text-center mb-6 pt-4">
                                    <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                        {pricing}
                                    </span>
                                </div>
                            )}

                            {/* Benefits */}
                            {benefits.length > 0 && (
                                <div className="mb-8">
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                        Key Benefits
                                    </h4>
                                    <div className="space-y-3 max-w-sm mx-auto">
                                        {benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-start justify-center">
                                                <svg className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed text-center">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="text-center">
                                <button className="relative border border-white/60 text-white/60 group-hover:border-white group-hover:text-white hover:!border-white hover:!text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden">
                                    <span className="relative z-10 pointer-events-none">Get Started</span>
                                    <motion.div
                                        className="absolute inset-0 rounded-lg"
                                        style={{
                                            background: "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.2), rgba(255,255,255,0.1), rgba(255,255,255,0.2))",
                                            filter: "blur(6px)",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

