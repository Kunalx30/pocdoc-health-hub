
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Star } from 'lucide-react';

interface WriteReviewDialogProps {
  doctors: Array<{
    id: string;
    name: string;
    specialty: string;
  }>;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WriteReviewDialog: React.FC<WriteReviewDialogProps> = ({ doctors, isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus size={18} className="mr-2" /> Write a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Write a Doctor Review</DialogTitle>
          <DialogDescription>
            Share your experience to help others find the right healthcare provider
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map(doctor => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {doctor.name} ({doctor.specialty})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  size={24}
                  className="text-gray-300 cursor-pointer hover:text-yellow-400"
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Review Title</Label>
            <Input id="title" placeholder="Summarize your experience" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comment">Your Review</Label>
            <Textarea 
              id="comment" 
              placeholder="Share details of your experience with this doctor" 
              rows={5}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={() => onOpenChange(false)}>Submit Review</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewDialog;
