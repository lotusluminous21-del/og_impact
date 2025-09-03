import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixTextReveal } from '../ui/AutomatixTextReveal';

export const MissionSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="mission" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center"
                >
                    {/* Our Mission badge - identical to WhyUsSection */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-6 sm:mb-8"
                    >
                        <span className="inline-block px-3 sm:px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-xs sm:text-sm font-medium rounded-full border border-gray-200 dark:border-neutral-700">
                            Our Mission
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <div className="mb-8 sm:mb-12">
                        <AutomatixTextReveal
                            text={[
                                "We Automate Your Business",
                                "To Grow Faster While You Focus",
                                "On What You Do Best."
                            ]}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-center"
                            delay={0.2}
                            stagger={0.08}
                            duration={0.8}
                            blurIntensity={6}
                            effect="word-reveal"
                            triggerOnScroll={true}
                        />
                    </div>

                    {/* Description paragraph */}
                    <div className="mb-12 sm:mb-16">
                        <AutomatixTextReveal
                            text="We transform businesses by automating everything from social media management to AI chatbots, webinar systems, and lead generation."
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed text-center"
                            delay={1.6}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                            triggerOnScroll={true}
                        />
                    </div>

                    {/* Book A Call link */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 text-orange-500 text-base sm:text-lg font-medium cursor-pointer hover:text-orange-400 transition-colors"
                        onClick={() => scrollToElement('contact')}
                        transition={{ delay: 2.0, duration: 0.8 }}
                    >
                        <span>Book A Call</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform rotate-45"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

