import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
                        className="text-center mb-8"
                    >
                        <span className="inline-block px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-full border border-neutral-700">
                            Our Mission
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-white">We Automate Your Business</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-white">To </span>
                            <span className="text-orange-500">Grow Faster</span>
                            <span className="text-white"> While You Focus</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="text-orange-500">On What You Do Best</span>
                            <span className="text-white">.</span>
                        </h2>
                    </motion.div>

                    {/* Description paragraph */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                            We transform businesses by automating everything from social media management to AI chatbots, webinar systems, and lead generation.
                        </p>
                    </motion.div>

                    {/* Book A Call link */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 text-orange-500 text-lg font-medium cursor-pointer hover:text-orange-400 transition-colors"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

