import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import thomasImage from '../../assets/thomas.png';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';
import { CEOScriptDialog } from '../ui/CEOScriptDialog';

const ceoInfo = {
    name: 'Thomas N. Thurber',
    role: 'CEO & Strategic Business Leader',
    image: thomasImage,
    linkedin: '#',
    achievements: [
        '20+ Years Executive Leadership',
        '$500M+ in Investments & Financing',
        '$680M Annual Revenue Companies',
        '10+ Corporate Acquisitions',
        '30+ Countries Visited',
        'Certified Public Accountant'
    ],
    expertise: [
        'Strategic Business Growth',
        'Mergers & Acquisitions',
        'Corporate Restructuring',
        'Brand Development',
        'Operational Integration'
    ]
};

export const TeamSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
            y: 0
        }
    };

    return (
        <section id="team" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-12 sm:mb-16"
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <div>
                            <AutomatixHeroText
                                text="Meet Our CEO"
                                className="text-gray-900 dark:text-white"
                                delay={1.0}
                                stagger={0.08}
                                duration={0.8}
                                blurIntensity={6}
                                effect="word-reveal"
                            />
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <div>
                            <AutomatixSubtitleText
                                text="A seasoned executive with over 20 years of top-level leadership experience driving business transformation and growth."
                                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0 text-center"
                                delay={1.4}
                                stagger={0.04}
                                duration={0.7}
                                blurIntensity={5}
                                effect="word-reveal"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start"
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    {/* CEO Image and Basic Info */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center lg:text-left flex-shrink-0"
                    >
                        <div className="relative mb-6 sm:mb-8">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto lg:mx-0 overflow-hidden rounded-full">
                                <img
                                    src={ceoInfo.image}
                                    alt={ceoInfo.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>



                            <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-600 rounded-full flex items-center justify-center">
                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            {ceoInfo.name}
                        </h3>
                        <p className="text-gray-600 dark:text-neutral-400 font-medium mb-4 sm:mb-6">
                            {ceoInfo.role}
                        </p>

                        <div className="flex justify-center lg:justify-start space-x-3">
                            {/* CEO Script Button - first in the row, expands towards the right */}
                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="group relative inline-flex items-center justify-start w-7 h-7 sm:w-8 sm:h-8 hover:w-[100px] sm:hover:w-[110px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
                                title="Read Full Biography"
                            >
                                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 whitespace-nowrap px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                                    Read Me
                                </span>
                            </button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 group">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 group">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Spacer - takes up all available space with max width */}
                    <div className="hidden lg:block flex-1 max-w-56" />

                    {/* CEO Details */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 sm:space-y-8 flex-1"
                    >
                        {/* Key Achievements */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Key Achievements</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                {ceoInfo.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary-400 rounded-full flex-shrink-0"></div>
                                        <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Expertise */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Core Expertise</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                {ceoInfo.expertise.map((expertise, index) => (
                                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">{expertise}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Credentials */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Education & Credentials</h4>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">Bachelor of Science in Accounting (Honors) - Florida State University</span>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">Certified Public Accountant (New York & California)</span>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">Commercial Pilot License</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mt-12 sm:mt-16"
                    transition={{ delay: 2.8, duration: 0.8 }}
                >
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 sm:mb-8 px-4 sm:px-0">
                        Ready to work with our experienced leadership team?
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

            {/* CEO Script Dialog */}
            <CEOScriptDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </section>
    );
};

