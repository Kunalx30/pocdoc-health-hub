import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Plus } from 'lucide-react';
import DoctorCard from '../components/doctors/DoctorCard';
import ReviewCard from '../components/reviews/ReviewCard';
import WriteReviewDialog from '../components/reviews/WriteReviewDialog';
import TopDoctorsSection from '../components/doctors/TopDoctorsSection';
import SearchBar from '../components/reviews/SearchBar';

// Sample doctors with Indian names and Bhilai hospitals
const doctors = [
  {
    id: '1',
    name: 'Dr. Arun Verma',
    specialty: 'Cardiologist',
    hospital: 'Sector 9 Hospital Bhilai',
    experience: '15 years',
    rating: 4.8,
    reviewsCount: 124,
    photo: 'https://randomuser.me/api/portraits/men/42.jpg',
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Family Medicine',
    hospital: 'Sparsh Hospital Bhilai',
    experience: '12 years',
    rating: 4.5,
    reviewsCount: 89,
    photo: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    id: '3',
    name: 'Dr. Meena Sharma',
    specialty: 'Pediatrician',
    hospital: 'Bhilai Institute of Medical Sciences',
    experience: '8 years',
    rating: 4.7,
    reviewsCount: 67,
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    id: '4',
    name: 'Dr. Sanjay Gupta',
    specialty: 'Neurologist',
    hospital: 'Sai Hospital Bhilai',
    experience: '20 years',
    rating: 4.9,
    reviewsCount: 156,
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    id: '5',
    name: 'Dr. Priya Deshmukh',
    specialty: 'Gynecologist',
    hospital: 'Chandulal Chandrakar Hospital Bhilai',
    experience: '18 years',
    rating: 4.6,
    reviewsCount: 112,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '6',
    name: 'Dr. Vikram Mishra',
    specialty: 'Orthopedic Surgeon',
    hospital: 'Dhanwantri Hospital Bhilai',
    experience: '16 years',
    rating: 4.7,
    reviewsCount: 98,
    photo: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    id: '7',
    name: 'Dr. Neha Joshi',
    specialty: 'Dermatologist',
    hospital: 'Prayas Hospital Bhilai',
    experience: '10 years',
    rating: 4.5,
    reviewsCount: 76,
    photo: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
  {
    id: '8',
    name: 'Dr. Amit Sinha',
    specialty: 'Oncologist',
    hospital: 'Shri Balaji Cancer Hospital Bhilai',
    experience: '22 years',
    rating: 4.9,
    reviewsCount: 134,
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
  }
];

// Sample reviews with Indian names
const reviews = [
  {
    id: '1',
    doctorId: '1',
    author: 'Suresh Patel',
    rating: 5,
    date: '2025-03-15',
    title: 'Excellent care and professionalism',
    comment: 'Dr. Verma was extremely thorough in his examination and took the time to explain everything clearly. He answered all my questions and made me feel very comfortable. I would highly recommend him to anyone looking for a cardiologist.',
    helpful: 24,
    replies: 2,
  },
  {
    id: '2',
    doctorId: '1',
    author: 'Kavita Sharma',
    rating: 4,
    date: '2025-02-28',
    title: 'Good doctor with caring approach',
    comment: 'Dr. Verma has a very caring approach. He spends time with patients and explains things well. The only downside is that the wait time was longer than expected.',
    helpful: 12,
    replies: 1,
  },
  {
    id: '3',
    doctorId: '2',
    author: 'Rajat Tiwari',
    rating: 5,
    date: '2025-04-02',
    title: 'Excellent family doctor',
    comment: 'Dr. Kumar is the best family doctor we\'ve ever had. He really cares about his patients and takes the time to get to know them. He\'s great with our kids and always provides thoughtful advice.',
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
          <WriteReviewDialog 
            doctors={doctors}
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SearchBar />
            
            <Tabs defaultValue="all" className="w-full mt-6">
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
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setSelectedDoctor(null)}
                        >
                          ← Back to all reviews
                        </Button>
                        <h3 className="text-lg font-semibold">
                          Reviews for {selectedDoctorInfo.name}
                        </h3>
                      </div>
                    )}
                    {doctorReviews.length === 0 ? (
                      <div className="text-center py-12">
                        <p>No reviews for this doctor yet. Be the first to leave a review!</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {doctorReviews.map(review => (
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
          
          <div className="lg:col-span-1 space-y-6">
            <TopDoctorsSection 
              doctors={doctors}
              onDoctorSelect={setSelectedDoctor}
            />
            
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
