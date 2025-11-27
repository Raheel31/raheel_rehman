import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Wrench, Layers } from 'lucide-react';
import { skills } from '../data/mock';
import { Badge } from './ui/badge';

const SkillCategory = ({ title, items, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-lg hover:border-gray-200">
        {/* Icon */}
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-black mb-6">
          {title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
            >
              <Badge
                variant="outline"
                className="bg-gray-50 text-gray-700 border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default font-normal py-1.5 px-3"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      items: skills.languages,
      icon: Code,
    },
    {
      title: 'Machine Learning',
      items: skills.machineLearning,
      icon: Brain,
    },
    {
      title: 'Data Science',
      items: skills.dataScience,
      icon: Database,
    },
    {
      title: 'Tools & Technologies',
      items: skills.toolsTechnologies,
      icon: Wrench,
    },
    {
      title: 'Additional Tools',
      items: skills.additionalTools,
      icon: Layers,
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 mb-4 tracking-widest uppercase"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extralight text-black tracking-tight"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mt-6 max-w-2xl text-lg"
          >
            A comprehensive toolkit for building intelligent systems from data pipelines to deployment.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
