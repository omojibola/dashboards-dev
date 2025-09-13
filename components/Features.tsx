'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Terminal, Zap, Palette, Code2, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: 'One Command Install',
    description:
      'Simply run npx add dashboardstudio/[component] and start building immediately.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Pre-built components that integrate seamlessly with your existing codebase.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description:
      'Built on shadcn/ui with CSS variables for easy theming and customization.',
  },
  {
    icon: Code2,
    title: 'TypeScript First',
    description:
      'Full TypeScript support with comprehensive type definitions out of the box.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description:
      'Battle-tested components used by thousands of developers in production.',
  },
  {
    icon: Rocket,
    title: 'Always Updated',
    description:
      'Regular updates with new components and features from the community.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Features() {
  return (
    <section id='features' className='py-24 px-4 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center space-y-4 mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='text-3xl md:text-5xl font-bold'>
            Built for Developers
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Stop building dashboards from scratch. Focus on your business logic
            while we handle the UI.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className='hover-elevate transition-all duration-200 h-full'>
                <CardContent className='p-6 space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg'>
                      <feature.icon className='w-5 h-5 text-primary' />
                    </div>
                    <h3 className='font-semibold text-lg'>{feature.title}</h3>
                  </div>
                  <p className='text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
