import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SendMessageButtonProps {
    isSubmitting: boolean;
    onClick: () => void;
}

const SendMessageButton: React.FC<SendMessageButtonProps> = ({ isSubmitting, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className={`relative w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-black dark:bg-white dark:text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden ${isHovered && !isSubmitting
                ? "shadow-[0_0_4px_rgba(59,130,246,0.4),0_0_8px_rgba(249,115,22,0.3)] dark:shadow-[0_0_6px_rgba(255,255,255,0.4),0_0_12px_rgba(255,255,255,0.2)]"
                : ""
                }`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            disabled={isSubmitting}
            style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{
                scale: 1.02,
                y: -2,
            }}
            whileTap={{
                scale: 0.98,
                y: 0,
            }}
        >




            {/* Shimmer effect */}
            <AnimatePresence>
                {isHovered && !isSubmitting && (
                    <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                                transform: "translateX(-100%)",
                            }}
                            animate={{
                                transform: ["translateX(-100%)", "translateX(100%)"],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dark mode shimmer effect */}
            <AnimatePresence>
                {isHovered && !isSubmitting && (
                    <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden dark:block hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)",
                                transform: "translateX(-100%)",
                            }}
                            animate={{
                                transform: ["translateX(-100%)", "translateX(100%)"],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                    <motion.div
                        className="flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </motion.div>
                ) : (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        Send Message
                    </motion.span>
                )}
            </span>

            {/* Ripple effect on click */}
            <AnimatePresence>
                {isHovered && !isSubmitting && (
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-white/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            {/* Success state animation */}
            <AnimatePresence>
                {isSubmitting && (
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default SendMessageButton;
