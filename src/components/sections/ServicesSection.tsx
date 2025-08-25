import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/ServiceCard';
import { Button } from '../ui/Button';

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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
        <section id="services" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Our Services Badge */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-full border border-neutral-700">
                        Our Services
                    </span>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Expertise That Drives Quality
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            icon={service.icon}
                        />
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-lg text-neutral-400 mb-8">
                        Ready to transform your business with cutting-edge technology?
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Started Today
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

