import { ModeToggle } from './theme-toggle';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <NavigationMenu className="hidden sm:flex"> {/* Hide on small screens, flex on sm and up */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Placeholder for mobile menu button - to be implemented next */}
        <div className="sm:hidden">
          {/* Mobile menu button will go here */}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
