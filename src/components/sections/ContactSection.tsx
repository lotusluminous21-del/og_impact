import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);

        // Reset form
        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });
    };

    const handleButtonClick = () => {
        // Trigger form submission
        const form = document.querySelector('form');
        if (form) {
            const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
            form.dispatchEvent(submitEvent);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Content */}
                    <motion.div
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    >
                        <AutomatixHeroText
                            text="Ready to Scale Your Business?"
                            className="text-gray-900 dark:text-white"
                            delay={1.0}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                        <AutomatixSubtitleText
                            text="Let's discuss how our automation solutions can transform your digital presence. From social media management to AI chatbots, we'll create a strategy that drives results."
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed"
                            delay={1.4}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                        />

                        {/* Contact Info */}
                        <div className="space-y-4 sm:space-y-6">
                            <motion.div
                                className="flex items-center space-x-3 sm:space-x-4"
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h3>
                                    <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">Support@originalglobalimpact.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center space-x-3 sm:space-x-4"
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</h3>
                                    <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">+1 (555) 123-4567</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center space-x-3 sm:space-x-4"
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</h3>
                                    <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">1309 Coffeen Avenue STE 1200 Sheridan, WY 82801</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                    placeholder="Your company"
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                                    placeholder="Tell us about your business needs and which services interest you..."
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                    onClick={handleButtonClick}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            className="flex items-center justify-center"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </motion.div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
