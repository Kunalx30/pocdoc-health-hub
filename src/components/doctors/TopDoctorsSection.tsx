
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DoctorCard from './DoctorCard';

interface TopDoctorsSectionProps {
  doctors: Array<{
    id: string;
    name: string;
    specialty: string;
    hospital: string;
    experience: string;
    rating: number;
    reviewsCount: number;
    photo: string;
  }>;
  onDoctorSelect: (doctorId: string) => void;
}

const TopDoctorsSection: React.FC<TopDoctorsSectionProps> = ({ doctors, onDoctorSelect }) => {
  const topDoctors = doctors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <Card className="border-primary-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Top Rated Doctors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topDoctors.map(doctor => (
          <DoctorCard 
            key={doctor.id} 
            doctor={doctor} 
            onViewClick={onDoctorSelect}
            variant="compact"
          />
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Doctors</Button>
      </CardFooter>
    </Card>
  );
};

export default TopDoctorsSection;
