import type React from 'react';
interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <div className='flex items-center justify-between pb-6 border-b border-border'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <h1 className='text-2xl font-semibold text-foreground'>{title}</h1>
          {description && (
            <p className='text-sm text-muted-foreground mt-1'>{description}</p>
          )}
        </div>
        {actions && actions}
      </div>

      {children && <div className='flex items-center gap-2'>{children}</div>}
    </div>
  );
}
