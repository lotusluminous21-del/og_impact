import React from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';
import { AutomatixTextReveal } from '../ui/AutomatixTextReveal';
import { EarthImpactShader } from '../ui/EarthImpactShader';
import ViewServicesButton from '../ui/ViewServicesButton';

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
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-visible px-4 sm:px-6 lg:px-8">
            {/* Earth Impact Shader Background */}
            <EarthImpactShader />

            <div className="max-w-7xl mx-auto relative z-20 w-full overflow-visible">
                <motion.div
                    className="text-center overflow-visible pt-8 sm:pt-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    onAnimationComplete={() => setHeroAnimationComplete(true)}
                >
                    {/* Availability Badge - Updated with realistic availability */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-500/20 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-5 border border-green-500/30 dark:border-green-500/20"
                    >
                        <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-green-600 dark:text-green-400">
                            Ready to serve your business needs
                        </span>
                    </motion.div>

                    {/* Main Heading - Updated to reflect actual business with Automatix-style animations */}
                    <motion.div variants={itemVariants} className="mb-1 sm:mb-1">
                        <div className="mb-1 sm:mb-2">
                            <AutomatixTextReveal
                                text="Beyond ✦ Limits."
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-normal"
                                delay={0.3}
                                stagger={0.08}
                                duration={0.9}
                                blurIntensity={8}
                                effect="word-reveal"
                            />
                        </div>
                        <div className="mb-2 sm:mb-3">
                            <AutomatixTextReveal
                                text="Amplified With AI."
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-400 leading-normal"
                                delay={0.5}
                                stagger={0.08}
                                duration={1}
                                blurIntensity={7}
                                effect="word-reveal"
                            />
                        </div>
                        <div className="mb-0 sm:mb-0 overflow-visible pb-0 sm:pb-0">
                            <div className="overflow-visible">
                                <AutomatixTextReveal
                                    text="Original Global Impact"
                                    className="hero-title-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                                    delay={0.9}
                                    stagger={0.08}
                                    duration={0.8}
                                    blurIntensity={6}
                                    effect="word-reveal"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Subtitle - Updated with actual value proposition and Automatix-style animations */}
                    <motion.div variants={itemVariants} className="mb-2 sm:mb-4">
                        <AutomatixTextReveal
                            text="Complete business automation solutions from $28/month. Social media, webinars, AI chatbots, and more."
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed text-center"
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
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
                        transition={{ delay: 2.2, duration: 0.8 }}
                    >
                        <ViewServicesButton />
                    </motion.div>

                    {/* Featured Services - Updated with actual services */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-5 sm:mb-7"
                        transition={{ delay: 2.4, duration: 0.8 }}
                    >
                        <p className="text-gray-500 dark:text-neutral-500 text-xs sm:text-sm mb-3 sm:mb-4">Our core services include</p>
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
                                <div className="mb-1">
                                    <AutomatixTextReveal
                                        text={stat.value}
                                        className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-normal"
                                        delay={0.2}
                                        stagger={0.1}
                                        duration={0.6}
                                        blurIntensity={4}
                                        effect="character-reveal"
                                        triggerOnScroll={false}
                                    />
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
                className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center"
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
