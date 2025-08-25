import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

const features = [
    {
        title: 'Innovative Approach',
        description: 'Look for works that reflect a unique character and differentiate in a crowded marketplace.',
        icon: '🧠'
    },
    {
        title: 'Seamless Experience',
        description: 'A seamless user experience across all devices, ensuring every interaction connects with the user.',
        icon: '👍'
    },
    {
        title: 'Ongoing Partnership',
        description: 'Find a new partner easily, not just providers, who offer ongoing support even after the project ends.',
        icon: '👥'
    }
];

export const WhyUsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <section id="why-us" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Why Us Tag */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-6 sm:mb-8"
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="inline-block px-3 sm:px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-xs sm:text-sm font-medium rounded-full border border-gray-200 dark:border-neutral-700">
                        Why Us
                    </span>
                </motion.div>

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
                            text="Experience The Benefits"
                            className="text-gray-900 dark:text-white"
                            delay={0.2}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                        <AutomatixHeroText
                            text="Of Our Expertise"
                            className="text-gray-900 dark:text-white"
                            delay={0.4}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <AutomatixSubtitleText
                            text="That drives impactful results and powerful business growth"
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0"
                            delay={0.6}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{
                                delay: 1.6 + (index * 0.2),
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >
                            {/* Image Placeholder */}
                            <div className="relative mb-4 sm:mb-6">
                                <div className="w-full aspect-video rounded-lg bg-gray-200 dark:bg-black border border-gray-300 dark:border-neutral-700"></div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed text-center">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center"
                    transition={{ delay: 2.4, duration: 0.8 }}
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement('pricing')}
                        className="bg-secondary-400 text-white hover:bg-secondary-500 border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    >
                        See Pricing
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
