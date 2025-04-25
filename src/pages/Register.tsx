
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-primary-100">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-2">
                <div className="bg-primary-50 p-3 rounded-full">
                  <User size={24} className="text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Enter your information to create your PocDoc account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Create account</Button>
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
