
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 animate-fade-in">
              Your Personal Medical Assistant
            </h1>
            <p className="text-lg text-gray-700 mb-6 animate-delayed-fade" style={{ '--delay': 2 } as React.CSSProperties}>
              Track your medical history, manage medications, find hospitals, and review doctors - all in one place.
            </p>
            <div className="flex flex-wrap gap-3 animate-delayed-fade" style={{ '--delay': 4 } as React.CSSProperties}>
              <Link to="/register">
                <Button size="lg" className="shadow-lg shadow-primary-200">
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/8dbfe466-fef4-4869-bb10-54e67a4a6a23.png"
                alt="PocDoc Medical App" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-delayed-fade" 
                style={{ '--delay': 6 } as React.CSSProperties}
              />
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
