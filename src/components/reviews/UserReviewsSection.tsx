
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User } from 'lucide-react';

interface UserReviewsSectionProps {
  onWriteReview: () => void;
}

const UserReviewsSection: React.FC<UserReviewsSectionProps> = ({ onWriteReview }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Your Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <User className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No reviews yet</h3>
          <p className="mt-2 text-muted-foreground">
            Share your experiences with doctors you've visited
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onWriteReview}>
          <Plus size={18} className="mr-2" /> Write a Review
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserReviewsSection;
