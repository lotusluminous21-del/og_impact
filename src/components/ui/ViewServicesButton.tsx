import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { scrollToElement } from '../../utils/scrollUtils';

const ViewServicesButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => scrollToElement('services')}
            style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
        >
            <span className="relative z-10">View Services</span>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background:
                                "conic-gradient(from 180deg at 50% 50%, #3b82f6, #f97316, #3b82f6)",
                            filter: "blur(10px)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    border: "1px solid transparent",
                    background:
                        "linear-gradient(90deg, #3b82f6, #f97316) border-box",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
};

export default ViewServicesButton;
