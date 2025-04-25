
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <div className="bg-primary-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are using PocDoc to manage their healthcare journey more effectively.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button variant="secondary" size="lg" className="font-semibold">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/features">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-primary-700">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
