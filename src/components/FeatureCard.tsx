
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
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      className={cn(
        'feature-card rounded-lg border border-gray-100 p-6 shadow-sm', 
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
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 + 0.3, duration: 0.5 }}
        className="text-xl font-semibold mb-2"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 + 0.4, duration: 0.5 }}
        className="text-muted-foreground mb-6"
      >
        {description}
      </motion.p>
      <Link to={linkTo}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button variant="outline" className="transition-all">{buttonText}</Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
