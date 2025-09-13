export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className='flex items-center gap-0.5'>
        <div className='w-2 h-6 bg-foreground transform -skew-x-12' />
        <div className='w-2 h-6 bg-foreground transform -skew-x-12' />
      </div>
      <span className='font-mono text-lg font-medium ml-2'>
        dashboards.studio
      </span>
    </div>
  );
}
