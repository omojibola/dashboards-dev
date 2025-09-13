'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Logo } from './Logo';

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

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

export default function Footer() {
  return (
    <footer className='border-t border-border bg-background'>
      <div className='max-w-6xl mx-auto px-4 md:px-8 py-12'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className='space-y-4' variants={linkVariants}>
            <div className='flex items-center gap-3'>
              <Logo />
            </div>
            <p className='text-muted-foreground text-sm'>
              Beautiful dashboard components for modern developers. Built on
              shadcn/ui.
            </p>
            <div className='flex items-center gap-2'>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant='ghost'
                  size='sm'
                  data-testid='button-github-footer'
                >
                  <Github className='w-4 h-4' />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant='ghost' size='sm' data-testid='button-twitter'>
                  <Twitter className='w-4 h-4' />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className='space-y-4' variants={linkVariants}>
            <h4 className='font-semibold'>Product</h4>
            <div className='space-y-2 text-sm'>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-components'
              >
                Components
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-templates'
              >
                Templates
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-pricing'
              >
                Pricing
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-changelog'
              >
                Changelog
              </motion.a>
            </div>
          </motion.div>

          <motion.div className='space-y-4' variants={linkVariants}>
            <h4 className='font-semibold'>Resources</h4>
            <div className='space-y-2 text-sm'>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-documentation'
              >
                Documentation
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-examples-footer'
              >
                Examples
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-community'
              >
                Community
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-support'
              >
                Support
              </motion.a>
            </div>
          </motion.div>

          <motion.div className='space-y-4' variants={linkVariants}>
            <h4 className='font-semibold'>Company</h4>
            <div className='space-y-2 text-sm'>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-about'
              >
                About
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-blog'
              >
                Blog
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-privacy'
              >
                Privacy
              </motion.a>
              <motion.a
                href='#'
                className='block text-muted-foreground hover:text-foreground transition-colors'
                whileHover={{ x: 5 }}
                data-testid='link-terms'
              >
                Terms
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2024 dashboards.studio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
