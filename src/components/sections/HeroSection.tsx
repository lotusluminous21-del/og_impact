import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useUIStore } from '../../store/uiStore';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

export const HeroSection: React.FC = () => {
    const { setHeroAnimationComplete } = useUIStore();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
            {/* Background Grid Pattern (Automatix-inspired) */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    onAnimationComplete={() => setHeroAnimationComplete(true)}
                >
                    {/* Availability Badge - Updated with realistic availability */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-green-500/30"
                    >
                        <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-green-600 dark:text-green-400">
                            Ready to serve your business needs
                        </span>
                    </motion.div>

                    {/* Main Heading - Updated to reflect actual business with Automatix-style animations */}
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4">
                            <AutomatixHeroText
                                text="Original Global Impact"
                                className="text-gray-900 dark:text-white"
                                delay={0.3}
                                stagger={0.02}
                                duration={0.8}
                                blurIntensity={6}
                            />
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
                            <AutomatixHeroText
                                text="Beyond ✦ Limits."
                                className="text-gray-900 dark:text-white"
                                delay={0.5}
                                stagger={0.03}
                                duration={0.9}
                                blurIntensity={8}
                            />
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
                            <AutomatixHeroText
                                text="Amplified With AI."
                                className="text-secondary-400"
                                delay={0.9}
                                stagger={0.025}
                                duration={1}
                                blurIntensity={7}
                            />
                        </div>
                    </motion.div>

                    {/* Subtitle - Updated with actual value proposition and Automatix-style animations */}
                    <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                        <AutomatixSubtitleText
                            text="Complete business automation solutions from $28/month. Social media, webinars, AI chatbots, and more."
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                            delay={0.9}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                        />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
                        transition={{ delay: 2.2, duration: 0.8 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => scrollToElement('services')}
                            className="bg-secondary-400 text-white hover:bg-secondary-500 border-0 w-full sm:w-auto"
                        >
                            View Services
                        </Button>
                    </motion.div>

                    {/* Featured Services - Updated with actual services */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 sm:mb-12"
                        transition={{ delay: 2.4, duration: 0.8 }}
                    >
                        <p className="text-gray-500 dark:text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-6">Our core services include</p>
                        <div className="flex justify-center items-center gap-2 sm:gap-6 opacity-80 flex-wrap px-4 sm:px-0">
                            <div className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-800 px-2 sm:px-3 py-1 rounded-full">Social Media</div>
                            <div className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-800 px-2 sm:px-3 py-1 rounded-full">Webinars</div>
                            <div className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-800 px-2 sm:px-3 py-1 rounded-full">AI Chatbots</div>
                            <div className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-800 px-2 sm:px-3 py-1 rounded-full">Website Builder</div>
                            <div className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-800 px-2 sm:px-3 py-1 rounded-full">Ad Campaigns</div>
                        </div>
                    </motion.div>

                    {/* Stats Preview - Updated with realistic metrics based on services */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
                        transition={{ delay: 2.6, duration: 0.8 }}
                    >
                        {[
                            { value: '100', label: 'Webinar Participants' },
                            { value: '5K', label: 'Email Contacts' },
                            { value: '$28', label: 'Starting Price' },
                            { value: '$450', label: 'AI Bot Setup' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.8 + index * 0.1, duration: 0.8 }}
                            >
                                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-neutral-600 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-gray-400 dark:bg-neutral-600 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
