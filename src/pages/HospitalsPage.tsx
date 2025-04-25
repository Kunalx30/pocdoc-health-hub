
import React from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Search, Phone, Clock, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample hospitals
const hospitals = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Main Street, Cityville',
    distance: '1.2 miles',
    phone: '(555) 123-4567',
    hours: '24/7',
    emergency: true,
    specialties: ['Emergency Care', 'Surgery', 'Cardiology', 'Neurology'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1587351021355-a9562b4a0c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: '2',
    name: 'Westside Medical Center',
    address: '456 Oak Avenue, Westville',
    distance: '2.8 miles',
    phone: '(555) 987-6543',
    hours: '8:00 AM - 8:00 PM',
    emergency: false,
    specialties: ['Family Medicine', 'Pediatrics', 'Orthopedics'],
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80'
  },
  {
    id: '3',
    name: 'Eastside Health Clinic',
    address: '789 Maple Drive, Eastville',
    distance: '3.5 miles',
    phone: '(555) 234-5678',
    hours: '9:00 AM - 5:00 PM',
    emergency: false,
    specialties: ['General Practice', 'Dermatology', 'Mental Health'],
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
  },
  {
    id: '4',
    name: 'North County Hospital',
    address: '101 Pine Street, Northville',
    distance: '5.1 miles',
    phone: '(555) 345-6789',
    hours: '24/7',
    emergency: true,
    specialties: ['Emergency Care', 'Surgery', 'Oncology', 'Pediatrics'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
  }
];

const HospitalsPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">Hospital Locations</h1>
          <p className="text-muted-foreground">Find hospitals and medical facilities near you</p>
        </div>
        
        <div className="bg-primary-50 p-6 rounded-lg mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-primary-800 mb-2">Find Medical Facilities</h2>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={18} />
                <Input 
                  placeholder="Enter your location or zip code" 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1">Find Nearby Hospitals</Button>
              <Button variant="outline" className="bg-white">
                <Search size={18} className="mr-2" /> Advanced Search
              </Button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="list" className="w-full">
          <div className="border-b mb-6">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="list">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hospitals.map(hospital => (
                <Card key={hospital.id} className="overflow-hidden">
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={hospital.image} 
                      alt={hospital.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{hospital.name}</CardTitle>
                      {hospital.emergency && (
                        <Badge className="bg-red-100 text-red-800 border-red-200">
                          Emergency 24/7
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-1" />
                      <span>{hospital.address}</span>
                      <span className="mx-1">•</span>
                      <span>{hospital.distance}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm mb-2">
                      <Phone size={16} className="mr-1 text-primary" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center text-sm mb-3">
                      <Clock size={16} className="mr-1 text-primary" />
                      <span>{hospital.hours}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="bg-primary-50">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(hospital.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm">{hospital.rating}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MapPin size={16} className="mr-1" /> Directions
                      </Button>
                      <Button size="sm">
                        <Heart size={16} className="mr-1" /> Save
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="map">
            <div className="bg-gray-100 rounded-lg p-4 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-medium mb-1">Map View</h3>
                <p className="text-muted-foreground mb-3">View hospitals on an interactive map</p>
                <p className="text-sm text-muted-foreground">Connect to Google Maps or similar service for full functionality</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="emergency">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hospitals
                .filter(hospital => hospital.emergency)
                .map(hospital => (
                  <Card key={hospital.id} className="overflow-hidden border-red-200">
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={hospital.image} 
                        alt={hospital.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{hospital.name}</CardTitle>
                        <Badge className="bg-red-100 text-red-800 border-red-200">
                          Emergency 24/7
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={16} className="mr-1" />
                        <span>{hospital.address}</span>
                        <span className="mx-1">•</span>
                        <span>{hospital.distance}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm mb-2">
                        <Phone size={16} className="mr-1 text-primary" />
                        <span>{hospital.phone}</span>
                      </div>
                      <div className="flex items-center text-sm mb-3">
                        <Clock size={16} className="mr-1 text-primary" />
                        <span>{hospital.hours}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="bg-primary-50">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(hospital.rating) ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm">{hospital.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MapPin size={16} className="mr-1" /> Directions
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">Call Now</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="text-center py-12">
              <Heart size={48} className="mx-auto mb-3 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-1">No saved hospitals yet</h3>
              <p className="text-muted-foreground mb-4">
                Save hospitals to quickly access them later
              </p>
              <Button>Find Hospitals</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default HospitalsPage;
