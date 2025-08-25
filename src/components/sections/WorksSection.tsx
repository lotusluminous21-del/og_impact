import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import { AutomatixHeroText } from '../ui/AutomatixTextReveal';

const works = [
    {
        title: 'Grapho AI',
        description: "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
        category: 'AI Platform',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop'
    },
    {
        title: 'VectraOps',
        description: '34% increase in online sales.',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop'
    },
    {
        title: 'Signum',
        description: '47% increase in new customers.',
        category: 'SaaS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    }
];

export const WorksSection = () => {
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
            y: 0
        }
    };

    return (
        <section id="works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
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
                            text="Work That Make Us Proud"
                            className="text-gray-900 dark:text-white"
                            delay={1.0}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                        <AutomatixHeroText
                            text="Recent Works, Notable Impact"
                            className="text-gray-900 dark:text-white"
                            delay={1.2}
                            stagger={0.03}
                            duration={0.8}
                            blurIntensity={6}
                            effect="automatix-blur"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                                    <span className="px-2 sm:px-3 py-1 bg-primary-600 text-white text-xs sm:text-sm font-medium rounded-full">
                                        {work.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                                    {work.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed">
                                    {work.description}
                                </p>

                                <div className="mt-4 sm:mt-6 flex items-center justify-between">
                                    <button className="text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300 text-sm sm:text-base">
                                        View Case Study →
                                    </button>
                                    <div className="flex space-x-1 sm:space-x-2">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
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
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => { }}
                        className="w-full sm:w-auto"
                    >
                        View All Works
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
