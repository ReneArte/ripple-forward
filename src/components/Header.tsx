import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 gentle-hover">
          <Logo size="md" />
          <span className="font-poppins font-semibold text-xl text-foreground">
            ItForward
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/splashes" className="text-muted-foreground hover:text-foreground transition-colors">
            Explore Splashes
          </Link>
          <Link to="/my-ripples" className="text-muted-foreground hover:text-foreground transition-colors">
            My Ripples
          </Link>
          <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-hope-green hover:bg-hope-green-dark text-white">
            Celebrate Someone
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;