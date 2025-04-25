
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-primary-100">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-2">
                <div className="bg-primary-50 p-3 rounded-full">
                  <LogIn size={24} className="text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Login to your account</Button>
              <div className="text-center text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Create an account
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
