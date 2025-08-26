import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const footerLinks = {
    company: [
        { name: 'Why Us', href: '#why-us' },
        { name: 'Mission', href: '#mission' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' }
    ],
    services: [
        { name: 'Social Media Management', href: '#services' },
        { name: 'Webinar Room', href: '#services' },
        { name: 'Automated Webinar System', href: '#services' },
        { name: 'Lead Capture & Autoresponders', href: '#services' },
        { name: 'AI Chatbot Development', href: '#services' },
        { name: 'Ad Campaign Setup', href: '#services' }
    ],
    resources: [
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Support', href: '#contact' },
        { name: 'Documentation', href: '#contact' }
    ],
    legal: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' }
    ]
};

const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'YouTube', href: '#', icon: Youtube }
];

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-secondary-400">OG Impact</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                            Transforming businesses through innovative digital solutions and cutting-edge technology. Complete business automation from $28/month.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-lg hover:bg-primary-600 transition-colors duration-300"
                                >
                                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 capitalize text-gray-900 dark:text-white">
                                {category}
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Info */}
                <motion.div
                    className="border-t border-gray-200 dark:border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h5>
                                <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">Support@originalglobalimpact.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</h5>
                                <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 sm:col-span-2 lg:col-span-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</h5>
                                <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm">1309 Coffeen Avenue STE 1200 Sheridan, WY 82801</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-gray-200 dark:border-neutral-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm text-center sm:text-left">
                        © {currentYear} OG Impact. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <span className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm flex items-center gap-1">
                            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> by Lotus
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
