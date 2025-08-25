import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface EnhancedTextRevealProps {
    text: string | string[];
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    effect?: 'automatix' | 'blur-reveal' | 'gradient-sweep' | 'split-reveal' | 'wave' | 'magnetic' | 'parallax';
    gradient?: boolean;
    gradientColors?: string[];
    triggerOnScroll?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    blurIntensity?: number;
    waveSpeed?: number;
    magneticStrength?: number;
    parallaxIntensity?: number;
}

// Memoized character component for Automatix-style effects
const AutomatixCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    blurIntensity?: number;
}>(({ char, index, variants, gradient, gradientColors, delay, blurIntensity = 4 }) => (
    <motion.span
        variants={variants}
        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * 0.02}s`,
            filter: `blur(${blurIntensity}px)`,
        }}
        whileHover={{
            scale: 1.1,
            filter: "blur(0px)",
            transition: { duration: 0.2 }
        }}
    >
        {char === ' ' ? '\u00A0' : char}
    </motion.span>
));

// Memoized character component for blur reveal effect
const BlurRevealCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    blurIntensity?: number;
}>(({ char, index, variants, gradient, gradientColors, delay, blurIntensity = 8 }) => (
    <motion.span
        variants={variants}
        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * 0.03}s`,
            filter: `blur(${blurIntensity}px)`,
        }}
    >
        {char === ' ' ? '\u00A0' : char}
    </motion.span>
));

// Memoized character component for gradient sweep effect
const GradientSweepCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
}>(({ char, index, variants, gradient, gradientColors, delay }) => (
    <motion.span
        variants={variants}
        className="inline-block relative overflow-hidden"
        style={{
            animationDelay: `${delay + index * 0.04}s`,
        }}
    >
        <span className={`${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}>
            {char === ' ' ? '\u00A0' : char}
        </span>
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
                delay: delay + index * 0.04 + 0.5,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        />
    </motion.span>
));

// Memoized character component for wave effect
const WaveCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    waveSpeed?: number;
}>(({ char, index, variants, gradient, gradientColors, delay, waveSpeed = 0.1 }) => (
    <motion.span
        variants={variants}
        className={`inline-block ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * waveSpeed}s`,
        }}
        whileHover={{
            y: -10,
            scale: 1.2,
            transition: { duration: 0.3, ease: "easeOut" }
        }}
    >
        {char === ' ' ? '\u00A0' : char}
    </motion.span>
));

// Memoized character component for magnetic effect
const MagneticCharacter = memo<{
    char: string;
    index: number;
    variants: any;
    gradient?: boolean;
    gradientColors?: string[];
    delay: number;
    magneticStrength?: number;
}>(({ char, index, variants, gradient, gradientColors, delay, magneticStrength = 0.3 }) => (
    <motion.span
        variants={variants}
        className={`inline-block cursor-pointer ${gradient ? `bg-gradient-to-r ${gradientColors?.join(' ')} bg-clip-text text-transparent` : ''}`}
        style={{
            animationDelay: `${delay + index * 0.02}s`,
        }}
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
        }}
        drag
        dragConstraints={{ left: -magneticStrength * 20, right: magneticStrength * 20, top: -magneticStrength * 20, bottom: magneticStrength * 20 }}
        dragElastic={magneticStrength}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    >
        {char === ' ' ? '\u00A0' : char}
    </motion.span>
));

export const EnhancedTextReveal: React.FC<EnhancedTextRevealProps> = memo(({
    text,
    className = '',
    delay = 0,
    stagger = 0.05,
    duration = 0.8,
    effect = 'automatix',
    gradient = false,
    gradientColors = ['from-primary-600', 'to-secondary-600'],
    triggerOnScroll = false,
    direction = 'up',
    size = 'lg',
    weight = 'bold',
    blurIntensity = 4,
    waveSpeed = 0.1,
    magneticStrength = 0.3,
    parallaxIntensity = 0.5
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

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

    // Automatix-style container variants
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
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    };

    // Automatix-style character variants
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
                ease: [0.16, 1, 0.3, 1],
                filter: {
                    duration: duration * 0.8,
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    };

    // Blur reveal variants
    const blurRevealVariants = {
        hidden: {
            opacity: 0,
            filter: `blur(${blurIntensity}px)`,
            ...getDirectionTransform(),
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            ...getDirectionAnimate(),
            transition: {
                duration: duration,
                ease: [0.25, 0.46, 0.45, 0.94],
                filter: {
                    duration: duration * 1.2,
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    };

    // Gradient sweep variants
    const gradientSweepVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            ...getDirectionTransform(),
        },
        visible: {
            opacity: 1,
            scale: 1,
            ...getDirectionAnimate(),
            transition: {
                duration: duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Wave variants
    const waveVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Magnetic variants
    const magneticVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -5,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const renderAutomatixEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="flex flex-wrap justify-center">
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
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderBlurRevealEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <BlurRevealCharacter
                        key={charIndex}
                        char={char}
                        index={charIndex}
                        variants={blurRevealVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.1}
                        blurIntensity={blurIntensity}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderGradientSweepEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <GradientSweepCharacter
                        key={charIndex}
                        char={char}
                        index={charIndex}
                        variants={gradientSweepVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.1}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderWaveEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <WaveCharacter
                        key={charIndex}
                        char={char}
                        index={charIndex}
                        variants={waveVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.1}
                        waveSpeed={waveSpeed}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderMagneticEffect = (textLine: string, lineIndex: number) => (
        <motion.div
            key={lineIndex}
            className="overflow-hidden"
            initial="hidden"
            animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={automatixContainerVariants}
        >
            <div className="flex flex-wrap justify-center">
                {textLine.split('').map((char, charIndex) => (
                    <MagneticCharacter
                        key={charIndex}
                        char={char}
                        index={charIndex}
                        variants={magneticVariants}
                        gradient={gradient}
                        gradientColors={gradientColors}
                        delay={delay + lineIndex * 0.1}
                        magneticStrength={magneticStrength}
                    />
                ))}
            </div>
        </motion.div>
    );

    const renderParallaxEffect = (textLine: string, lineIndex: number) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, parallaxIntensity * 100]);

        return (
            <motion.div
                key={lineIndex}
                className="overflow-hidden"
                style={{ y }}
                initial="hidden"
                animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
                variants={automatixContainerVariants}
            >
                <div className="flex flex-wrap justify-center">
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
                        />
                    ))}
                </div>
            </motion.div>
        );
    };

    const renderEffect = () => {
        switch (effect) {
            case 'automatix':
                return textArray.map((line, index) => renderAutomatixEffect(line, index));
            case 'blur-reveal':
                return textArray.map((line, index) => renderBlurRevealEffect(line, index));
            case 'gradient-sweep':
                return textArray.map((line, index) => renderGradientSweepEffect(line, index));
            case 'wave':
                return textArray.map((line, index) => renderWaveEffect(line, index));
            case 'magnetic':
                return textArray.map((line, index) => renderMagneticEffect(line, index));
            case 'parallax':
                return textArray.map((line, index) => renderParallaxEffect(line, index));
            default:
                return textArray.map((line, index) => renderAutomatixEffect(line, index));
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
            className={`${textSizeClasses[size]} ${fontWeightClasses[weight]} ${className}`}
        >
            {renderEffect()}
        </div>
    );
});

// Specialized components for different effects
export const AutomatixStyleText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="automatix" />;
};

export const BlurRevealText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="blur-reveal" />;
};

export const GradientSweepText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="gradient-sweep" />;
};

export const WaveText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="wave" />;
};

export const MagneticText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="magnetic" />;
};

export const ParallaxText: React.FC<Omit<EnhancedTextRevealProps, 'effect'>> = (props) => {
    return <EnhancedTextReveal {...props} effect="parallax" />;
};

// Hero-specific components
export const EnhancedHeroText: React.FC<Omit<EnhancedTextRevealProps, 'effect' | 'gradient' | 'size' | 'weight'>> = (props) => {
    return (
        <EnhancedTextReveal
            {...props}
            effect="automatix"
            gradient={true}
            size="7xl"
            weight="bold"
            gradientColors={['from-primary-600', 'to-secondary-600']}
            stagger={0.03}
            duration={1}
            blurIntensity={6}
        />
    );
};

export const EnhancedSubtitleText: React.FC<Omit<EnhancedTextRevealProps, 'effect' | 'size' | 'weight'>> = (props) => {
    return (
        <EnhancedTextReveal
            {...props}
            effect="blur-reveal"
            size="2xl"
            weight="normal"
            stagger={0.02}
            duration={0.6}
            blurIntensity={8}
        />
    );
};

