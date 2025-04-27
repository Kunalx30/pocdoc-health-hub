import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/hospitals/SearchBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import HospitalMap from '../components/hospitals/HospitalMap';

// Updated hospitals data for Bhilai with new images
const hospitals = [
  {
    id: '1',
    name: 'Sector 9 Hospital Bhilai',
    address: 'Sector 9, Bhilai Steel Plant Township, Bhilai, Chhattisgarh 490009',
    distance: '0.8 km',
    phone: '0788 2856901',
    hours: '24/7',
    emergency: true,
    specialties: ['Emergency Care', 'General Medicine', 'Surgery', 'Orthopedics'],
    rating: 4.5,
    image: '/lovable-uploads/4a4082de-cf67-44d8-ab1c-520c62802915.png'
  },
  {
    id: '2',
    name: 'Dhanwantri Hospital & Research Center',
    address: 'Durg Rd, Supela, Bhilai, Chhattisgarh 490023',
    distance: '2.3 km',
    phone: '0788 2322444',
    hours: '24/7',
    emergency: true,
    specialties: ['Cardiology', 'Neurology', 'Pediatrics', 'Gynecology'],
    rating: 4.7,
    image: '/lovable-uploads/9c136c04-ed94-4cdf-adc0-3f448071af10.png'
  },
  {
    id: '3',
    name: 'Sai Hospital Bhilai',
    address: 'Zone 2, Khursipar, Bhilai, Chhattisgarh 490011',
    distance: '3.1 km',
    phone: '0788 2321555',
    hours: '24/7',
    emergency: true,
    specialties: ['Multi Specialty', 'Emergency Care', 'ICU', 'Trauma Center'],
    rating: 4.6,
    image: '/lovable-uploads/f8c5238e-ee78-4a9f-9ae7-8c7d18291b6c.png'
  },
  {
    id: '4',
    name: 'Chandulal Chandrakar Memorial Hospital',
    address: 'Nehru Nagar, Bhilai, Chhattisgarh 490020',
    distance: '4.5 km',
    phone: '0788 2295591',
    hours: '24/7',
    emergency: true,
    specialties: ['General Medicine', 'Surgery', 'Orthopedics', 'Emergency Care'],
    rating: 4.4,
    image: '/lovable-uploads/f053f116-d6ed-49dc-bfbd-3151f8ceadca.png'
  },
  {
    id: '5',
    name: 'Bhilai Institute of Medical Sciences',
    address: 'Pendri, Bhilai, Chhattisgarh 490021',
    distance: '5.2 km',
    phone: '0788 2275741',
    hours: '24/7',
    emergency: true,
    specialties: ['Multi Specialty', 'Emergency Care', 'Teaching Hospital', 'Research Center'],
    rating: 4.3,
    image: '/lovable-uploads/01417a88-5157-490a-8397-a749e4852ca0.png'
  },
  {
    id: '6',
    name: 'Sparsh Hospital Bhilai',
    address: 'Junwani Road, Smriti Nagar, Bhilai, Chhattisgarh 490020',
    distance: '6.8 km',
    phone: '0788 4015555',
    hours: '24/7',
    emergency: true,
    specialties: ['Multi Specialty', 'Emergency Care', 'Teaching Hospital', 'Research Center'],
    rating: 4.5,
    image: '/lovable-uploads/016e3049-80ab-4cd4-aeef-ba396e018e11.png'
  }
];

const HospitalsPage: React.FC = () => {
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredHospitals(hospitals);
      return;
    }

    const filtered = hospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredHospitals(filtered);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">Hospitals in Bhilai</h1>
          <p className="text-muted-foreground">Find the best hospitals and medical facilities in Bhilai, Chhattisgarh</p>
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        <Tabs defaultValue="list" className="w-full mt-8">
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
              {filteredHospitals.map(hospital => (
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
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
            <HospitalMap hospitals={filteredHospitals} />
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
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
