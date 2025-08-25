import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useUIStore } from '../../store/uiStore';

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
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Grid Pattern (Automatix-inspired) */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-8 border border-green-500/30"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-green-400">
                            Ready to serve your business needs
                        </span>
                    </motion.div>

                    {/* Main Heading - Updated to reflect actual business */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <div className="text-5xl md:text-7xl font-bold mb-4">
                            <span className="text-white">OG Impact</span>
                        </div>
                        <div className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Beyond</span>
                            <span className="text-secondary-400 mx-2">✦</span>
                            <span className="text-white">Limits.</span>
                        </div>
                        <div className="text-4xl md:text-6xl font-bold">
                            <span className="text-secondary-400">Amplified With AI.</span>
                        </div>
                    </motion.div>

                    {/* Subtitle - Updated with actual value proposition */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Complete business automation solutions from $28/month. Social media, webinars, AI chatbots, and more.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-secondary-400 text-white hover:bg-secondary-500 border-0"
                        >
                            View Services
                        </Button>
                    </motion.div>

                    {/* Featured Services - Updated with actual services */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-12"
                    >
                        <p className="text-neutral-500 text-sm mb-6">Our core services include</p>
                        <div className="flex justify-center items-center gap-6 opacity-80 flex-wrap">
                            <div className="text-neutral-400 text-sm bg-neutral-800 px-3 py-1 rounded-full">Social Media</div>
                            <div className="text-neutral-400 text-sm bg-neutral-800 px-3 py-1 rounded-full">Webinars</div>
                            <div className="text-neutral-400 text-sm bg-neutral-800 px-3 py-1 rounded-full">AI Chatbots</div>
                            <div className="text-neutral-400 text-sm bg-neutral-800 px-3 py-1 rounded-full">Website Builder</div>
                            <div className="text-neutral-400 text-sm bg-neutral-800 px-3 py-1 rounded-full">Ad Campaigns</div>
                        </div>
                    </motion.div>

                    {/* Stats Preview - Updated with realistic metrics based on services */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
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
                                transition={{ delay: 1.5 + index * 0.1 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-neutral-400 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-neutral-600 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
