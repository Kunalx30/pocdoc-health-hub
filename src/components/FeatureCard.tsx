
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo: string;
  buttonText?: string;
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  linkTo,
  buttonText = 'Get Started',
  delay = 0,
  className,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'feature-card', 
        className
      )}
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="mb-4 bg-primary-50 p-3 rounded-full w-12 h-12 flex items-center justify-center"
      >
        <Icon className="text-primary" size={24} />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline" className="transition-all hover:scale-105">{buttonText}</Button>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
