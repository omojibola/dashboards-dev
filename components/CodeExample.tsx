'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';

const examples = [
  {
    name: 'Analytics Dashboard',
    command: 'npx add dashboardstudio/analytics-dashboard',
    description:
      'Complete analytics dashboard with charts, metrics, and data tables',
    tags: ['Charts', 'Tables', 'KPIs'],
    category: 'Analytics',
    image: '/analytics-preview.png',
  },
  {
    name: 'E-commerce Admin',
    command: 'npx add dashboardstudio/ecommerce-admin',
    description:
      'Product management, orders, and customer analytics for online stores',
    tags: ['Products', 'Orders', 'Customers'],
    category: 'E-commerce',
    image: '/ecommerce-preview.png',
  },
  {
    name: 'CRM Dashboard',
    command: 'npx add dashboardstudio/crm-dashboard',
    description:
      'Customer relationship management with pipeline and contact views',
    tags: ['Contacts', 'Pipeline', 'Tasks'],
    category: 'Business',
    image: '/crm-preview.png',
  },
  {
    name: 'Finance Tracker',
    command: 'npx add dashboardstudio/finance-tracker',
    description:
      'Financial dashboard with budgets, expenses, and investment tracking',
    tags: ['Budgets', 'Expenses', 'Reports'],
    category: 'Finance',
    image: '/finance-preview.png',
  },
];

const categories = ['All', 'Analytics', 'E-commerce', 'Business', 'Finance'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function CodeExample() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCopy = async (command: string, index: number) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.warn('Failed to copy to clipboard:', err);
      // Fallback: could implement a different method or show error message
    }
  };

  const filteredExamples =
    activeCategory === 'All'
      ? examples
      : examples.filter((example) => example.category === activeCategory);

  return (
    <section id='examples' className='py-24 px-4 md:px-8 bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center space-y-4 mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='text-3xl md:text-5xl font-bold'>
            Ready-to-Use Dashboards
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Choose from our growing collection of dashboard templates. Each one
            installs in seconds.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className='flex flex-wrap gap-2 justify-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={activeCategory === category ? 'default' : 'outline'}
                size='sm'
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
                className='transition-all duration-200'
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredExamples.map((example, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className='hover-elevate transition-all duration-200 bg-muted/50'>
                <CardContent className='p-6'>
                  {/* Header with title, tags, and copy button */}
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-3 flex-1'>
                      <h3 className='text-xl font-semibold'>{example.name}</h3>
                      <div className='flex flex-wrap gap-1'>
                        {example.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant='secondary'
                            className='text-xs'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => handleCopy(example.command, index)}
                        data-testid={`button-copy-${index}`}
                        className='ml-4'
                      >
                        {copiedIndex === index ? (
                          <Check className='w-4 h-4' />
                        ) : (
                          <Copy className='w-4 h-4' />
                        )}
                      </Button>
                    </motion.div>
                  </div>

                  {/* Dashboard Image */}
                  <div className='relative mb-4 overflow-hidden rounded-lg'>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={example.image}
                        alt={`${example.name} preview`}
                        width={600}
                        height={300}
                        className='w-full h-48 object-cover'
                      />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className='text-muted-foreground text-sm mb-4'>
                    {example.description}
                  </p>

                  {/* Command */}
                  <div className='bg-background border rounded-lg p-3 font-mono text-sm'>
                    <span className='text-chart-3'>$ </span>
                    <span className='text-foreground break-all'>
                      {example.command}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
