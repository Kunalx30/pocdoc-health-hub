
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Valid login credentials
const validCredentials = [
  { email: "kunalchandelkar@gmail.com", password: "Kunal@123" },
  { email: "rounaktilante@gmail.com", password: "Rounak@123" },
  { email: "aryanmishra@gmail.com", password: "Aryan@123" },
  { email: "mdkaif@gmail.com", password: "Kaif@123" },
  // Added an extra credential slot for testing/admin
  { email: "admin@pocdoc.com", password: "Admin@123" }
];

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple timeout to simulate API call
    setTimeout(() => {
      const isValidUser = validCredentials.some(
        cred => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password
      );
      
      if (isValidUser) {
        toast({
          title: "Login successful",
          description: "Welcome to PocDoc!",
        });
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        navigate('/');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Incorrect email or password. Please register with us.",
        });
      }
      setIsLoading(false);
    }, 800);
  };

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
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  className="w-full" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login to your account"}
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:underline">
                    Create an account
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
