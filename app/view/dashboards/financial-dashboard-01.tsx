'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Download,
  Calendar,
} from 'lucide-react';

const FinancialDashboard01 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const transactions = [
    {
      id: 1,
      type: 'income',
      description: 'Client Payment - ABC Corp',
      amount: '+$12,500',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'expense',
      description: 'Office Supplies',
      amount: '-$340',
      time: '4 hours ago',
      status: 'pending',
    },
    {
      id: 3,
      type: 'income',
      description: 'Investment Returns',
      amount: '+$2,850',
      time: '1 day ago',
      status: 'completed',
    },
    {
      id: 4,
      type: 'expense',
      description: 'Software Subscription',
      amount: '-$99',
      time: '2 days ago',
      status: 'completed',
    },
    {
      id: 5,
      type: 'income',
      description: 'Freelance Project',
      amount: '+$5,200',
      time: '3 days ago',
      status: 'completed',
    },
  ];

  const portfolioItems = [
    {
      name: 'Technology Stocks',
      value: '$45,320',
      change: '+12.5%',
      positive: true,
    },
    { name: 'Real Estate', value: '$28,750', change: '+8.2%', positive: true },
    { name: 'Bonds', value: '$15,400', change: '-2.1%', positive: false },
    {
      name: 'Cryptocurrency',
      value: '$9,850',
      change: '+25.7%',
      positive: true,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='space-y-6'
    >
      {/* Header Actions */}
      <motion.div
        variants={cardVariants}
        className='flex justify-between items-center'
      >
        <div>
          <h2 className='text-2xl font-bold text-foreground'>
            Financial Overview
          </h2>
          <p className='text-muted-foreground'>
            Track your financial performance and investments
          </p>
        </div>
        <div className='flex space-x-2'>
          <Button variant='outline' size='sm' data-testid='button-export'>
            <Download className='w-4 h-4 mr-2' />
            Export
          </Button>
          <Button variant='outline' size='sm' data-testid='button-date-range'>
            <Calendar className='w-4 h-4 mr-2' />
            Last 30 days
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Cards */}
      <motion.div
        variants={cardVariants}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      >
        <Card className='hover-elevate'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              Total Balance
            </CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-foreground'>$124,563</div>
            <div className='flex items-center text-sm'>
              <TrendingUp className='w-4 h-4 mr-1 text-green-500' />
              <span className='text-green-500'>+20.1% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className='hover-elevate'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              Monthly Income
            </CardTitle>
            <TrendingUp className='h-4 w-4 text-green-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-foreground'>$18,245</div>
            <div className='flex items-center text-sm'>
              <ArrowUpRight className='w-4 h-4 mr-1 text-green-500' />
              <span className='text-green-500'>+15.3% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card className='hover-elevate'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              Monthly Expenses
            </CardTitle>
            <CreditCard className='h-4 w-4 text-red-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-foreground'>$7,892</div>
            <div className='flex items-center text-sm'>
              <ArrowDownRight className='w-4 h-4 mr-1 text-red-500' />
              <span className='text-red-500'>+5.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className='hover-elevate'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              Investment Growth
            </CardTitle>
            <Activity className='h-4 w-4 text-blue-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-foreground'>$99,320</div>
            <div className='flex items-center text-sm'>
              <TrendingUp className='w-4 h-4 mr-1 text-blue-500' />
              <span className='text-blue-500'>+8.7% portfolio growth</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Recent Transactions */}
        <motion.div variants={cardVariants} className='lg:col-span-2'>
          <Card className='hover-elevate'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-lg font-semibold'>
                  Recent Transactions
                </CardTitle>
                <Button
                  variant='ghost'
                  size='sm'
                  data-testid='button-view-all-transactions'
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className='flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors'
                >
                  <div className='flex items-center space-x-4'>
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === 'income'
                          ? 'bg-green-100 dark:bg-green-900/20'
                          : 'bg-red-100 dark:bg-red-900/20'
                      }`}
                    >
                      {transaction.type === 'income' ? (
                        <TrendingUp className='w-4 h-4 text-green-600' />
                      ) : (
                        <TrendingDown className='w-4 h-4 text-red-600' />
                      )}
                    </div>
                    <div>
                      <p className='font-medium text-foreground'>
                        {transaction.description}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {transaction.time}
                      </p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p
                      className={`font-semibold ${
                        transaction.type === 'income'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.amount}
                    </p>
                    <Badge
                      variant={
                        transaction.status === 'completed'
                          ? 'default'
                          : 'secondary'
                      }
                      className='text-xs'
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Investment Portfolio */}
        <motion.div variants={cardVariants}>
          <Card className='hover-elevate'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-lg font-semibold'>
                  Investment Portfolio
                </CardTitle>
                <Button variant='ghost' size='sm'>
                  <MoreVertical className='w-4 h-4' />
                </Button>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              {portfolioItems.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium text-foreground'>
                      {item.name}
                    </span>
                    <span className='text-sm font-semibold text-foreground'>
                      {item.value}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Progress
                      value={(index + 1) * 20}
                      className='flex-1 mr-3'
                      style={{ height: '6px' }}
                    />
                    <span
                      className={`text-sm font-medium ${
                        item.positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Budget Overview */}
      <motion.div variants={cardVariants}>
        <Card className='hover-elevate'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              Budget Overview
            </CardTitle>
            <p className='text-sm text-muted-foreground'>
              Monthly spending by category
            </p>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  category: 'Housing',
                  spent: 2800,
                  budget: 3500,
                  percentage: 80,
                },
                {
                  category: 'Food & Dining',
                  spent: 650,
                  budget: 800,
                  percentage: 81,
                },
                {
                  category: 'Transportation',
                  spent: 420,
                  budget: 600,
                  percentage: 70,
                },
                {
                  category: 'Entertainment',
                  spent: 180,
                  budget: 300,
                  percentage: 60,
                },
              ].map((item, index) => (
                <div key={index} className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium text-foreground'>
                      {item.category}
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      ${item.spent}/${item.budget}
                    </span>
                  </div>
                  <Progress value={item.percentage} className='h-2' />
                  <p className='text-xs text-muted-foreground'>
                    {item.percentage}% of budget used
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default FinancialDashboard01;
