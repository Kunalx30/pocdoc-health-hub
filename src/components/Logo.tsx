
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/8dbfe466-fef4-4869-bb10-54e67a4a6a23.png" 
        alt="PocDoc Logo" 
        className="h-10 w-10" 
      />
      <div className="flex flex-col">
        <span className="font-bold text-lg text-primary-800">PocDoc</span>
        <span className="text-xs text-muted-foreground">A Medical Health App For Everyone</span>
      </div>
    </Link>
  );
};

export default Logo;
