'use client';

import type React from 'react';
import { Menu } from 'lucide-react';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className='flex min-h-screen w-full bg-background'>
        <AppSidebar />
        <main className='flex-1 overflow-auto'>
          <div className='sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <SidebarTrigger className='md:hidden'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle sidebar</span>
            </SidebarTrigger>
          </div>
          <div className='p-4 sm:p-6'>{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
