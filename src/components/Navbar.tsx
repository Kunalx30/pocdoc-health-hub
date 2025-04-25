
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  FileText, 
  Clock, 
  MapPin, 
  Star, 
  LogIn,
  User
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/diary" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <FileText size={18} />
            <span>Medical Diary</span>
          </Link>
          <Link to="/reminders" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Clock size={18} />
            <span>Medication</span>
          </Link>
          <Link to="/hospitals" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <MapPin size={18} />
            <span>Hospitals</span>
          </Link>
          <Link to="/reviews" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            <Star size={18} />
            <span>Reviews</span>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="ml-2">
              <LogIn size={18} className="mr-1" /> Login
            </Button>
          </Link>
          <Link to="/register">
            <Button>
              <User size={18} className="mr-1" /> Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg animate-fade-in">
          <div className="space-y-3">
            <Link 
              to="/diary" 
              className="flex items-center gap-2 p-2 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText size={20} className="text-primary" />
              <span>Medical Diary</span>
            </Link>
            <Link 
              to="/reminders" 
              className="flex items-center gap-2 p-2 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Clock size={20} className="text-primary" />
              <span>Medication Reminders</span>
            </Link>
            <Link 
              to="/hospitals" 
              className="flex items-center gap-2 p-2 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin size={20} className="text-primary" />
              <span>Hospital Locations</span>
            </Link>
            <Link 
              to="/reviews" 
              className="flex items-center gap-2 p-2 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Star size={20} className="text-primary" />
              <span>Doctor Reviews</span>
            </Link>
            <div className="pt-2 flex gap-2">
              <Link to="/login" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  <LogIn size={18} className="mr-1" /> Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">
                  <User size={18} className="mr-1" /> Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
