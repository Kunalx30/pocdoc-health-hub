
import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

const SupportPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <a href="mailto:kunalchandelkar0002@gmail.com" className="hover:text-primary">
                  kunalchandelkar0002@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>+91722-389-7401</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>Bhilai, Chhattisgarh, India</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Support Hours</h2>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-muted-foreground mt-4">
                For emergencies, please contact the hospital directly or visit the nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
