import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView, easeOut } from 'framer-motion';

interface AutomatixTextRevealProps {
    text: string | string[];
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    gradient?: boolean;
    gradientColors?: string[];
    triggerOnScroll?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    blurIntensity?: number;
    effect?: 'automatix-blur' | 'character-reveal' | 'word-reveal' | 'line-reveal';
    performance?: 'high' | 'medium' | 'low';
}

// Memoized character component for Automatix-style blur effects
const AutomatixCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    blurIntensity?: number;
    baseClassName?: string;
}>(({ char, index, variants, gradient, gradientColors, delay, blurIntensity = 6, baseClassName = '' }) => {
    // Check if this character should be orange (the star symbol)
    const isOrangeStar = char === '✦';
    const characterClassName = isOrangeStar
        ? 'text-orange-500'
        : baseClassName;

    return (
        <motion.span
            variants={variants}
            className={`inline-block ${characterClassName} ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
            style={{
                animationDelay: `${delay + index * 0.03}s`,
                filter: `blur(${blurIntensity}px)`,
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    );
});

// Memoized word component for word-based animations
const AutomatixWord = memo<{
    word: string;
    index: number;
    totalWords: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    blurIntensity?: number;
    baseClassName?: string;
}>(({ word, index, totalWords, variants, gradient, gradientColors, delay, blurIntensity = 4, baseClassName = '' }) => {
    // Check if this word contains the orange star symbol
    const isOrangeStar = word.includes('✦');
    const wordClassName = isOrangeStar
        ? 'text-orange-500'
        : baseClassName;

    return (
        <motion.span
            variants={variants}
            className={`inline-block ${wordClassName} ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
            style={{
                animationDelay: `${delay + index * 0.08}s`,
                filter: `blur(${blurIntensity}px)`,
                marginRight: index === totalWords - 1 ? '0' : '0.25em', // Increased spacing between words
                whiteSpace: 'nowrap', // Prevent word breaking
            }}
        >
            {word}
        </motion.span>
    );
});

export const AutomatixTextReveal: React.FC<AutomatixTextRevealProps> = memo(({
    text,
    className = '',
    delay = 0,
    stagger = 0.05,
    duration = 0.8,
    gradient = false,
    gradientColors = ['from-primary-600', 'to-secondary-600'],
    triggerOnScroll = false,

    size = 'lg',
    weight = 'bold',
    blurIntensity = 6,
    effect = 'automatix-blur',
    // Removed unused performance
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    // Removed unused scrollYProgress

    const [textArray, setTextArray] = useState<string[]>([]);

    useEffect(() => {
        if (Array.isArray(text)) {
            setTextArray(text);
        } else {
            setTextArray([text]);
        }
    }, [text]);



    // Automatix-style container variants with blur effect
    const automatixContainerVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(1px)",
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
                filter: {
                    duration: 0.3,
                    ease: easeOut,
                },
            },
        },
    };

    // Automatix-style character variants with sophisticated blur reveal
    const automatixCharacterVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            scale: 0.98,
            filter: `blur(${blurIntensity}px)`,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                ease: easeOut,
                filter: {
                    duration: duration * 0.8,
                    ease: easeOut,
                },
            },
        },
    };

    // Word-based variants for medium performance
    const automatixWordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
            filter: `blur(${blurIntensity * 0.7}px)`,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: duration * 0.7,
                ease: easeOut,
                filter: {
                    duration: duration * 0.6,
                    ease: easeOut,
                },
            },
        },
    };

    // Line-based variants for low performance
    const automatixLineVariants = {
        hidden: {
            opacity: 0,
            y: 25,
            filter: `blur(${blurIntensity * 0.5}px)`,
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration * 0.6,
                ease: easeOut,
                filter: {
                    duration: duration * 0.5,
                    ease: easeOut,
                },
            },
        },
    };

    const renderAutomatixBlurEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-visible"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="inline-block">
                {textLine.split('').map((char, charIndex) => (
                    <AutomatixCharacter
                        key={charIndex}
                        char={char}
                        index={charIndex}
                        variants={automatixCharacterVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.1}
                        blurIntensity={blurIntensity}
                        baseClassName={className}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderWordRevealEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-visible text-center"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="inline-block text-flow-natural">
                {textLine.split(' ').map((word, wordIndex) => (
                    <AutomatixWord
                        key={wordIndex}
                        word={word}
                        index={wordIndex}
                        totalWords={textLine.split(' ').length}
                        variants={automatixWordVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.2}
                        blurIntensity={blurIntensity * 0.7}
                        baseClassName={className}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderLineRevealEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-visible"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixLineVariants}
            style={{
                animationDelay: `${delay + lineIndex * 0.2}s`
            }}
        >
            <span className={`${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}>
                {textLine}
            </span>
        </motion.div>
    );

    const renderEffect = () => {
        switch (effect) {
            case 'automatix-blur':
                return textArray.map((line, index) => renderAutomatixBlurEffect(line, index));
            case 'character-reveal':
                return textArray.map((line, index) => renderAutomatixBlurEffect(line, index));
            case 'word-reveal':
                return textArray.map((line, index) => renderWordRevealEffect(line, index));
            case 'line-reveal':
                return textArray.map((line, index) => renderLineRevealEffect(line, index));
            default:
                return textArray.map((line, index) => renderAutomatixBlurEffect(line, index));
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
        '8xl': 'text-8xl',
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
});

// Specialized components for different text reveal effects
export const AutomatixHeroText: React.FC<Omit<AutomatixTextRevealProps, 'size' | 'weight'>> = (props) => {
    return (
        <AutomatixTextReveal
            size="7xl"
            weight="bold"
            gradientColors={['from-primary-600', 'to-secondary-600']}
            effect="word-reveal"
            performance="high"
            triggerOnScroll={true}
            {...props}
        />
    );
};

export const AutomatixSubtitleText: React.FC<Omit<AutomatixTextRevealProps, 'size' | 'weight'>> = (props) => {
    return (
        <AutomatixTextReveal
            size="2xl"
            weight="normal"
            effect="word-reveal"
            performance="medium"
            triggerOnScroll={true}
            {...props}
        />
    );
};

export const AutomatixGradientText: React.FC<Omit<AutomatixTextRevealProps, 'gradient'>> = (props) => {
    return <AutomatixTextReveal {...props} gradient={true} />;
};

export const AutomatixScrollText: React.FC<Omit<AutomatixTextRevealProps, 'triggerOnScroll'>> = (props) => {
    return <AutomatixTextReveal {...props} triggerOnScroll={true} />;
};
