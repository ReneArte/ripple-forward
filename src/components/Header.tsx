import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { User, Menu } from 'lucide-react';
const Header: React.FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 gentle-hover">
          <Logo size="md" />
          <span className="font-poppins font-semibold text-xl text-foreground">
            ItForward
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/profile" className="text-muted-foreground hover:text-orange-500 dark:hover:text-blue-400 transition-all duration-200 hover:text-lg hover:font-medium">
            My Profile
          </Link>
          <Link to="/my-ripples" className="text-muted-foreground hover:text-orange-500 dark:hover:text-blue-400 transition-all duration-200 hover:text-lg hover:font-medium">
            My Ripples
          </Link>
          <Link to="/splashes" className="text-muted-foreground hover:text-orange-500 dark:hover:text-blue-400 transition-all duration-200 hover:text-lg hover:font-medium">
            World Splashers
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/create">Celebrate Someone</Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;