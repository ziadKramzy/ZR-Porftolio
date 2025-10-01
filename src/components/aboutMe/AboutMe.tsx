import React, { useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../../assets/profile.jpeg';
import DownloadButton from '../ui/DownloadButton';

const AboutMe: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="h-1 w-20 bg-blue-400 mb-8"></div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Hi, I'm <span className="text-blue-400 font-medium">Ziad Ramzy</span>, an ITI graduate with hands-on experience in full-stack development. I specialize in building modern, responsive web applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I've developed multiple projects that showcase my expertise in both frontend and backend technologies. My passion for clean code and innovative solutions drives me to create efficient, scalable, and maintainable applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
            
      
            <DownloadButton />
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-4 border-2 border-blue-600 rounded-2xl transform rotate-6"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
             
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;