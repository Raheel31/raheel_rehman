import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:border-gray-200 hover:-translate-y-2">
        {/* Project Number */}
        <div className="absolute top-6 right-6 text-6xl font-extralight text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
          0{index + 1}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-xl font-medium text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="mb-8">
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.githubLink && (
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {project.demoLink && (
              <Button
                size="sm"
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-6 h-6 text-gray-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-50">
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
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extralight text-black tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mt-6 max-w-2xl text-lg"
          >
            An overview of applied AI and ML projects spanning LLMs, deep learning, and data science workflows.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
