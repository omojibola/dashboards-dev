'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation'; // 👈 import pathname hook
import {
  CreditCard,
  Users,
  GraduationCap,
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  UserCheck,
  MessageSquare,
  Calendar,
  BookOpen,
  ChevronDown,
  ChevronRight,
  User,
  Settings,
  LogOut,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from './Logo';

interface NavigationItem {
  title: string;
  icon: any;
  items: {
    title: string;
    icon: any;
    href?: string;
  }[];
}

const menuItems: NavigationItem[] = [
  {
    title: 'Sales',
    icon: TrendingUp,
    items: [
      { title: 'Pipeline', icon: BarChart3, href: '/sales/pipeline' },
      { title: 'Leads', icon: Users, href: '/sales/leads' },
      {
        title: 'Opportunities',
        icon: DollarSign,
        href: '/sales/opportunities',
      },
      { title: 'Reports', icon: PieChart, href: '/sales/reports' },
    ],
  },
  {
    title: 'Fintech',
    icon: CreditCard,
    items: [
      { title: 'Fintech 01', icon: BarChart3, href: '/fintech/fintech-01' },
      {
        title: 'Transactions',
        icon: DollarSign,
        href: '/fintech/transactions',
      },
      { title: 'Analytics', icon: PieChart, href: '/fintech/analytics' },
      { title: 'Compliance', icon: UserCheck, href: '/fintech/compliance' },
    ],
  },
  {
    title: 'CRM',
    icon: Users,
    items: [
      { title: 'Contacts', icon: Users, href: '/crm/contacts' },
      {
        title: 'Communications',
        icon: MessageSquare,
        href: '/crm/communications',
      },
      { title: 'Activities', icon: Calendar, href: '/crm/activities' },
      { title: 'Reports', icon: BarChart3, href: '/crm/reports' },
    ],
  },
  {
    title: 'School Management',
    icon: GraduationCap,
    items: [
      { title: 'Students', icon: Users, href: '/school/students' },
      { title: 'Courses', icon: BookOpen, href: '/school/courses' },
      { title: 'Schedule', icon: Calendar, href: '/school/schedule' },
      { title: 'Reports', icon: BarChart3, href: '/school/reports' },
    ],
  },
];

export function AppSidebar() {
  const [openSections, setOpenSections] = useState<string[]>(['Fintech']);
  const pathname = usePathname(); // 👈 current path

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className='border-r border-sidebar-border'>
      <SidebarHeader className='p-6'>
        <div className='flex items-center gap-2'>
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2'>
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Collapsible
                    open={openSections.includes(item.title)}
                    onOpenChange={() => toggleSection(item.title)}
                  >
                    <CollapsibleTrigger asChild className='cursor-pointer'>
                      <SidebarMenuButton className='w-full justify-between'>
                        <div className='flex items-center gap-2'>
                          <item.icon className='h-4 w-4' />
                          <span>{item.title}</span>
                        </div>
                        {openSections.includes(item.title) ? (
                          <ChevronDown className='h-4 w-4' />
                        ) : (
                          <ChevronRight className='h-4 w-4' />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu className='ml-4 mt-1'>
                        {item.items.map((subItem) => {
                          const isActive = pathname === subItem.href;
                          return (
                            <SidebarMenuItem key={subItem.title}>
                              {subItem.href ? (
                                <SidebarMenuButton
                                  className={`text-sm cursor-pointer ${
                                    isActive
                                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                                      : ''
                                  }`}
                                >
                                  <subItem.icon className='h-4 w-4' />
                                  <a href={subItem.href}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuButton>
                              ) : (
                                <SidebarMenuButton className='text-sm'>
                                  <subItem.icon className='h-4 w-4' />
                                  <span>{subItem.title}</span>
                                </SidebarMenuButton>
                              )}
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='p-4 border-t border-sidebar-border'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-full justify-start p-2 h-auto'>
              <div className='flex items-center gap-3 w-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src='/avatars/user-01.png' />
                  <AvatarFallback className='bg-primary text-primary-foreground'>
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className='flex-1 text-left'>
                  <p className='text-sm font-medium'>John Doe</p>
                  <p className='text-xs text-muted-foreground'>
                    john@company.com
                  </p>
                </div>
                <ChevronRight className='h-4 w-4' />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuItem>
              <User className='h-4 w-4 mr-2' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='h-4 w-4 mr-2' />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className='h-4 w-4 mr-2' />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
