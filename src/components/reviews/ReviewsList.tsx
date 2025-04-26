
import React from 'react';
import { Button } from "@/components/ui/button";
import ReviewCard from './ReviewCard';
import { Doctor, Review } from '@/types';

interface ReviewsListProps {
  reviews: Review[];
  doctors: Doctor[];
  selectedDoctor: string | null;
  selectedDoctorInfo: Doctor | null;
  onBackClick: () => void;
}

const ReviewsList: React.FC<ReviewsListProps> = ({
  reviews,
  doctors,
  selectedDoctor,
  selectedDoctorInfo,
  onBackClick,
}) => {
  return (
    <>
      {selectedDoctor ? (
        <>
          {selectedDoctorInfo && (
            <div className="flex items-center mb-6 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onBackClick}
              >
                ← Back to all reviews
              </Button>
              <h3 className="text-lg font-semibold">
                Reviews for {selectedDoctorInfo.name}
              </h3>
            </div>
          )}
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p>No reviews for this doctor yet. Be the first to leave a review!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          {reviews.map(review => {
            const doctor = doctors.find(d => d.id === review.doctorId);
            return (
              <ReviewCard 
                key={review.id} 
                review={review} 
                doctor={doctor && {
                  id: doctor.id,
                  name: doctor.name,
                  specialty: doctor.specialty,
                  photo: doctor.photo,
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ReviewsList;
