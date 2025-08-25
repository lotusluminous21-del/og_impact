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
        <footer className="bg-black text-white border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4 text-secondary-400">OG Impact</h3>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Transforming businesses through innovative digital solutions and cutting-edge technology. Complete business automation from $28/month.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-lg hover:bg-primary-600 transition-colors duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
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
                            <h4 className="text-lg font-semibold mb-4 capitalize text-white">
                                {category}
                            </h4>
                            <ul className="space-y-3">
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
                                            className="text-neutral-400 hover:text-white transition-colors duration-300"
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
                    className="border-t border-neutral-800 mt-12 pt-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white">Email</h5>
                                <p className="text-neutral-400">Support@originalglobalimpact.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white">Phone</h5>
                                <p className="text-neutral-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white">Location</h5>
                                <p className="text-neutral-400">1309 Coffeen Avenue STE 1200 Sheridan, WY 82801</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-neutral-400 text-sm">
                        © {currentYear} OG Impact. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <span className="text-neutral-400 text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500" /> by OG Impact
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
