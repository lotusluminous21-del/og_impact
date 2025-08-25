import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceCard } from '../ui/ServiceCard';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

const services = [
    {
        title: "Social Media Management",
        description: "We take full responsibility for managing all your social media platforms, ensuring your brand stays active, relevant, and engaging every single day.",
        features: ["Content Creation & Planning", "Multi-Platform Management", "Audience Engagement", "Performance Analytics"],
        icon: "📱"
    },
    {
        title: "Webinar Room",
        description: "Step into the future of online events with our Webinar Room, designed to accommodate up to 100 participants effortlessly.",
        features: ["Up to 100 Participants", "Real-time Q&A", "Screen Sharing", "Attendee Management"],
        icon: "🎥"
    },
    {
        title: "Automated Webinar System",
        description: "The perfect solution to run professional webinars without being live every time. Reach your audience on demand and provide consistent content.",
        features: ["Pre-recorded Playback", "Interactive Q&A Simulations", "Chat Automation", "Scheduled Sessions"],
        icon: "🤖"
    },
    {
        title: "Lead Capture & Autoresponders",
        description: "Take your email marketing to the next level with our system designed to handle up to 5,000 contacts and automate communication.",
        features: ["High-Converting Pages", "Automated Sequences", "Contact Management", "Performance Tracking"],
        icon: "📧"
    },
    {
        title: "AI Chatbot Development",
        description: "Bring your website to life with intelligent bots that interact with visitors, answer questions, and provide instant support 24/7.",
        features: ["Custom AI Responses", "Lead Generation", "Instant Support", "24/7 Availability"],
        icon: "💬"
    },
    {
        title: "Ad Campaign Setup",
        description: "Boost your business with expertly crafted advertising campaigns designed, targeted, and optimized to reach the right audience.",
        features: ["Campaign Strategy", "Ad Creation", "Targeting Optimization", "Performance Tracking"],
        icon: "📈"
    }
];

export const ServicesSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8,
            },
        },
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

    return (
        <section id="services" className="py-16 sm:py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Our Services Badge */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-6 sm:mb-8"
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="inline-block px-3 sm:px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-xs sm:text-sm font-medium rounded-full border border-gray-200 dark:border-neutral-700">
                        Our Services
                    </span>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <AutomatixHeroText
                        text="Expertise That Drives Quality"
                        className="text-gray-900 dark:text-white"
                        delay={1.0}
                        stagger={0.03}
                        duration={0.8}
                        blurIntensity={6}
                        effect="automatix-blur"
                    />
                    <AutomatixSubtitleText
                        text="With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently."
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                        delay={1.4}
                        stagger={0.04}
                        duration={0.7}
                        blurIntensity={5}
                        effect="word-reveal"
                    />
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            icon={service.icon}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                >
                    <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-400 mb-6 sm:mb-8 px-4 sm:px-0">
                        Ready to transform your business with cutting-edge technology?
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement('contact')}
                        className="w-full sm:w-auto"
                    >
                        Get Started Today
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

