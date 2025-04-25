
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialty: string;
    hospital: string;
    experience: string;
    rating: number;
    reviewsCount: number;
    photo: string;
  };
  onViewClick: (doctorId: string) => void;
  variant?: 'full' | 'compact';
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onViewClick, variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={doctor.photo} alt={doctor.name} />
          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">{doctor.name}</div>
          <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < Math.floor(doctor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-1 text-xs">
              {doctor.rating} ({doctor.reviewsCount} reviews)
            </span>
          </div>
        </div>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => onViewClick(doctor.id)}
          className="shrink-0"
        >
          View
        </Button>
      </div>
    );
  }

  return (
    <Card className="p-4">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={doctor.photo} alt={doctor.name} />
          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          <p className="text-sm text-muted-foreground">{doctor.hospital}</p>
          <p className="text-sm">Experience: {doctor.experience}</p>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < Math.floor(doctor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm">
              {doctor.rating} ({doctor.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
