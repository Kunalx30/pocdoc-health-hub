import React from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Star, ThumbsUp, MessageCircle, Filter, Plus, User } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample doctors
const doctors = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    hospital: 'City General Hospital',
    experience: '15 years',
    rating: 4.8,
    reviewsCount: 124,
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    id: '2',
    name: 'Dr. Rajesh Patel',
    specialty: 'Family Medicine',
    hospital: 'Westside Medical Center',
    experience: '12 years',
    rating: 4.5,
    reviewsCount: 89,
    photo: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    id: '3',
    name: 'Dr. Anjali Gupta',
    specialty: 'Pediatrician',
    hospital: 'Eastside Health Clinic',
    experience: '8 years',
    rating: 4.7,
    reviewsCount: 67,
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    id: '4',
    name: 'Dr. Suresh Kumar',
    specialty: 'Neurologist',
    hospital: 'North County Hospital',
    experience: '20 years',
    rating: 4.9,
    reviewsCount: 156,
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    id: '5',
    name: 'Dr. Deepa Menon',
    specialty: 'Gynecologist',
    hospital: 'Women\'s Care Center',
    experience: '18 years',
    rating: 4.6,
    reviewsCount: 112,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '6',
    name: 'Dr. Vikram Singh',
    specialty: 'Orthopedic Surgeon',
    hospital: 'Sports Medicine Clinic',
    experience: '16 years',
    rating: 4.7,
    reviewsCount: 98,
    photo: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    id: '7',
    name: 'Dr. Neha Agarwal',
    specialty: 'Dermatologist',
    hospital: 'Skin & Wellness Center',
    experience: '10 years',
    rating: 4.5,
    reviewsCount: 76,
    photo: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
  {
    id: '8',
    name: 'Dr. Arun Mehta',
    specialty: 'Oncologist',
    hospital: 'Cancer Research Institute',
    experience: '22 years',
    rating: 4.9,
    reviewsCount: 134,
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
  }
];

// Sample reviews
const reviews = [
  {
    id: '1',
    doctorId: '1',
    author: 'Rahul Kapoor',
    rating: 5,
    date: '2025-03-15',
    title: 'Excellent care and professionalism',
    comment: 'Dr. Sharma was extremely thorough in her examination and took the time to explain everything clearly. She answered all my questions and made me feel very comfortable. I would highly recommend her to anyone looking for a cardiologist.',
    helpful: 24,
    replies: 2,
  },
  {
    id: '2',
    doctorId: '1',
    author: 'Priya Patel',
    rating: 4,
    date: '2025-02-28',
    title: 'Good doctor with caring approach',
    comment: 'Dr. Sharma has a very caring approach. She spends time with patients and explains things well. The only downside is that the wait time was longer than expected.',
    helpful: 12,
    replies: 1,
  },
  {
    id: '3',
    doctorId: '2',
    author: 'Amit Sharma',
    rating: 5,
    date: '2025-04-02',
    title: 'Excellent family doctor',
    comment: 'Dr. Patel is the best family doctor we\'ve ever had. He really cares about his patients and takes the time to get to know them. He\'s great with our kids and always provides thoughtful advice.',
    helpful: 18,
    replies: 0,
  }
];

const ReviewsPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState<string | null>(null);
  
  const doctorReviews = selectedDoctor
    ? reviews.filter(review => review.doctorId === selectedDoctor)
    : reviews;
  
  const selectedDoctorInfo = selectedDoctor
    ? doctors.find(doctor => doctor.id === selectedDoctor)
    : null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-800 mb-2">Doctor Reviews</h1>
            <p className="text-muted-foreground">Read and share experiences with healthcare providers</p>
          </div>
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Submit Review</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search for doctors by name or specialty"
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={18} /> Filter
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <div className="border-b mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Reviews</TabsTrigger>
                  <TabsTrigger value="highest">Highest Rated</TabsTrigger>
                  <TabsTrigger value="recent">Most Recent</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                {selectedDoctor ? (
                  <>
                    {selectedDoctorInfo && (
                      <div className="flex items-center mb-6 gap-4">
                        <Button variant="outline" size="sm" onClick={() => setSelectedDoctor(null)}>
                          ← Back to all reviews
                        </Button>
                        <h3 className="text-lg font-semibold">Reviews for {selectedDoctorInfo.name}</h3>
                      </div>
                    )}
                    {doctorReviews.length === 0 ? (
                      <div className="text-center py-12">
                        <p>No reviews for this doctor yet. Be the first to leave a review!</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {doctorReviews.map(review => (
                          <Card key={review.id}>
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
                              <p className="text-gray-700">{review.comment}</p>
                              <div className="mt-4 flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback>
                                    {review.author.charAt(0)}
                                  </AvatarFallback>
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
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-6">
                    {reviews.map(review => {
                      const doctor = doctors.find(d => d.id === review.doctorId);
                      return (
                        <Card key={review.id}>
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
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => setSelectedDoctor(review.doctorId)}
                              >
                                See all reviews →
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-3 flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={doctor?.photo} alt={doctor?.name || ""} />
                                <AvatarFallback>
                                  {doctor?.name.charAt(0) || "D"}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{doctor?.name}</div>
                                <div className="text-sm text-muted-foreground">{doctor?.specialty}</div>
                              </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                            <div className="mt-4 flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarFallback>
                                  {review.author.charAt(0)}
                                </AvatarFallback>
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
                    })}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="highest">
                <div className="text-center py-12">
                  <p>View highest rated doctor reviews here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="recent">
                <div className="text-center py-12">
                  <p>View most recent doctor reviews here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="border-primary-100 mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Top Rated Doctors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctors
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map(doctor => (
                    <div key={doctor.id} className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={doctor.photo} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name.charAt(0)}
                        </AvatarFallback>
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
                        onClick={() => setSelectedDoctor(doctor.id)}
                        className="shrink-0"
                      >
                        View
                      </Button>
                    </div>
                  ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Doctors</Button>
              </CardFooter>
            </Card>
            
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
                <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
                  <Plus size={18} className="mr-2" /> Write a Review
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
