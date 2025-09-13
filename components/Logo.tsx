'use client';
import { useRouter } from 'next/navigation';

export function Logo({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div
      className={`flex items-center gap-1 cursor-pointer ${className}`}
      onClick={() => router.push('/')}
    >
      <div className='flex items-center gap-0.5'>
        <div className='w-2 h-6 bg-foreground transform -skew-x-12' />
        <div className='w-2 h-6 bg-foreground transform -skew-x-12' />
      </div>
      <span className='font-mono text-sm font-medium ml-2'>
        dashboards.studio
      </span>
    </div>
  );
}
