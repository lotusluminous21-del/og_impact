import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    MessageSquare,
    Video,
    Bot,
    Mail,
    Target,
    Globe,
    TrendingUp,
    Users,
    Zap,
    Star,
    Zap as ZapIcon
} from 'lucide-react';

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
        avatar: "/src/assets/sarah-mitchell--marketing-director.png"
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
                staggerChildren: 0.2
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
        <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Testimonials Badge - Identical to WhyUsSection */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-full border border-neutral-700">
                        What Our Users Say
                    </span>
                </motion.div>

                {/* Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            Trusted By Businesses Like Yours
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Main Featured Testimonial - Exact layout from image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16"
                    >
                        {/* Avatar Section - Left side */}
                        <div className="flex justify-center lg:justify-start lg:w-2/5">
                            <div className="relative">
                                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden mb-8 border-2 border-neutral-700 shadow-2xl">
                                    <img
                                        src={featuredTestimonial.avatar}
                                        alt={`${featuredTestimonial.name} - ${featuredTestimonial.role}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section - Right side */}
                        <div className="lg:w-3/5">
                            {/* Company Info with Icon */}
                            <div className="flex items-center gap-4 mb-8">
                                <featuredTestimonial.icon className="w-8 h-8 text-orange-500" />
                                <span className="text-white font-semibold text-xl">{featuredTestimonial.company}</span>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10 font-medium">
                                "{featuredTestimonial.content}"
                            </blockquote>

                            {/* Attribution */}
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {featuredTestimonial.name}
                                </h3>
                                <p className="text-neutral-300 text-xl">
                                    {featuredTestimonial.role}
                                </p>
                            </div>

                            {/* Stats */}
                            {featuredTestimonial.stats && (
                                <div className="grid grid-cols-2 gap-12">
                                    <div>
                                        <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                                            {featuredTestimonial.stats.salesIncrease}
                                        </div>
                                        <div className="text-neutral-300 text-lg">
                                            Sales increase in first month.
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                                            {featuredTestimonial.stats.resolutionTime}
                                        </div>
                                        <div className="text-neutral-300 text-lg">
                                            Faster customer resolutions.
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Row Testimonials - Exact match to image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {otherTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="group"
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Company Logo and Name */}
                            <div className="flex items-center gap-4 mb-6">
                                <testimonial.icon className="w-6 h-6 text-neutral-400" />
                                <span className="text-white font-semibold text-lg">{testimonial.company}</span>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-white text-lg leading-relaxed mb-6">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Attribution */}
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    {testimonial.name}
                                </h4>
                                <p className="text-neutral-300 text-base">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

