
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-primary" />
                Office Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Bhilai, Chhattisgarh, India</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:kunalchandelkar0002@gmail.com" 
                className="text-primary hover:underline"
              >
                kunalchandelkar0002@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="tel:+917223897401" 
                className="text-primary hover:underline"
              >
                +91 722-389-7401
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
