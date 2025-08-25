import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AutomatixTextRevealProps {
    text: string | string[];
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    gradient?: boolean;
    gradientColors?: string[];
    triggerOnScroll?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}

export const AutomatixTextReveal: React.FC<AutomatixTextRevealProps> = ({
    text,
    className = '',
    delay = 0,
    stagger = 0.02,
    duration = 0.8,
    gradient = false,
    gradientColors = ['from-primary-600', 'to-secondary-600'],
    triggerOnScroll = false,
    size = 'lg',
    weight = 'bold'
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [textArray, setTextArray] = useState<string[]>([]);

    useEffect(() => {
        if (Array.isArray(text)) {
            setTextArray(text);
        } else {
            setTextArray([text]);
        }
    }, [text]);

    const containerVariants = {
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
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    };

    // This matches the Automatix effect more closely
    const characterVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            scale: 0.98,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                ease: [0.16, 1, 0.3, 1], // Custom easing curve that matches Automatix
                filter: {
                    duration: duration * 0.8, // Blur clears slightly faster
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    };

    const renderText = (textLine: string, lineIndex: number) => {
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
                        <motion.span
                            key={charIndex}
                            variants={characterVariants}
                            className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors.join(' ')} bg-clip-text text-transparent` : ''}`}
                            style={{
                                // Progressive gradient reveal effect
                                background: gradient
                                    ? `linear-gradient(to right, ${gradientColors[0].includes('from-') ? 'var(--tw-gradient-from)' : gradientColors[0]}, ${gradientColors[1].includes('to-') ? 'var(--tw-gradient-to)' : gradientColors[1]})`
                                    : 'none',
                                backgroundClip: gradient ? 'text' : 'border-box',
                                WebkitBackgroundClip: gradient ? 'text' : 'border-box',
                                WebkitTextFillColor: gradient ? 'transparent' : 'currentColor',
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
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
            className={`${textSizeClasses[size]} ${fontWeightClasses[weight]} ${className}`}
        >
            {textArray.map((line, index) => renderText(line, index))}
        </div>
    );
};

// Specialized components for different use cases
export const AutomatixHeroText: React.FC<Omit<AutomatixTextRevealProps, 'gradient' | 'size' | 'weight'>> = (props) => {
    return (
        <AutomatixTextReveal
            {...props}
            gradient={true}
            size="7xl"
            weight="bold"
            gradientColors={['from-primary-600', 'to-secondary-600']}
            stagger={0.03}
            duration={1}
        />
    );
};

export const AutomatixSubtitleText: React.FC<Omit<AutomatixTextRevealProps, 'size' | 'weight'>> = (props) => {
    return (
        <AutomatixTextReveal
            {...props}
            size="2xl"
            weight="normal"
            stagger={0.02}
            duration={0.6}
        />
    );
};

export const AutomatixGradientText: React.FC<Omit<AutomatixTextRevealProps, 'gradient'>> = (props) => {
    return <AutomatixTextReveal {...props} gradient={true} />;
};
