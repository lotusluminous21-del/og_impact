import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';
import { ThemeToggle } from './ThemeToggle';
import { useOptimizedScroll } from '../../utils/performance';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixButton } from './AutomatixButton';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = memo(() => {
    const { isMenuOpen, toggleMenu, setActiveSection, activeSection } = useUIStore();
    const [isScrolled, setIsScrolled] = useState(false);

    // Optimized scroll handling
    useOptimizedScroll((scrollY) => {
        setIsScrolled(scrollY > 50);
    }, 16);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'why-us', label: 'Why Us' },
        { id: 'mission', label: 'Mission' },
        { id: 'services', label: 'Services' },
        { id: 'stats', label: 'Stats' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'team', label: 'Team' }
    ];

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        scrollToElement(sectionId);

        // Ensure the active section is set after a short delay to account for scroll animation
        setTimeout(() => {
            setActiveSection(sectionId);
        }, 100);
    };

    const handleMobileNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        toggleMenu(); // Only close menu for mobile
        scrollToElement(sectionId);

        // Ensure the active section is set after a short delay to account for scroll animation
        setTimeout(() => {
            setActiveSection(sectionId);
        }, 100);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg'
                : 'bg-white/80 dark:bg-black/80 backdrop-blur-md'
                } border-b border-gray-200 dark:border-neutral-800`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-0 text-xl font-bold cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            onClick={() => scrollToElement('home')}
                        >
                            <span className="text-secondary-400">OG</span>
                            <span className="text-gray-900 dark:text-white">Impact</span>
                            <div className="ml-1">
                                <img
                                    src="/src/assets/original_global_impact_logo.svg"
                                    alt="Original Global Impact Logo"
                                    className="h-5 w-5 object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                        ? 'text-primary-400'
                                        : 'text-gray-700 dark:text-white hover:text-primary-400'
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                                            layoutId="activeTab"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* CTA Button & Mobile Menu Button */}
                        <div className="flex items-center space-x-4">
                            {/* CTA Button */}
                            <AutomatixButton
                                onClick={() => scrollToElement('contact')}
                                variant="primary"
                                size="sm"
                                showArrow={true}
                                className="hidden md:flex"
                            >
                                Let's Talk
                            </AutomatixButton>

                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={toggleMenu}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-900 dark:text-white" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => handleMobileNavClick(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                        ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                                        : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800'
                                        }`}
                                    whileHover={{ x: 8 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={() => {
                                    scrollToElement('contact');
                                    toggleMenu();
                                }}
                                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors duration-200 flex items-center gap-2"
                                whileHover={{ x: 8 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Let's Talk
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
});

export { Navigation };
