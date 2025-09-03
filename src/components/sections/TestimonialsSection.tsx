import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Target,
    Globe,
    Users,
    Star,
    Zap as ZapIcon
} from 'lucide-react';
import { AutomatixTextReveal } from '../ui/AutomatixTextReveal';
import sarahMitchellImage from '../../assets/sarah-mitchell--marketing-director.png';

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Marketing Director",
        company: "Bloom & Grow",
        icon: ZapIcon,
        content: "Their social media management service transformed our online presence. We went from 500 to 15,000 followers in 6 months with 300% engagement increase. Outstanding results!",
        stats: {
            salesIncrease: "73%",
            resolutionTime: "5X"
        },
        avatar: sarahMitchellImage
    },
    {
        id: 2,
        name: "Marcus Weber",
        role: "Online Course Creator",
        company: "SkillMaster Academy",
        icon: Globe,
        content: "The automated webinar system is a game-changer! I can now reach students worldwide without being live 24/7. My course enrollment increased by 150% and I'm saving 20 hours per week. Absolutely brilliant solution!",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "E-commerce Owner",
        company: "Artisan Crafts Co.",
        icon: Target,
        content: "Their AI chatbot development service revolutionized our customer service. We handle 80% more inquiries automatically, and our conversion rate jumped by 45%. The bot feels so natural - customers love it!",
        rating: 5
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Small Business Owner",
        company: "Thompson Consulting",
        icon: Users,
        content: "The website builder and ad campaign setup services launched my business online in just 2 weeks. Professional results that look like I spent thousands. The ROI on their ad campaigns exceeded my expectations by 200%.",
        rating: 5
    }
];

export const TestimonialsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const featuredTestimonial = testimonials[0];
    const otherTestimonials = testimonials.slice(1);

    return (
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Testimonials Badge - Identical to WhyUsSection */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-6 sm:mb-8"
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="inline-block px-3 sm:px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-xs sm:text-sm font-medium rounded-full border border-gray-200 dark:border-neutral-700">
                        What Our Users Say
                    </span>
                </motion.div>

                {/* Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <div>
                            <AutomatixTextReveal
                                text="Trusted By Businesses Like Yours"
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-center"
                                delay={1.0}
                                stagger={0.08}
                                duration={0.8}
                                blurIntensity={6}
                                effect="word-reveal"
                                triggerOnScroll={true}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Featured Testimonial - Exact layout from image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-6 sm:mb-8 lg:mb-12"
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-16"
                    >
                        {/* Avatar Section - Left side */}
                        <div className="flex justify-center lg:justify-start lg:w-2/5">
                            <div className="relative">
                                <div className="w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-96 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden mb-4 sm:mb-6 lg:mb-8 border-2 border-gray-300 dark:border-neutral-700 shadow-2xl">
                                    <img
                                        src={featuredTestimonial.avatar}
                                        alt={`${featuredTestimonial.name} - ${featuredTestimonial.role}`}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section - Right side */}
                        <div className="lg:w-3/5">
                            {/* Company Info with Icon */}
                            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                                <featuredTestimonial.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-500 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg lg:text-xl">{featuredTestimonial.company}</span>
                            </div>

                            {/* Quote */}
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <AutomatixTextReveal
                                    text={`"${featuredTestimonial.content}"`}
                                    className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-900 dark:text-white leading-relaxed font-medium text-left"
                                    delay={0.2}
                                    stagger={0.02}
                                    duration={0.8}
                                    blurIntensity={3}
                                    effect="word-reveal"
                                    triggerOnScroll={true}
                                />
                            </div>

                            {/* Attribution */}
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <div className="mb-1 sm:mb-2">
                                    <AutomatixTextReveal
                                        text={featuredTestimonial.name}
                                        className="text-xl sm:text-2xl lg:text-xl font-bold text-gray-900 dark:text-white leading-tight text-left"
                                        delay={0.4}
                                        stagger={0.08}
                                        duration={0.6}
                                        blurIntensity={4}
                                        effect="word-reveal"
                                        triggerOnScroll={true}
                                    />
                                </div>
                                <AutomatixTextReveal
                                    text={featuredTestimonial.role}
                                    className="text-gray-700 dark:text-neutral-300 text-base sm:text-lg lg:text-lg leading-relaxed text-left"
                                    delay={0.5}
                                    stagger={0.04}
                                    duration={0.5}
                                    blurIntensity={3}
                                    effect="word-reveal"
                                    triggerOnScroll={true}
                                />
                            </div>

                            {/* Stats */}
                            {featuredTestimonial.stats && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                                    <div>
                                        <div className="mb-1 sm:mb-2 lg:mb-3">
                                            <AutomatixTextReveal
                                                text={featuredTestimonial.stats.salesIncrease}
                                                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                                                delay={0.6}
                                                stagger={0.1}
                                                duration={0.8}
                                                blurIntensity={5}
                                                effect="character-reveal"
                                                triggerOnScroll={true}
                                            />
                                        </div>
                                        <AutomatixTextReveal
                                            text="Sales increase in first month."
                                            className="text-gray-700 dark:text-neutral-300 text-base sm:text-lg lg:text-lg leading-relaxed text-left"
                                            delay={0.8}
                                            stagger={0.04}
                                            duration={0.6}
                                            blurIntensity={3}
                                            effect="word-reveal"
                                            triggerOnScroll={true}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-1 sm:mb-2 lg:mb-3">
                                            <AutomatixTextReveal
                                                text={featuredTestimonial.stats.resolutionTime}
                                                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                                                delay={0.7}
                                                stagger={0.1}
                                                duration={0.8}
                                                blurIntensity={5}
                                                effect="character-reveal"
                                                triggerOnScroll={true}
                                            />
                                        </div>
                                        <AutomatixTextReveal
                                            text="Faster customer resolutions."
                                            className="text-gray-700 dark:text-neutral-300 text-base sm:text-lg lg:text-lg leading-relaxed text-left"
                                            delay={0.9}
                                            stagger={0.04}
                                            duration={0.6}
                                            blurIntensity={3}
                                            effect="word-reveal"
                                            triggerOnScroll={true}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-6 sm:mb-8 lg:mb-16"
                    transition={{ delay: 2.2, duration: 0.8 }}
                >
                    <div className="w-full h-px bg-gray-300 dark:bg-neutral-700"></div>
                </motion.div>

                {/* Bottom Row Testimonials - Exact match to image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    transition={{ delay: 2.0, duration: 0.8 }}
                >
                    {otherTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="group relative p-6 rounded-xl transition-all duration-300"
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                rotateY: -2,
                                filter: "blur(1px)"
                            }}
                            animate={inView ? {
                                opacity: 1,
                                scale: 1,
                                rotateY: 0,
                                filter: "blur(0px)"
                            } : {
                                opacity: 0,
                                scale: 0.95,
                                rotateY: -2,
                                filter: "blur(1px)"
                            }}
                            transition={{
                                delay: 2.2 + (index * 0.08),
                                duration: 0.4,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            {/* Subtle background highlight on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/20 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Company Logo and Name */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <testimonial.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-neutral-400" />
                                    <span className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg">{testimonial.company}</span>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4 sm:mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <div className="mb-4 sm:mb-6">
                                    <AutomatixTextReveal
                                        text={`"${testimonial.content}"`}
                                        className="text-gray-600 dark:text-neutral-400 group-hover:text-gray-900 dark:group-hover:text-white text-base sm:text-lg leading-relaxed transition-colors duration-300 text-left"
                                        delay={0.2}
                                        stagger={0.02}
                                        duration={0.6}
                                        blurIntensity={3}
                                        effect="word-reveal"
                                        triggerOnScroll={true}
                                    />
                                </div>

                                {/* Attribution */}
                                <div>
                                    <div className="mb-1">
                                        <AutomatixTextReveal
                                            text={testimonial.name}
                                            className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg leading-tight text-left"
                                            delay={0.4}
                                            stagger={0.08}
                                            duration={0.5}
                                            blurIntensity={4}
                                            effect="word-reveal"
                                            triggerOnScroll={true}
                                        />
                                    </div>
                                    <AutomatixTextReveal
                                        text={testimonial.role}
                                        className="text-gray-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed text-left"
                                        delay={0.5}
                                        stagger={0.04}
                                        duration={0.4}
                                        blurIntensity={3}
                                        effect="word-reveal"
                                        triggerOnScroll={true}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

