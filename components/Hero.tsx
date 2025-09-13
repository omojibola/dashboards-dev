'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TYPEWRITER_COMMAND = 'npx dashboard-studio add fintech/overview';

export default function Hero() {
  const router = useRouter();

  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= TYPEWRITER_COMMAND.length) {
        setDisplayedCommand(TYPEWRITER_COMMAND.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TYPEWRITER_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Failed to copy to clipboard:', err);
      // Fallback: could implement a different method or show error message
    }
  };

  return (
    <section
      className='min-h-screen flex items-center justify-center px-4 md:px-8 pt-16 relative'
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
    >
      <div className='max-w-4xl mx-auto text-center space-y-8 relative z-10'>
        <motion.div
          className='space-y-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className='text-4xl md:text-6xl font-bold tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Beautiful dashboards,
            <br />
            <span className='text-muted-foreground'>One Command</span>
          </motion.h1>
          <motion.p
            className='text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Inject beautiful, production-ready dashboard components into your
            project with a single command. Built on shadcn/ui.
          </motion.p>
        </motion.div>

        <motion.div
          className='relative'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className='bg-card border border-border rounded-lg p-6 font-mono text-left max-w-2xl mx-auto'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-destructive'></div>
                <div className='w-3 h-3 rounded-full bg-chart-1'></div>
                <div className='w-3 h-3 rounded-full bg-chart-3'></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isTypingComplete ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={handleCopy}
                  data-testid='button-copy-command'
                >
                  {copied ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </Button>
              </motion.div>
            </div>
            <div className='text-sm'>
              <span className='text-chart-3'>$ </span>
              <span className='text-foreground'>
                {displayedCommand}
                {!isTypingComplete && <span className='animate-pulse'>|</span>}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button size='lg' data-testid='button-get-started'>
            Get Started
            <ArrowRight className='w-4 h-4 ml-2' />
          </Button>
          <Button
            variant='outline'
            size='lg'
            data-testid='button-view-gallery'
            onClick={() => router.push('/database/overview')}
          >
            View Gallery
          </Button>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-sm text-muted-foreground'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className='space-y-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className='font-semibold text-foreground'>50+ Components</div>
            <div>Analytics, CRM, eCommerce dashboards and more</div>
          </motion.div>
          <motion.div
            className='space-y-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className='font-semibold text-foreground'>
              TypeScript Ready
            </div>
            <div>Fully typed components with IntelliSense support</div>
          </motion.div>
          <motion.div
            className='space-y-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className='font-semibold text-foreground'>shadcn/ui Based</div>
            <div>Built on the components you already love</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
