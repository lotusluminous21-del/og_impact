import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';
import SendMessageButton from '../ui/SendMessageButton';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculate form completion percentage
    const formCompletion = Math.round(
        (Object.values(formData).filter(value => value.trim() !== '').length / Object.keys(formData).length) * 100
    );

    // Smart placeholders that change based on context
    const getSmartPlaceholder = (fieldName: string) => {
        const placeholders = {
            name: formData.company ? `Hi, I'm from ${formData.company}` : "Your name",
            email: formData.name ? `${formData.name.split(' ')[0]}@company.com` : "your@email.com",
            company: formData.name ? `${formData.name.split(' ')[0]}'s Company` : "Your company",
            message: formData.company ? `Tell us about ${formData.company}'s automation needs...` : "Tell us about your business needs and which services interest you..."
        };
        return placeholders[fieldName as keyof typeof placeholders] || "";
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (fieldName: string) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setShowSuccess(true);

        // Reset form after showing success
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
            setShowSuccess(false);
        }, 3000);
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

    const progressVariants = {
        hidden: { width: 0 },
        visible: {
            width: `${formCompletion}%`,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
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
                        <div className="text-left [&>*]:text-left [&_div]:text-left [&_span]:text-left mb-6 sm:mb-8">
                            <AutomatixHeroText
                                text="Ready to Scale Your Business?"
                                className="text-gray-900 dark:text-white"
                                delay={0.2}
                                stagger={0.08}
                                duration={0.8}
                                blurIntensity={6}
                                effect="word-reveal"
                            />
                        </div>
                        <div className="text-left mb-8 sm:mb-10 [&>*]:text-left [&_div]:text-left [&_span]:text-left">
                            <AutomatixSubtitleText
                                text="Let's discuss how our automation solutions can transform your digital presence. From social media management to AI chatbots, we'll create a strategy that drives results."
                                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed"
                                delay={1.4}
                                stagger={0.04}
                                duration={0.7}
                                blurIntensity={5}
                                effect="line-reveal"
                            />
                        </div>

                        {/* Social Proof */}
                        <motion.div
                            className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-blue-200 dark:border-primary-800"
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 dark:from-primary-400 dark:to-secondary-400 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center">
                                            <span className="text-white text-xs font-semibold">{String.fromCharCode(64 + i)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Join 500+ businesses</p>
                                    <p className="text-xs text-gray-600 dark:text-neutral-400">who've automated their growth</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-neutral-400">4.9/5 rating</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <div className="space-y-4 sm:space-y-6">
                            <motion.div
                                className="flex items-center space-x-3 sm:space-x-4"
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="bg-gray-100 dark:bg-neutral-950 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800 relative overflow-hidden"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                    >
                        {/* Success Message Overlay */}
                        <AnimatePresence>
                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 bg-green-50 dark:bg-green-900/20 flex items-center justify-center z-10 rounded-2xl"
                                >
                                    <div className="text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                        >
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
                                        <p className="text-green-600 dark:text-green-300">We'll get back to you within 24 hours</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Form Progress Indicator */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">Form Progress</span>
                                <span className="text-sm text-gray-500 dark:text-neutral-500">{formCompletion}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                                <motion.div
                                    className="bg-gradient-to-r from-blue-800 via-blue-700 to-orange-700 dark:from-blue-900 dark:via-blue-800 dark:to-orange-800 h-2 rounded-full"
                                    variants={progressVariants}
                                    initial="hidden"
                                    animate="visible"
                                />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                            >
                                <div className="relative mb-2 sm:mb-3">
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 dark:bg-neutral-900 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 ${focusedField === 'name' ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-300 dark:border-neutral-700'
                                            }`}
                                        placeholder={getSmartPlaceholder('name')}
                                    />
                                    {focusedField === 'name' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-6 left-0 text-xs text-primary-600 dark:text-primary-400"
                                        >
                                            Tell us who you are! 👋
                                        </motion.div>
                                    )}
                                </div>
                                <div className="relative mb-2 sm:mb-3">
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 dark:bg-neutral-900 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 ${focusedField === 'email' ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-300 dark:border-neutral-700'
                                            }`}
                                        placeholder={getSmartPlaceholder('email')}
                                    />
                                    {focusedField === 'email' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-6 left-0 text-xs text-primary-600 dark:text-primary-400"
                                        >
                                            We'll never spam you! 📧
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative mb-8 sm:mb-10"
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
                                    onFocus={() => handleFocus('company')}
                                    onBlur={handleBlur}
                                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 dark:bg-neutral-900 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 ${focusedField === 'company' ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-300 dark:border-neutral-700'
                                        }`}
                                    placeholder={getSmartPlaceholder('company')}
                                />
                                {focusedField === 'company' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-6 left-0 text-xs text-primary-600 dark:text-primary-400"
                                    >
                                        Help us personalize your experience! 🏢
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative mb-8 sm:mb-10"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                                        Message
                                    </label>
                                    <span className="text-xs text-gray-500 dark:text-neutral-500">
                                        {formData.message.length}/500
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus('message')}
                                    onBlur={handleBlur}
                                    required
                                    rows={4}
                                    maxLength={500}
                                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 dark:bg-neutral-900 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 ${focusedField === 'message' ? 'border-primary-500 shadow-lg shadow-primary-500/20' : 'border-gray-300 dark:border-neutral-700'
                                        }`}
                                    placeholder={getSmartPlaceholder('message')}
                                />
                                {focusedField === 'message' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-6 left-0 text-xs text-primary-600 dark:text-primary-400"
                                    >
                                        The more details, the better we can help! 💡
                                    </motion.div>
                                )}
                            </motion.div>



                            <motion.div
                                variants={itemVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative"
                            >
                                <SendMessageButton
                                    isSubmitting={isSubmitting}
                                    onClick={handleButtonClick}
                                />
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
