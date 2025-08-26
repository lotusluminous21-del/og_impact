import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating dots */}
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Floating lines */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={`line-${i}`}
                    className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-30"
                    style={{
                        right: `${10 + i * 20}%`,
                        top: `${30 + i * 25}%`,
                        transform: `rotate(${45 + i * 15}deg)`,
                    }}
                    animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.8,
                    }}
                />
            ))}

            {/* Glow effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};
