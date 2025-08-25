import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixHeroText, AutomatixSubtitleText } from '../ui/AutomatixTextReveal';

export const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
    <section id="cta" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <AutomatixHeroText
              text="Ready to Transform"
              className="text-gray-900 dark:text-white"
              delay={1.0}
              stagger={0.03}
              duration={0.8}
              blurIntensity={6}
              effect="automatix-blur"
            />
            <AutomatixHeroText
              text="Your Digital Presence?"
              className="text-gray-900 dark:text-white"
              delay={1.2}
              stagger={0.03}
              duration={0.8}
              blurIntensity={6}
              effect="automatix-blur"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <AutomatixSubtitleText
              text="From social media management to AI chatbots, we've got everything you need to scale your business. Starting at just $28/month."
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              delay={1.8}
              stagger={0.04}
              duration={0.7}
              blurIntensity={5}
              effect="word-reveal"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToElement('contact')}
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToElement('services')}
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600 dark:text-neutral-400"
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$28</div>
              <div className="text-xs sm:text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-xs sm:text-sm">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">100+</div>
              <div className="text-xs sm:text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
