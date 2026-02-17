'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react'; // Import Menu icon

// Define navLinks directly in this module
const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/projects', text: 'Projects' },
  { href: '/education', text: 'Education' },
  { href: '/about', text: 'About' },
];

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900">
      <h1 className="text-xl font-bold">William Lovo</h1>
      <div className="flex items-center space-x-4">
        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href={link.href}>{link.text}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button and Dropdown */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.text}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ModeToggle />
      </div>
    </div>
  );
}
