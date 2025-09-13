'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { Logo } from './Logo';

export default function Header() {
  return (
    <motion.header
      className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            className='flex items-center gap-3'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          <motion.nav
            className='hidden md:flex items-center gap-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href='#features'
              className='text-muted-foreground hover:text-foreground transition-colors'
              data-testid='link-features'
            >
              Features
            </a>
            <a
              href='#examples'
              className='text-muted-foreground hover:text-foreground transition-colors'
              data-testid='link-examples'
            >
              Examples
            </a>
            <a
              href='#docs'
              className='text-muted-foreground hover:text-foreground transition-colors'
              data-testid='link-docs'
            >
              Docs
            </a>
          </motion.nav>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              variant='outline'
              size='sm'
              data-testid='button-github'
              onClick={() =>
                window.open(
                  'https://github.com/omojibola/dashboards-dev-cli',
                  '_blank'
                )
              }
            >
              <Github className='w-4 h-4 mr-2' />
              GitHub
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
