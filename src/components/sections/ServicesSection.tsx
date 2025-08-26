import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceCard } from '../ui/ServiceCard';
import { AutomatixButton } from '../ui/AutomatixButton';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

// Import service images
import socialMediaImage from '../../assets/a-professional--minimalist-office-desk-at-night--t.png';
import webinarRoomImage from '../../assets/an-empty--professional-video-recording-studio--per.png';
import automatedWebinarImage from '../../assets/a-dramatic-close-up-of-a-sleek--dark-themed-softwa.png';
import leadCaptureImage from '../../assets/a-high-resolution-photograph-of-a-modern-crm-dashb.png';
import aiChatbotImage from '../../assets/a-developer-s-dual-monitor-setup-in-a-dark-room--t.png';
import adCampaignImage from '../../assets/a-macro-shot-of-a-digital-advertising-dashboard-on.png';

const services = [
    {
        title: "Social Media Management",
        description: "We take full responsibility for managing all your social media platforms, ensuring your brand stays active, relevant, and engaging every single day.",
        fullDescription: "Managing social media takes time, consistency, and a clear strategy—three things that can be challenging when you're focused on running your business. That's where we come in.\n\nWe take full responsibility for managing all your social media platforms, ensuring your brand stays active, relevant, and engaging every single day. From planning and creating posts to scheduling, publishing, and interacting with your audience, we handle it all.\n\nOur approach is simple: we make your social media work for you without you having to lift a finger. Whether it's Facebook, Instagram, LinkedIn, TikTok, or any other platform, we keep your pages fresh, consistent, and aligned with your brand's voice.\n\nAnd the best part? Our complete social media management packages start from 150 dollars per month, giving you professional, worry-free service at an affordable cost.\n\nWith us managing your online presence, you can focus on what you do best—while we make sure your social media is always at its best.",
        pricing: "From $150/month",
        benefits: [
            "Content creation & planning",
            "Full platform management",
            "Brand voice consistency",
            "Performance analytics",
            "Audience engagement"
        ],
        features: ["Content Creation & Planning", "Multi-Platform Management", "Audience Engagement", "Performance Analytics"],
        icon: "📱"
    },
    {
        title: "Webinar Room",
        description: "Step into the future of online events with our Webinar Room, designed to accommodate up to 100 participants effortlessly.",
        fullDescription: "Step into the future of online events with our Webinar Room, designed to accommodate up to 100 participants effortlessly. Perfect for educators, coaches, and business professionals, our platform ensures smooth streaming, interactive chats, and a seamless experience for both hosts and attendees.\n\nFor just $30 per month, gain access to a fully equipped webinar room without any hidden costs. Enjoy features like attendee management, real-time Q&A, and screen sharing, all in one easy-to-use platform.\n\nConnect with your audience like never before. Whether it's training sessions, product launches, or interactive workshops, our webinar room gives you the tools to deliver professional and engaging presentations every time. Start hosting and expand your reach today!",
        pricing: "$30/month",
        benefits: [
            "Attendee management",
            "Professional streaming",
            "Up to 100 participants",
            "Screen sharing",
            "Real-time Q&A",
        ],
        features: ["Up to 100 Participants", "Real-time Q&A", "Screen Sharing", "Attendee Management"],
        icon: "🎥"
    },
    {
        title: "Automated Webinar System",
        description: "The perfect solution to run professional webinars without being live every time. Reach your audience on demand and provide consistent content.",
        fullDescription: "Introducing our Automated Webinar System – the perfect solution to run professional webinars without being live every time. Reach your audience on demand, provide consistent content, and free up your time while keeping engagement high.\n\nFor only $34 per month, you get a fully automated platform with features like pre-recorded video playback, interactive Q&A simulations, chat automation, and scheduled sessions. It's designed to give your webinars a live feel while running smoothly in the background.\n\nMaximize attendance and conversions without the stress of live hosting. Perfect for online courses, product launches, and marketing campaigns, our system lets you engage, educate, and convert your audience 24/7. Make your webinars work for you, even while you sleep!",
        pricing: "$34/month",
        benefits: [
            "Pre-recorded video playback",
            "Interactive Q&A simulations",
            "Scheduled sessions",
            "24/7 engagement",
            "Chat automation",
        ],
        features: ["Pre-recorded Playback", "Interactive Q&A Simulations", "Chat Automation", "Scheduled Sessions"],
        icon: "🤖"
    },
    {
        title: "Lead Capture & Autoresponders",
        description: "Take your email marketing to the next level with our system designed to handle up to 5,000 contacts and automate communication.",
        fullDescription: "Take your email marketing to the next level with our Autoresponders & Lead Capture Page Creator. Designed to handle up to 5,000 contacts, it makes building your audience, nurturing leads, and automating communication easier than ever.\n\nFor just $28 per month, you get a complete system to create high-converting lead capture pages, automated email sequences, and personalized follow-ups. Everything you need to engage your subscribers and grow your business is in one simple platform.\n\nTurn visitors into loyal customers effortlessly. With the Original Marketing System, you can manage your contacts, track performance, and optimize campaigns – all while saving time and increasing your revenue. Start automating your marketing today!",
        pricing: "$28/month",
        benefits: [
            "Personalized follow-ups",
            "High-converting pages",
            "Performance tracking",
            "Automated sequences",
            "Up to 5,000 contacts"
        ],
        features: ["High-Converting Pages", "Automated Sequences", "Contact Management", "Performance Tracking"],
        icon: "📧"
    },
    {
        title: "AI Chatbot Development",
        description: "Bring your website to life with intelligent bots that interact with visitors, answer questions, and provide instant support 24/7.",
        fullDescription: "Bring your website to life with our AI Bot Creation service. These intelligent bots interact with your visitors, answer questions, and provide instant support, giving your business a professional and responsive presence 24/7.\n\nGet started for a one-time fee of $450 plus $36/month to keep your bot running smoothly. Need extra AI-powered responses? Add 10,000 AI replies for just $100 to handle even more customer interactions effortlessly.\n\nWith an AI bot on your site, you can answer inquiries instantly, guide visitors, and even generate leads while you focus on growing your business. Provide top-notch service, boost conversions, and automate your communication with ease!",
        pricing: "$450 setup + $36/month",
        benefits: [
            "Scalable interactions",
            "Custom AI responses",
            "Lead generation",
            "24/7 availability",
            "Instant support",
        ],
        features: ["Custom AI Responses", "Lead Generation", "Instant Support", "24/7 Availability"],
        icon: "💬"
    },
    {
        title: "Ad Campaign Setup",
        description: "Boost your business with expertly crafted advertising campaigns designed, targeted, and optimized to reach the right audience.",
        fullDescription: "Boost your business with expertly crafted advertising campaigns. Our Ad Setup Service ensures your ads are designed, targeted, and optimized to reach the right audience and deliver measurable results.\n\nFor just $125, we handle everything from campaign strategy to ad creation, targeting, and setup across platforms. Save time and get professional results without the hassle of managing it yourself.\n\nReach potential customers, increase traffic, and grow your sales with ads that perform. With our service, your campaigns are ready to launch and optimized for success, giving you peace of mind and real business results!",
        pricing: "$125 one-time",
        benefits: [
            "Targeting optimization",
            "Performance tracking",
            "Professional results",
            "Campaign strategy",
            "Ad creation"
        ],
        features: ["Campaign Strategy", "Ad Creation", "Targeting Optimization", "Performance Tracking"],
        icon: "📈"
    }
];

export const ServicesSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Row-based expansion state instead of global
    const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

    // Add window size state to trigger recalculation
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1024,
        height: typeof window !== 'undefined' ? window.innerHeight : 768
    });

    // Calculate grid layout and row assignments
    const gridLayout = useMemo(() => {
        // Determine number of columns based on screen size
        // This matches the CSS grid classes: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        const getColumnsCount = () => {
            const width = windowSize.width;
            if (width >= 1024) return 3; // lg:grid-cols-3
            if (width >= 768) return 2;  // md:grid-cols-2
            return 1; // grid-cols-1
        };

        const columnsCount = getColumnsCount();
        const totalCards = services.length;
        const rowsCount = Math.ceil(totalCards / columnsCount);

        // Assign each card to its row
        const cardToRowMap = services.map((_, index) => Math.floor(index / columnsCount));

        // Group cards by row
        const rowToCardsMap = new Map<number, number[]>();
        for (let row = 0; row < rowsCount; row++) {
            rowToCardsMap.set(row, []);
        }

        cardToRowMap.forEach((row, cardIndex) => {
            rowToCardsMap.get(row)?.push(cardIndex);
        });

        // Debug log to verify row assignments
        console.log('Grid Layout Debug:', {
            windowWidth: windowSize.width,
            columnsCount,
            rowsCount,
            cardToRowMap,
            rowToCardsMap: Object.fromEntries(rowToCardsMap)
        });

        return {
            columnsCount,
            rowsCount,
            cardToRowMap,
            rowToCardsMap
        };
    }, [windowSize.width]); // Recalculate when window width changes

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleRow = (cardIndex: number) => {
        const rowIndex = gridLayout.cardToRowMap[cardIndex];
        const newExpandedRows = new Set(expandedRows);

        if (newExpandedRows.has(rowIndex)) {
            newExpandedRows.delete(rowIndex);
        } else {
            newExpandedRows.add(rowIndex);
        }

        setExpandedRows(newExpandedRows);
    };

    const isCardExpanded = (cardIndex: number) => {
        const rowIndex = gridLayout.cardToRowMap[cardIndex];
        return expandedRows.has(rowIndex);
    };

    // Removed unused containerVariants

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
                    transition={{ delay: 0.2, duration: 0.5 }}
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
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="mb-4 sm:mb-6">
                        <AutomatixHeroText
                            text="Expertise That Drives Quality"
                            className="text-gray-900 dark:text-white"
                            delay={0.2}
                            stagger={0.04}
                            duration={0.6}
                            blurIntensity={4}
                            effect="word-reveal"
                        />
                    </div>
                    <div>
                        <AutomatixSubtitleText
                            text="With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently."
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 text-center"
                            delay={0.4}
                            stagger={0.02}
                            duration={0.5}
                            blurIntensity={3}
                            effect="word-reveal"
                        />
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {services.map((service, index) => {
                        // Define images for each service card
                        const cardImages = [
                            socialMediaImage, // Social Media Management (top-left)
                            webinarRoomImage, // Webinar Room (middle-top)
                            automatedWebinarImage, // Automated Webinar System (top-right)
                            leadCaptureImage, // Lead Capture & Autoresponders (bottom-left)
                            aiChatbotImage, // AI Chatbot Development (bottom-middle)
                            adCampaignImage // Ad Campaign Setup (bottom-right)
                        ];

                        return (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                fullDescription={service.fullDescription}
                                pricing={service.pricing}
                                benefits={service.benefits}
                                features={service.features}
                                icon={service.icon}
                                index={index}
                                inView={inView}
                                image={cardImages[index]}
                                isExpanded={isCardExpanded(index)}
                                onToggle={() => handleToggleRow(index)}
                                rowInfo={{
                                    rowIndex: gridLayout.cardToRowMap[index],
                                    cardsInRow: gridLayout.rowToCardsMap.get(gridLayout.cardToRowMap[index]) || [],
                                    totalRows: gridLayout.rowsCount,
                                    columnsCount: gridLayout.columnsCount
                                }}
                            />
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-400 mb-6 sm:mb-8 px-4 sm:px-0">
                        Ready to transform your business with cutting-edge technology?
                    </p>
                    <AutomatixButton
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement('contact')}
                        showArrow={true}
                        className="w-full sm:w-auto"
                    >
                        Get Started Today
                    </AutomatixButton>
                </motion.div>
            </div>
        </section>
    );
};

