import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { certifications } from '../data/mock';

const CertificationCard = ({ cert, index }) => {
  const [showDetails, setShowDetails] = useState(false);

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
        {/* Left Side - Cert Info */}
        <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
        <div className={`${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
            <div className="flex items-center gap-3 mb-2 md:justify-end">
            <Award className="w-5 h-5 text-gray-400" />
            <h3 className="text-2xl font-medium text-black">
                <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                >
                {cert.title}
                </a>
            </h3>
            </div>
            <div className="flex items-center gap-2 text-gray-400 md:justify-end">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{cert.period}</span>
            </div>
        </div>
        </div>
        {/* Right Side - Dropdown for Sub-Courses */}
        <div className={`mt-4 md:mt-0 ${index % 2 === 1 ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            {cert.subCourses && cert.subCourses.length > 0 && (
            <>
                <div className="flex justify-center mb-2">
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-black font-medium underline"
                >
                    {showDetails ? "Hide Courses" : "View Courses"}
                </button>
                </div>
                {showDetails && (
                <ul className="space-y-2 mt-2">
                    {cert.subCourses.map((course, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                        <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        {course.title}
                        </a>
                    </li>
                    ))}
                </ul>
                )}
            </>
            )}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  // Sort by period descending (most recent first)
  const sortedCerts = [...certifications].sort(
    (a, b) => parseInt(b.period) - parseInt(a.period)
  );

  return (
    <section id="certifications" className="py-32 bg-gray-50">
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
            Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extralight text-black tracking-tight"
          >
            Certifications & Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
          >
            Explore certifications and detailed course highlights.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-16">
          {sortedCerts.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
