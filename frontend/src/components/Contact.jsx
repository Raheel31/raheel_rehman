import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 mb-4 tracking-widest uppercase"
            >
              Get in Touch
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extralight text-black tracking-tight mb-8"
            >
              Let's Build{' '}
              <span className="font-medium">Something Amazing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-12"
            >
              Interested in collaboration, have a project in mind, or just want to chat? 
              I'd love to hear from you.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-gray-500 mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-black"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <link.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}

                {/* Hugging Face */}
                <motion.a
                  href={personalInfo.socialLinks.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-black"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <span className="text-xl group-hover:text-white transition-colors duration-300">🤗</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
