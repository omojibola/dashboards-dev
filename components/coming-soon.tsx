'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export function ComingSoon({
  title = 'Coming Soon',
  description = 'This feature is currently under development and will be available soon.',
}: ComingSoonProps) {
  return (
    <div className='flex items-center justify-center min-h-[60vh]'>
      <Card className='w-full max-w-md mx-auto'>
        <CardContent className='flex flex-col items-center text-center p-8'>
          <h1 className='text-2xl font-bold mb-3'>{title}</h1>
          <p className='text-muted-foreground mb-6 leading-relaxed'>
            {description}
          </p>

          <div className='flex flex-col gap-3 w-full'>
            <Button asChild className='w-full'>
              <Link href='/'>Back Home</Link>
            </Button>

            <p className='text-xs text-muted-foreground'>
              We're working hard to bring you this feature. Stay tuned!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
