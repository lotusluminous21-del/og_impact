import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

const faqs = [
    {
        question: 'What makes OG Impact different from other agencies?',
        answer: 'OG Impact stands apart through our unique fusion of AI technology and creative expertise. We don\'t just implement solutions; we create intelligent systems that learn and adapt to your business needs. Our approach combines cutting-edge AI with human creativity, ensuring every project delivers both innovation and reliability.'
    },
    {
        question: 'How does AI enhance the services provided by OG Impact?',
        answer: 'AI enhances our services by providing intelligent automation, predictive analytics, and personalized user experiences. We use AI to optimize workflows, analyze data patterns, and create dynamic content that adapts to user behavior. This results in more efficient processes, better decision-making, and improved customer engagement.'
    },
    {
        question: 'How does OG Impact ensure the quality of its AI solutions?',
        answer: 'Quality assurance is built into every step of our process. We use rigorous testing protocols, continuous monitoring, and iterative improvement cycles. Our AI solutions undergo extensive validation, performance testing, and real-world scenario testing before deployment. We also provide ongoing support and updates to ensure optimal performance.'
    },
    {
        question: 'Does OG Impact offer customized solutions?',
        answer: 'Absolutely! Every solution we create is tailored to your specific business needs and goals. We start with a comprehensive analysis of your requirements, then design and implement custom AI solutions that align with your unique challenges and objectives. No two projects are alike.'
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-12 sm:mb-16"
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <AutomatixHeroText
                            text="Need to Know"
                            className="text-gray-900 dark:text-white"
                            delay={1.0}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="mb-2 sm:mb-4">
                        <AutomatixSubtitleText
                            text="Frequently Asked Questions"
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white"
                            delay={1.4}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="space-y-3 sm:space-y-4"
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-300 flex items-center justify-between"
                            >
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-3 sm:pr-4">
                                    {faq.question}
                                </h4>
                                <div className="flex-shrink-0">
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-neutral-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut'
                                }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-gray-50/50 dark:bg-neutral-900/50">
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mt-12 sm:mt-16"
                    transition={{ delay: 2.8, duration: 0.8 }}
                >
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 sm:mb-8 text-sm sm:text-base px-4 sm:px-0">
                        Still have questions? We're here to help!
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement('contact')}
                        className="w-full sm:w-auto"
                    >
                        Contact Us
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
