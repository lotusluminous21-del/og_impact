import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

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
                    <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
                        <AutomatixHeroText
                            text="We Automate Your Business"
                            className="text-gray-900 dark:text-white"
                            delay={0.2}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                        <AutomatixHeroText
                            text="To Grow Faster While You Focus"
                            className="text-gray-900 dark:text-white"
                            delay={0.4}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                        <AutomatixHeroText
                            text="On What You Do Best."
                            className="text-gray-900 dark:text-white"
                            delay={0.6}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                    </motion.div>

                    {/* Description paragraph */}
                    <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
                        <AutomatixSubtitleText
                            text="We transform businesses by automating everything from social media management to AI chatbots, webinar systems, and lead generation."
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                            delay={1.6}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                        />
                    </motion.div>

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

