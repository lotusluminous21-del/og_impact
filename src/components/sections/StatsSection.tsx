import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Smartphone, Star, Users, Target } from 'lucide-react';

const stats = [
    {
        value: 2500,
        suffix: "+",
        label: "Social Media Accounts Managed",
        icon: Smartphone
    },
    {
        value: 4.8,
        suffix: "",
        label: "Customer Satisfaction Rating",
        icon: Star
    },
    {
        value: 15000,
        suffix: "+",
        label: "Webinar Participants",
        icon: Users
    },
    {
        value: 98,
        suffix: "%",
        label: "Client Retention Rate",
        icon: Target
    }
];

const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {count.toLocaleString()}{suffix}
        </span>
    );
};

export const StatsSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            rotateY: -2,
            filter: "blur(1px)"
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: "blur(0px)"
        },
    };

    return (
        <section id="stats" className="py-16 sm:py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-center group"
                        >
                            <motion.div
                                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:border-gray-300 dark:group-hover:border-neutral-700 transition-all duration-300"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-white" />
                            </motion.div>

                            <div className="mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 font-medium px-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto px-4 sm:px-0">
                        Trusted by businesses worldwide for social media management, webinar solutions, AI chatbots, and digital marketing automation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

