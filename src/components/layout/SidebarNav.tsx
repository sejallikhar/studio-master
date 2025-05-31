'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';
import { Home, BookOpen, CalendarDays, Zap, Users, MessageSquare, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const mainNavItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Tech Docs', href: '/docs', icon: BookOpen },
  { title: 'Events', href: '/events', icon: CalendarDays },
  { title: 'Trending Tech', href: '/trending', icon: Zap },
];

const secondaryNavItems: NavItem[] = [
  { title: 'People', href: '/people', icon: Users, disabled: true },
  { title: 'Chat', href: '/chat', icon: MessageSquare, disabled: true },
];


export default function SidebarNav() {
  const pathname = usePathname();

  const NavLink = ({ item }: { item: NavItem }) => (
    <SidebarMenuItem>
      <Link href={item.href} passHref legacyBehavior>
        <SidebarMenuButton
          asChild
          isActive={pathname === item.href}
          disabled={item.disabled}
          tooltip={item.title}
        >
          <a>
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );

  return (
    <>
      <SidebarHeader className="p-4">
         <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-primary"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          <h1 className="font-headline text-xl font-semibold text-sidebar-foreground">
            TechPulse
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </SidebarMenu>
        <Separator className="my-4" />
        <SidebarMenu>
           {secondaryNavItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter className="p-4 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </>
  );
}
