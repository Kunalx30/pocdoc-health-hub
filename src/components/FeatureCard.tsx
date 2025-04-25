
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <div 
      className={cn(
        'feature-card animate-delayed-fade', 
        className
      )} 
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div className="mb-4 bg-primary-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default FeatureCard;
