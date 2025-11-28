import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { experience } from '../data/mock';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:-translate-x-px" />
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -translate-x-1.5 md:left-1/2 md:-translate-x-2"
      />

      {/* Content */}
      <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
        {/* Left Side - Company Info */}
        <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
          <div className={`${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
            <div className="flex items-center gap-3 mb-2 md:justify-end">
              <Building2 className="w-5 h-5 text-gray-400" />
              <h3 className="text-2xl font-medium text-black">
                {exp.company}
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-2">{exp.role}</p>
            <div className="flex items-center gap-2 text-gray-400 md:justify-end">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{exp.period}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Highlights */}
        <div className={`mt-4 md:mt-0 ${index % 2 === 1 ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start text-gray-600"
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 mb-4 tracking-widest uppercase"
          >
            Career
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extralight text-black tracking-tight"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
          >
            Building scalable, data-driven solutions across large, high-impact business environments.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-16">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
