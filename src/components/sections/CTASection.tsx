import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';

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
        staggerChildren: 0.3
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
              Ready to Transform
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Your Digital Presence?
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              From social media management to AI chatbots, we've got everything you need to scale your business.
              Starting at just $28/month.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center space-x-8 text-neutral-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">$28</div>
              <div className="text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
