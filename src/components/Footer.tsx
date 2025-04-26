import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PocDoc</h3>
            <p className="text-primary-100 text-sm">
              A Medical Health App For Everyone. Your personal medical assistant to manage health records, medication reminders, find hospitals and review doctors.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/diary" className="text-primary-100 hover:text-white text-sm">Medical Diary</Link></li>
              <li><Link to="/reminders" className="text-primary-100 hover:text-white text-sm">Medication Reminders</Link></li>
              <li><Link to="/hospitals" className="text-primary-100 hover:text-white text-sm">Hospital Locations</Link></li>
              <li><Link to="/reviews" className="text-primary-100 hover:text-white text-sm">Doctor Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-primary-100 hover:text-white text-sm">FAQ</Link></li>
              <li><Link to="/support" className="text-primary-100 hover:text-white text-sm">Support</Link></li>
              <li><Link to="/contact" className="text-primary-100 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-primary-100 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-primary-100 hover:text-white text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-primary-100 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} PocDoc. All rights reserved.</p>
          <p className="text-primary-200">Project created by Kunal, Rounak, Aryan, Kaif</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
