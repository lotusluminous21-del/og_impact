import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixTextReveal } from '../ui/AutomatixTextReveal';
import geometricImage from '../../assets/a-single--intricate--brightly-glowing-orange-geome.png';
import ribbonsImage from '../../assets/several-smooth--glowing-white-and-orange-ribbons-o.png';
import ringsImage from '../../assets/two-large--glowing-rings--one-brilliant-white-and-.png';

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

    // Hover effects for images
    const createHoverEffect = () => {
        return {
            initial: { scale: 1 },
            hover: {
                scale: 1.05,
                transition: {
                    duration: 0.2,
                    ease: "easeOut" as const
                }
            },
            exit: {
                scale: 1,
                transition: {
                    duration: 0.3,
                    ease: "easeOut" as const
                }
            }
        };
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
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
        <section id="why-us" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Why Us Tag */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-8 sm:mb-10"
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="inline-block px-4 sm:px-5 py-2.5 sm:py-2 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-sm sm:text-base font-medium rounded-full border border-gray-200 dark:border-neutral-700">
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
                    <div className="mb-4 sm:mb-6">
                        <AutomatixTextReveal
                            text={[
                                "Experience The Benefits",
                                "Of Our Expertise"
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
                    <div>
                        <AutomatixTextReveal
                            text="That drives impactful results and powerful business growth"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed text-center"
                            delay={0.6}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                            triggerOnScroll={true}
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    {features.map((feature, index) => {
                        const hoverEffect = createHoverEffect();

                        return (
                            <motion.div
                                key={index}
                                className="group relative p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-800"
                                style={{
                                    background: 'radial-gradient(ellipse at top center, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 30%, rgba(255,255,255,0.01) 60%, rgba(255,255,255,0.02) 100%)'
                                }}
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
                                    delay: 0.3 + (index * 0.08),
                                    duration: 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover="hover"
                            >
                                {/* Image */}
                                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg border border-gray-300 dark:border-neutral-700">
                                    {index === 0 ? (
                                        <motion.img
                                            src={geometricImage}
                                            alt="Innovative geometric design with glowing orange core"
                                            className="w-full aspect-video object-cover origin-top"
                                            variants={hoverEffect}
                                        />
                                    ) : index === 1 ? (
                                        <motion.img
                                            src={ribbonsImage}
                                            alt="Smooth flowing ribbons with glowing white and orange elements"
                                            className="w-full aspect-video object-cover origin-top"
                                            variants={hoverEffect}
                                        />
                                    ) : index === 2 ? (
                                        <motion.img
                                            src={ringsImage}
                                            alt="Two intertwined glowing rings representing partnership and connection"
                                            className="w-full aspect-video object-cover origin-top"
                                            variants={hoverEffect}
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-gray-200 dark:bg-black"></div>
                                    )}
                                </div>

                                <div className="text-center">
                                    <div className="mb-3 sm:mb-4">
                                        <AutomatixTextReveal
                                            text={feature.title}
                                            className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight text-center"
                                            delay={0.2}
                                            stagger={0.08}
                                            duration={0.6}
                                            blurIntensity={4}
                                            effect="word-reveal"
                                            triggerOnScroll={true}
                                        />
                                    </div>
                                    <AutomatixTextReveal
                                        text={feature.description}
                                        className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed text-center"
                                        delay={0.4}
                                        stagger={0.04}
                                        duration={0.5}
                                        blurIntensity={3}
                                        effect="word-reveal"
                                        triggerOnScroll={true}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center"
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement('services', -240)}
                        className="bg-secondary-400 text-white hover:bg-secondary-500 border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    >
                        See Pricing
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
