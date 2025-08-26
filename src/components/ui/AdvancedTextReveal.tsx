import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, easeOut } from 'framer-motion';

interface AdvancedTextRevealProps {
    text: string | string[];
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    effect?: 'character' | 'word' | 'line' | 'mask' | 'split' | 'typewriter';
    gradient?: boolean;
    gradientColors?: string[];
    triggerOnScroll?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    maskDirection?: 'left' | 'right' | 'up' | 'down';
    splitOffset?: number;
    typewriterSpeed?: number;
    typewriterDelay?: number;
}

export const AdvancedTextReveal: React.FC<AdvancedTextRevealProps> = ({
    text,
    className = '',
    delay = 0,
    stagger = 0.05,
    duration = 0.8,
    effect = 'character',
    gradient = false,
    gradientColors = ['from-primary-600', 'to-secondary-600'],
    triggerOnScroll = false,
    direction = 'up',
    size = 'lg',
    weight = 'bold',
    maskDirection = 'left',
    splitOffset = 20,
    typewriterSpeed = 100,
    // Removed unused typewriterDelay
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [textArray, setTextArray] = useState<string[]>([]);
    const [typewriterText, setTypewriterText] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);

    useEffect(() => {
        if (Array.isArray(text)) {
            setTextArray(text);
        } else {
            setTextArray([text]);
        }
    }, [text]);

    // Typewriter effect
    useEffect(() => {
        if (effect === 'typewriter' && textArray.length > 0) {
            const fullText = textArray.join(' ');
            const timer = setTimeout(() => {
                if (typewriterIndex < fullText.length) {
                    setTypewriterText(fullText.slice(0, typewriterIndex + 1));
                    setTypewriterIndex(prev => prev + 1);
                }
            }, typewriterSpeed);
            return () => clearTimeout(timer);
        }
    }, [typewriterIndex, textArray, effect, typewriterSpeed]);

    const getDirectionTransform = () => {
        switch (direction) {
            case 'up': return { y: 50 };
            case 'down': return { y: -50 };
            case 'left': return { x: 50 };
            case 'right': return { x: -50 };
            default: return { y: 50 };
        }
    };

    const getDirectionAnimate = () => {
        switch (direction) {
            case 'up': return { y: 0 };
            case 'down': return { y: 0 };
            case 'left': return { x: 0 };
            case 'right': return { x: 0 };
            default: return { y: 0 };
        }
    };

    const getMaskTransform = () => {
        switch (maskDirection) {
            case 'left': return { x: '-100%' };
            case 'right': return { x: '100%' };
            case 'up': return { y: '-100%' };
            case 'down': return { y: '100%' };
            default: return { x: '-100%' };
        }
    };

    const getMaskAnimate = () => {
        switch (maskDirection) {
            case 'left': return { x: '0%' };
            case 'right': return { x: '0%' };
            case 'up': return { y: '0%' };
            case 'down': return { y: '0%' };
            default: return { x: '0%' };
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const characterVariants = {
        hidden: {
            opacity: 0,
            ...getDirectionTransform(),
        },
        visible: {
            opacity: 1,
            ...getDirectionAnimate(),
            transition: {
                duration: duration,
                ease: easeOut,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: easeOut,
            },
        },
    };

    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: easeOut,
            },
        },
    };

    const maskVariants = {
        hidden: {
            ...getMaskTransform(),
        },
        visible: {
            ...getMaskAnimate(),
            transition: {
                duration: duration,
                ease: easeOut,
            },
        },
    };

    const splitVariants = {
        hidden: {
            y: splitOffset,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: duration,
                ease: easeOut,
            },
        },
    };

    const renderCharacterEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={containerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <motion.span
                        key={charIndex}
                        variants={characterVariants}
                        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );

    const renderWordEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={containerVariants}
        >
            <div className="inline-block text-center">
                <div className="inline-block text-left text-flow-natural">
                    {textLine.split(' ').map((word, wordIndex) => (
                        <motion.span
                            key={wordIndex}
                            variants={wordVariants}
                            className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
                            style={{
                                marginRight: wordIndex === textLine.split(' ').length - 1 ? '0' : '0.2em', // Only add margin between words, not after last word
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderLineEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            variants={lineVariants}
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            className={`${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
        >
            {textLine}
        </motion.div>
    );

    const renderMaskEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden relative"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={containerVariants}
        >
            <motion.div
                variants={maskVariants}
                className={`${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
            >
                {textLine}
            </motion.div>
        </motion.div>
    );

    const renderSplitEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={containerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <motion.span
                        key={charIndex}
                        variants={splitVariants}
                        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
                        style={{
                            animationDelay: `${delay + charIndex * stagger}s`
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );

    const renderTypewriterEffect = () => (
        <motion.div
            className={`${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {typewriterText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
            >
                |
            </motion.span>
        </motion.div>
    );

    const renderEffect = () => {
        switch (effect) {
            case 'character':
                return textArray.map((line, index) => renderCharacterEffect(line, index));
            case 'word':
                return textArray.map((line, index) => renderWordEffect(line, index));
            case 'line':
                return textArray.map((line, index) => renderLineEffect(line, index));
            case 'mask':
                return textArray.map((line, index) => renderMaskEffect(line, index));
            case 'split':
                return textArray.map((line, index) => renderSplitEffect(line, index));
            case 'typewriter':
                return renderTypewriterEffect();
            default:
                return textArray.map((line, index) => renderCharacterEffect(line, index));
        }
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
    };

    const fontWeightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
    };

    return (
        <div
            ref={ref}
            className={`${textSizeClasses[size]} ${fontWeightClasses[weight]} text-container-responsive text-break-words ${className}`}
        >
            {renderEffect()}
        </div>
    );
};

// Specialized components for different effects
export const MaskTextReveal: React.FC<Omit<AdvancedTextRevealProps, 'effect'>> = (props) => {
    return <AdvancedTextReveal {...props} effect="mask" />;
};

export const SplitTextReveal: React.FC<Omit<AdvancedTextRevealProps, 'effect'>> = (props) => {
    return <AdvancedTextReveal {...props} effect="split" />;
};

export const TypewriterTextReveal: React.FC<Omit<AdvancedTextRevealProps, 'effect'>> = (props) => {
    return <AdvancedTextReveal {...props} effect="typewriter" />;
};

export const WordTextReveal: React.FC<Omit<AdvancedTextRevealProps, 'effect'>> = (props) => {
    return <AdvancedTextReveal {...props} effect="word" />;
};

