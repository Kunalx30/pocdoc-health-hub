
import React from 'react';
import FeatureCard from './FeatureCard';
import { FileText, Clock, MapPin, Star } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-3">Our Features</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Everything you need to manage your health journey in one place, designed with simplicity and efficiency in mind.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={FileText} 
          title="Medical Diary" 
          description="Keep track of your medical events, appointments, and health history in one secure place."
          linkTo="/diary"
          delay={0}
        />
        
        <FeatureCard 
          icon={Clock} 
          title="Medication Reminders" 
          description="Never miss a dose again with timely medication alerts and tracking."
          linkTo="/reminders"
          delay={1}
        />
        
        <FeatureCard 
          icon={MapPin} 
          title="Hospital Locator" 
          description="Find hospitals and medical facilities near you when you need them the most."
          linkTo="/hospitals"
          delay={2}
        />
        
        <FeatureCard 
          icon={Star} 
          title="Doctor Reviews" 
          description="Read and share experiences with doctors to make informed healthcare decisions."
          linkTo="/reviews"
          delay={3}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
