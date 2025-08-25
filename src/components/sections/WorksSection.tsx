import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';

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
                staggerChildren: 0.2
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
        <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Work That Make Us Proud</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold">
                            <span className="text-white">Recent Works, Notable Impact</span>
                        </h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                        {work.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {work.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {work.description}
                                </p>

                                <div className="mt-6 flex items-center justify-between">
                                    <button className="text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300">
                                        View Case Study →
                                    </button>
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
                    className="text-center mt-16"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {}}
                    >
                        View All Works
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
