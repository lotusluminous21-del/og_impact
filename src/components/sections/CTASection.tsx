import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AutomatixButton } from '../ui/AutomatixButton';
import { scrollToElement } from '../../utils/scrollUtils';
import { AutomatixTextReveal } from '../ui/AutomatixTextReveal';

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
        staggerChildren: 0.2,
        delayChildren: 0.3
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
            <div>
              <AutomatixTextReveal
                text={[
                  "Ready to Transform",
                  "Your Digital Presence?"
                ]}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-center"
                delay={0.2}
                stagger={0.08}
                duration={0.8}
                blurIntensity={4}
                effect="word-reveal"
                triggerOnScroll={true}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div>
              <AutomatixTextReveal
                text="From social media management to AI chatbots, we've got everything you need to scale your business. Starting at just $28/month."
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed text-center"
                delay={0.4}
                stagger={0.02}
                duration={0.5}
                blurIntensity={3}
                effect="word-reveal"
                triggerOnScroll={true}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <AutomatixButton
              variant="primary"
              size="lg"
              onClick={() => scrollToElement('contact')}
              showArrow={true}
              className="w-full sm:w-auto"
            >
              Start Your Project
            </AutomatixButton>
            <AutomatixButton
              variant="outline"
              size="lg"
              onClick={() => scrollToElement('services')}
              className="w-full sm:w-auto"
            >
              Explore Services
            </AutomatixButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600 dark:text-neutral-400"
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center">
              <div>
                <AutomatixTextReveal
                  text="$28"
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                  delay={0.2}
                  stagger={0.1}
                  duration={0.6}
                  blurIntensity={4}
                  effect="character-reveal"
                  triggerOnScroll={true}
                />
              </div>
              <div className="text-xs sm:text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div>
                <AutomatixTextReveal
                  text="24/7"
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                  delay={0.3}
                  stagger={0.1}
                  duration={0.6}
                  blurIntensity={4}
                  effect="character-reveal"
                  triggerOnScroll={true}
                />
              </div>
              <div className="text-xs sm:text-sm">AI Support</div>
            </div>
            <div className="text-center">
              <div>
                <AutomatixTextReveal
                  text="100+"
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                  delay={0.4}
                  stagger={0.1}
                  duration={0.6}
                  blurIntensity={4}
                  effect="character-reveal"
                  triggerOnScroll={true}
                />
              </div>
              <div className="text-xs sm:text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
