import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <NavigationMenu className="hidden sm:flex">
          {' '}
          {/* Hide on small screens, flex on sm and up */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Placeholder for mobile menu button - to be implemented next */}
        <div className="sm:hidden">{/* Mobile menu button will go here */}</div>
        <ModeToggle />
      </div>
    </div>
  );
}
