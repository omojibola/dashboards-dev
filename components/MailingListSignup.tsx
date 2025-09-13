'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function MailingListSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // todo: remove mock functionality - add real email signup API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Email signup submitted:', email);
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <section className='py-24 px-4 md:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='bg-primary/5 border-primary/20'>
              <CardContent className='p-8'>
                <motion.div
                  className='flex items-center justify-center mb-4'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <Check className='w-6 h-6 text-primary' />
                  </div>
                </motion.div>
                <motion.h3
                  className='text-xl font-semibold mb-2'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thanks for subscribing!
                </motion.h3>
                <motion.p
                  className='text-muted-foreground'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We'll notify you when new dashboard components are available.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-24 px-4 md:px-8'>
      <div className='max-w-2xl mx-auto text-center'>
        <motion.div
          className='space-y-4 mb-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className='flex items-center justify-center mb-4'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
          >
            <div className='p-3 bg-primary/10 rounded-full'>
              <Mail className='w-6 h-6 text-primary' />
            </div>
          </motion.div>
          <motion.h2
            className='text-3xl md:text-4xl font-bold'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className='text-xl text-muted-foreground'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get notified when we release new dashboard components and templates.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className='space-y-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='flex-1'
              data-testid='input-email-signup'
              required
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type='submit'
                disabled={isLoading || !email}
                data-testid='button-signup'
              >
                {isLoading ? 'Signing up...' : 'Sign up'}
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </motion.div>
          </div>
          <motion.p
            className='text-sm text-muted-foreground'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            No spam, unsubscribe anytime.
          </motion.p>
        </motion.form>
      </div>
    </section>
  );
}
