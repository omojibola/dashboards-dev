'use client';

import type React from 'react';

import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className='flex min-h-screen w-full bg-background'>
        <AppSidebar />
        <main className='flex-1 p-6 overflow-auto'>{children}</main>
      </div>
    </SidebarProvider>
  );
}
