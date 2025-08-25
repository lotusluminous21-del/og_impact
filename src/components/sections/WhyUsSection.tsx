import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';

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
                staggerChildren: 0.2
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
        <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Why Us Tag */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-full border border-neutral-700">
                        Why Us
                    </span>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Experience The Benefits</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Of Our Expertise</span>
                        </h2>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                            That drives impactful results and powerful business growth
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="relative mb-6">
                                <div className="w-full aspect-video rounded-lg bg-black border border-neutral-700"></div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed text-center">
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
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-secondary-400 text-white hover:bg-secondary-500 border-0 px-8 py-4 text-lg font-semibold"
                    >
                        See Pricing
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
