
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-4"
            >
              Your Personal Medical Assistant
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-700 mb-6"
            >
              Track your medical history, manage medications, find hospitals, and review doctors - all in one place.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/register">
                <Button size="lg" className="shadow-lg shadow-primary-200 transition-all hover:scale-105">
                  Get Started
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="text-black hover:text-black transition-all hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.img 
                src="/lovable-uploads/8dbfe466-fef4-4869-bb10-54e67a4a6a23.png"
                alt="PocDoc Medical App" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
