import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import thomasImage from '../../assets/thomas.png';

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
            y: 0
        }
    };

    return (
        <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Meet Our CEO
                        </h2>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                            A seasoned executive with over 20 years of top-level leadership experience driving business transformation and growth.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* CEO Image and Basic Info */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center lg:text-left"
                    >
                        <div className="relative mb-8">
                            <div className="relative w-64 h-64 mx-auto lg:mx-0 overflow-hidden rounded-full">
                                <img
                                    src={ceoInfo.image}
                                    alt={ceoInfo.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0">
                                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-white">
                            {ceoInfo.name}
                        </h3>
                        <p className="text-neutral-400 font-medium mb-6">
                            {ceoInfo.role}
                        </p>

                        <div className="flex justify-center lg:justify-start space-x-3">
                            <button className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                                <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                                <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* CEO Details */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        {/* Key Achievements */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Key Achievements</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {ceoInfo.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                                        <span className="text-neutral-300 text-sm">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Expertise */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {ceoInfo.expertise.map((expertise, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                        <span className="text-neutral-300 text-sm">{expertise}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Credentials */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Education & Credentials</h4>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-neutral-300 text-sm">Bachelor of Science in Accounting (Honors) - Florida State University</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-neutral-300 text-sm">Certified Public Accountant (New York & California)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-neutral-300 text-sm">Commercial Pilot License</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mt-16"
                >
                    <p className="text-neutral-400 mb-8">
                        Ready to work with our experienced leadership team?
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

