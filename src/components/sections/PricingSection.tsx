import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

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
        <section id="pricing" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Simple Pricing
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Transparent Pricing Plans
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        We offer adaptable pricing solutions for businesses of any size.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            {plan.popular && (
                                <motion.div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Popular
                                </motion.div>
                            )}

                            <motion.div
                                className={`bg-neutral-900 rounded-2xl p-8 border-2 ${plan.popular
                                    ? 'border-secondary-600'
                                    : 'border-neutral-800 hover:border-neutral-700'
                                    } transition-all duration-300`}
                                whileHover={{
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                            >
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-neutral-400 mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">
                                            ${plan.price}
                                        </span>
                                        <span className="text-neutral-400">/{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className="flex items-center text-neutral-400"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: featureIndex * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-neutral-400 mb-4">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                    <p className="text-sm text-neutral-500">
                        Need a custom plan? <a href="#contact" className="text-primary-400 hover:text-primary-300 font-medium">Contact us</a> for enterprise solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

