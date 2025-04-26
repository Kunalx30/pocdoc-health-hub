
import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WriteReviewDialog from '../components/reviews/WriteReviewDialog';
import TopDoctorsSection from '../components/doctors/TopDoctorsSection';
import SearchBar from '../components/reviews/SearchBar';
import ReviewsList from '../components/reviews/ReviewsList';
import UserReviewsSection from '../components/reviews/UserReviewsSection';
import { doctors, reviews } from '../data/mockData';

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
                <ReviewsList
                  reviews={doctorReviews}
                  doctors={doctors}
                  selectedDoctor={selectedDoctor}
                  selectedDoctorInfo={selectedDoctorInfo}
                  onBackClick={() => setSelectedDoctor(null)}
                />
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
            <UserReviewsSection onWriteReview={() => setIsDialogOpen(true)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
