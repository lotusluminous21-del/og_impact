import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

const pricingPlans = [
    {
        name: "Standard",
        description: "Ideal for small teams.",
        price: 900,
        period: "month",
        features: [
            "Up to 10 users",
            "Basic support",
            "Standard features"
        ],
        popular: false,
        cta: "Get Started",
        color: "from-gray-500 to-gray-600"
    },
    {
        name: "Pro",
        description: "Designed for expanding teams and advanced needs.",
        price: 1600,
        period: "month",
        features: [
            "Up to 50 users",
            "Advanced Analytics",
            "Priority support",
            "Custom workflows",
            "Enhanced Security"
        ],
        popular: true,
        cta: "Get Started",
        color: "from-primary-500 to-secondary-600"
    },
    {
        name: "Enterprise",
        description: "For large organizations",
        price: 2500,
        period: "month",
        features: [
            "Unlimited team members",
            "Custom AI models",
            "24/7 dedicated support",
            "Custom development",
            "Advanced security",
            "SLA guarantee"
        ],
        popular: false,
        cta: "Contact Sales",
        color: "from-secondary-500 to-pink-600"
    }
];

export const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-16 sm:py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div>
                        <AutomatixHeroText
                            text={[
                                "Simple Pricing",
                                "Transparent Pricing Plans"
                            ]}
                            className="text-gray-900 dark:text-white"
                            delay={1.0}
                            stagger={0.08}
                            duration={0.8}
                            blurIntensity={6}
                            effect="word-reveal"
                        />
                    </div>
                    <div>
                        <AutomatixSubtitleText
                            text="We offer adaptable pricing solutions for businesses of any size."
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                            delay={1.8}
                            stagger={0.04}
                            duration={0.7}
                            blurIntensity={5}
                            effect="word-reveal"
                        />
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                rotateY: -2,
                                filter: "blur(1px)"
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotateY: 0,
                                filter: "blur(0px)"
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.4 + index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            {plan.popular && (
                                <motion.div
                                    className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-secondary-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Popular
                                </motion.div>
                            )}

                            <motion.div
                                className={`bg-gray-50 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border-2 ${plan.popular
                                    ? 'border-secondary-600'
                                    : 'border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700'
                                    } transition-all duration-300`}
                                whileHover={{
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                            >
                                {/* Header */}
                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base mb-4 sm:mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="mb-4 sm:mb-6">
                                        <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base">/{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className="flex items-center text-gray-600 dark:text-neutral-400 text-sm sm:text-base"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: featureIndex * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </motion.div>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.div
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant={plan.popular ? "primary" : "outline"}
                                        size="lg"
                                        className="w-full"
                                        onClick={() => console.log(`${plan.name} plan selected`)}
                                    >
                                        {plan.cta}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 3.2 }}
                >
                    <p className="text-gray-600 dark:text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base px-4 sm:px-0">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500 px-4 sm:px-0">
                        Need a custom plan? <a href="#contact" className="text-primary-400 hover:text-primary-300 font-medium">Contact us</a> for enterprise solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

