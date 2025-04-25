
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Star } from 'lucide-react';

interface ReviewCardProps {
  review: {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    helpful: number;
    replies: number;
  };
  doctor?: {
    id: string;
    name: string;
    specialty: string;
    photo: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, doctor }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{review.title}</CardTitle>
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {review.date}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {doctor && (
          <div className="mb-3 flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{doctor.name}</div>
              <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
            </div>
          </div>
        )}
        <p className="text-gray-700">{review.comment}</p>
        <div className="mt-4 flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{review.author}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between text-sm">
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ThumbsUp size={16} className="mr-1" /> Helpful ({review.helpful})
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <MessageCircle size={16} className="mr-1" /> Reply ({review.replies})
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
