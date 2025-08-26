import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// --- PROPS INTERFACE ---
interface CEOScriptDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- ORIGINAL SCRIPTURE (UNCHANGED) ---
const ceoScript = [
    {
        type: 'paragraph',
        content: 'Thomas N. Thurber is a seasoned executive with over 20 years of top-level leadership experience in start-ups, turnarounds, mergers & acquisitions, and strategic business growth, with a proven track record of driving projects totaling over $500 million in investments and financing.',
        highlights: ['20 years', 'start-ups', 'turnarounds', 'mergers & acquisitions', 'strategic business growth', '$500 million']
    },
    {
        type: 'paragraph',
        content: 'He has led companies with annual revenues of up to $680 million and successfully negotiated and integrated more than 10 corporate acquisitions within just three years.',
        highlights: ['$680 million', '10 corporate acquisitions', 'three years']
    },
    {
        type: 'paragraph',
        content: 'Throughout his career, he has directed cross-functional teams in complex strategic transactions, including the $75 million sale of a concrete company and the consolidation of eight entities leading to a successful Initial Public Offering (IPO).',
        highlights: ['cross-functional teams', '$75 million', 'Initial Public Offering (IPO)']
    },
    {
        type: 'paragraph',
        content: 'He brings deep expertise in developing financial policies and procedures, corporate restructuring, and capital strategy—combining financial precision with a vision for commercial expansion and brand growth.',
        highlights: ['financial policies', 'corporate restructuring', 'capital strategy', 'brand growth']
    },
    {
        type: 'paragraph',
        content: 'As CEO and CFO in challenging environments, Thomas has transformed companies on the brink of collapse into profitable, growing enterprises by implementing innovative marketing strategies, strengthening brand positioning, and increasing market share.',
        highlights: ['CEO and CFO', 'brink of collapse', 'profitable, growing enterprises', 'innovative marketing strategies', 'brand positioning', 'market share']
    },
    {
        type: 'paragraph',
        content: 'His career spans the United States, Central America, and international markets, with specialization in operational integration, brand development, and enhancing shareholder value.',
        highlights: ['United States', 'Central America', 'international markets', 'operational integration', 'shareholder value']
    },
    {
        type: 'paragraph',
        content: 'He holds a Bachelor of Science in Accounting with honors from Florida State University and is a Certified Public Accountant (New York & California).',
        highlights: ['Bachelor of Science in Accounting', 'Florida State University', 'Certified Public Accountant']
    },
    {
        type: 'paragraph',
        content: 'Combining strategic insight, financial expertise, and entrepreneurial vision, Thomas is also a commercial pilot and avid traveler, having visited all 50 U.S. states and over 30 countries worldwide.',
        highlights: ['strategic insight', 'financial expertise', 'entrepreneurial vision', 'commercial pilot', '50 U.S. states', '30 countries']
    }
];

// --- PROGRESS BAR COMPONENT (UNCHANGED) ---
const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    const progress = (currentStep / (totalSteps - 1)) * 100;
    return (
        <div className="w-full bg-gray-200 dark:bg-neutral-700 h-2 rounded-full">
            <motion.div
                className="bg-gradient-to-r from-blue-600 to-orange-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
        </div>
    );
};

// --- ANIMATED PARAGRAPH COMPONENT (REWRITTEN WITH LOGIC FIX) ---
const AnimatedParagraph = ({
    section,
    direction,
}: {
    section: { content: string; highlights: string[] };
    direction: 'up' | 'down';
}) => {
    const highlightRegex = new RegExp(`(${section.highlights.map(h => h.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'g');
    const parts = section.content.split(highlightRegex).filter(part => part);

    const containerVariants = {
        // --- ENHANCED ANIMATIONS ---
        // Entrance: Fast at start, slow at end (easeOut)
        // Exit: Slow at start, fast at end (easeIn) with half duration
        hidden: (direction: 'up' | 'down') => ({
            opacity: 0,
            // When scrolling DOWN, new content enters from BOTTOM (positive y).
            // When scrolling UP, new content enters from TOP (negative y).
            y: direction === 'down' ? 40 : -40,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, // Entrance duration
                ease: "easeOut" as const, // Fast start, slow end
                staggerChildren: 0.06,
            },
        },
        exit: (direction: 'up' | 'down') => ({
            opacity: 0,
            // When scrolling DOWN, old content exits to TOP (negative y).
            // When scrolling UP, old content exits to BOTTOM (positive y).
            y: direction === 'down' ? -40 : 40,
            transition: {
                duration: 0.3, // Half of entrance duration (0.6 / 2)
                ease: "easeIn" as const, // Slow start, fast end
            }
        })
    };
    // --- END FIX ---

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 12
            },
        },
    };

    const highlightVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring' as const,
                stiffness: 120,
                damping: 15
            },
        },
    };

    return (
        <motion.p
            className="text-lg sm:text-xl leading-relaxed"
            custom={direction} // Passed from AnimatePresence in parent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {parts.map((part, index) => {
                const isHighlight = section.highlights.includes(part);
                return (
                    <motion.span
                        key={index}
                        variants={isHighlight ? highlightVariants : wordVariants}
                        className={` ${isHighlight ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-900 dark:text-gray-300'}`}
                    >
                        {part}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};

// --- MAIN DIALOG COMPONENT (STATE MANAGEMENT) ---
export const CEOScriptDialog = ({ isOpen, onClose }: CEOScriptDialogProps) => {
    // State tuple: [current step index, direction of last transition]
    const [[currentStep, direction], setStep] = useState<[number, 'up' | 'down']>([0, 'down']);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setStep([0, 'down']); // Reset on open
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navigateToStep = (step: number) => {
        const newStep = Math.max(0, Math.min(ceoScript.length - 1, step));

        if (newStep !== currentStep) {
            const newDirection = newStep > currentStep ? 'down' : 'up';
            setStep([newStep, newDirection]);
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        if (!isOpen || !contentElement) return;

        let lastCall = 0;
        const throttleDelay = 800; // Increased from 500ms
        let scrollAccumulator = 0;
        const scrollThreshold = 100; // Requires more scroll effort

        const handleScroll = (e: WheelEvent) => {
            e.preventDefault();
            const now = new Date().getTime();
            if (now - lastCall < throttleDelay) return;
            lastCall = now;

            // Accumulate scroll delta
            scrollAccumulator += Math.abs(e.deltaY);

            // Only trigger navigation when threshold is reached
            if (scrollAccumulator >= scrollThreshold) {
                if (e.deltaY > 0) {
                    navigateToStep(currentStep + 1);
                } else {
                    navigateToStep(currentStep - 1);
                }
                scrollAccumulator = 0; // Reset accumulator
            }
        };

        contentElement.addEventListener('wheel', handleScroll, { passive: false });
        return () => contentElement.removeEventListener('wheel', handleScroll);
    }, [currentStep, isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
                        className="relative w-[680px] max-w-[680px] h-[calc(40vh+8px)] bg-white dark:bg-black rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex-shrink-0 px-10 py-4 border-b border-gray-200 dark:border-gray-800 text-left bg-white dark:bg-gray-950">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Thomas N. Thurber</h2>
                            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">CEO & Strategic Business Leader</p>                            <button onClick={onClose} className="absolute top-3 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Close">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex-shrink-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                            <ProgressBar currentStep={currentStep} totalSteps={ceoScript.length} />
                        </div>

                        {/* Main Content Area */}
                        <div
                            ref={contentRef}
                            className="flex-grow overflow-hidden bg-gray-50 dark:bg-black relative"
                        >
                            <div className="w-full mx-auto px-10 pt-6 pb-4 sm:pt-8 sm:pb-6 h-full flex items-start justify-center">
                                <div className="w-full max-w-[600px]">
                                    <AnimatePresence mode="wait" custom={direction}>
                                        <AnimatedParagraph
                                            key={currentStep}
                                            section={ceoScript[currentStep]}
                                            direction={direction}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Hints */}
                        <div className="flex-shrink-0 px-10 py-3 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                <span>Scroll to navigate • {currentStep + 1} of {ceoScript.length}</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => navigateToStep(currentStep - 1)}
                                        disabled={currentStep === 0}
                                        className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => navigateToStep(currentStep + 1)}
                                        disabled={currentStep === ceoScript.length - 1}
                                        className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};