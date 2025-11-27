import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, aboutMe } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background Shape */}
              <div className="absolute inset-4 bg-gray-100 rounded-3xl -rotate-6" />
              <div className="absolute inset-4 bg-gray-50 rounded-3xl rotate-3" />
              
              {/* Profile Image Placeholder */}
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-5xl font-extralight text-gray-500">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Profile Image</p>
                  <p className="text-xs text-gray-400 mt-1">/assets/profile.png</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-gray-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 mb-4 tracking-widest uppercase"
            >
              About Me
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extralight text-black tracking-tight mb-8"
            >
              Crafting Intelligence,{' '}
              <span className="font-medium">One Model at a Time</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {aboutMe.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100"
            >
              <div>
                <p className="text-3xl lg:text-4xl font-extralight text-black">3+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extralight text-black">5+</p>
                <p className="text-sm text-gray-500 mt-1">AI Projects</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extralight text-black">40%</p>
                <p className="text-sm text-gray-500 mt-1">Efficiency Gain</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
