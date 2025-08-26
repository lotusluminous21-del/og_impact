import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView, easeOut } from 'framer-motion';

interface TextRevealProps {
    text: string | string[];
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    gradient?: boolean;
    gradientColors?: string[];
    triggerOnScroll?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    performance?: 'high' | 'medium' | 'low';
}

// Memoized character component for better performance
const AnimatedCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
}>(({ char, index, variants, gradient, gradientColors, delay }) => (
    <motion.span
        variants={variants}
        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * 0.02}s`
        }}
    >
        {char === ' ' ? '\u00A0' : char}
    </motion.span>
));

// Memoized word component for medium performance
const AnimatedWord = memo<{
    word: string;
    index: number;
    totalWords: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
}>(({ word, index, totalWords, variants, gradient, gradientColors, delay }) => (
    <motion.span
        variants={variants}
        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * 0.05}s`,
            marginRight: index === totalWords - 1 ? '0' : '0.2em', // Only add margin between words, not after last word
        }}
    >
        {word}
    </motion.span>
));

export const TextReveal: React.FC<TextRevealProps> = memo(({
    text,
    className = '',
    delay = 0,
    stagger = 0.05,
    duration = 0.8,
    gradient = false,
    gradientColors = ['from-primary-600', 'to-secondary-600'],
    triggerOnScroll = false,
    direction = 'up',
    size = 'lg',
    weight = 'bold',
    performance = 'medium'
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [textArray, setTextArray] = useState<string[]>([]);

    useEffect(() => {
        if (Array.isArray(text)) {
            setTextArray(text);
        } else {
            setTextArray([text]);
        }
    }, [text]);

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
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            ...getDirectionTransform(),
        },
        visible: {
            opacity: 1,
            ...getDirectionAnimate(),
            transition: {
                duration: duration * 0.7,
                ease: easeOut,
            },
        },
    };

    const renderText = (textLine: string, lineIndex: number) => {
        if (performance === 'low') {
            // Simple fade in for low performance
            return (
                <motion.div
                    key={lineIndex}
                    className="overflow-hidden"
                    initial="hidden"
                    animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
                    variants={wordVariants}
                    style={{
                        animationDelay: `${delay + lineIndex * 0.2}s`
                    }}
                >
                    <span className={`${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}>
                        {textLine}
                    </span>
                </motion.div>
            );
        }

        if (performance === 'medium') {
            // Word-based animation for medium performance
            const words = textLine.split(' ');
            return (
                <motion.div
                    key={lineIndex}
                    className="overflow-hidden"
                    initial="hidden"
                    animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
                    variants={containerVariants}
                >
                    <div className="inline-block text-center">
                        <div className="inline-block text-left text-flow-natural">
                            {words.map((word, wordIndex) => (
                                <AnimatedWord
                                    key={wordIndex}
                                    word={word}
                                    index={wordIndex}
                                    totalWords={words.length}
                                    variants={wordVariants}
                                    gradient={gradient}
                                    gradientColors={gradientColors}
                                    delay={delay + lineIndex * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            );
        }

        // Character-based animation for high performance (original)
        return (
            <motion.div
                key={lineIndex}
                className="overflow-hidden"
                initial="hidden"
                animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
                variants={containerVariants}
            >
                <div className="flex flex-wrap justify-center">
                    {textLine.split('').map((char, charIndex) => (
                        <AnimatedCharacter
                            key={charIndex}
                            char={char}
                            index={charIndex}
                            variants={characterVariants}
                            gradient={gradient}
                            gradientColors={gradientColors}
                            delay={delay + (lineIndex * textArray.length + charIndex) * stagger}
                        />
                    ))}
                </div>
            </motion.div>
        );
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
            {textArray.map((line, index) => renderText(line, index))}
        </div>
    );
});

// Specialized components for different text reveal effects
export const GradientTextReveal: React.FC<Omit<TextRevealProps, 'gradient'>> = memo((props) => {
    return <TextReveal {...props} gradient={true} />;
});

export const ScrollTextReveal: React.FC<Omit<TextRevealProps, 'triggerOnScroll'>> = memo((props) => {
    return <TextReveal {...props} triggerOnScroll={true} />;
});

export const HeroTextReveal: React.FC<Omit<TextRevealProps, 'gradient' | 'size' | 'weight'>> = memo((props) => {
    return (
        <TextReveal
            {...props}
            gradient={true}
            size="7xl"
            weight="bold"
            gradientColors={['from-blue-600', 'to-purple-600']}
            stagger={0.03}
            duration={1}
            performance="medium"
        />
    );
});

export const SubtitleTextReveal: React.FC<Omit<TextRevealProps, 'size' | 'weight'>> = memo((props) => {
    return (
        <TextReveal
            {...props}
            size="2xl"
            weight="normal"
            stagger={0.02}
            duration={0.6}
            performance="low"
        />
    );
});
