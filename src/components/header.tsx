import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';

// Define navLinks directly in this module
const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact' },
];

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <NavigationMenu className="hidden sm:flex">
          {' '}
          {/* Hide on small screens, flex on sm and up */}
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
        {/* Placeholder for mobile menu button - to be implemented next */}
        <div className="sm:hidden">{/* Mobile menu button will go here */}</div>
        <ModeToggle />
      </div>
    </div>
  );
}
