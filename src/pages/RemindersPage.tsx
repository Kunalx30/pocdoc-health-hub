
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Plus, Calendar, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

// Sample medications
const medications = [
  {
    id: '1',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    time: '08:00',
    status: 'active',
    instructions: 'Take with water, can be taken with or without food',
    refillDate: '2025-05-15',
    daysLeft: 21,
  },
  {
    id: '2',
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once daily',
    time: '20:00',
    status: 'active',
    instructions: 'Take in the evening',
    refillDate: '2025-05-02',
    daysLeft: 8,
  },
  {
    id: '3',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    time: '08:00, 20:00',
    status: 'active',
    instructions: 'Take with meals',
    refillDate: '2025-04-30',
    daysLeft: 5,
  },
  {
    id: '4',
    name: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    time: '',
    status: 'inactive',
    instructions: 'Take for pain, with food. Do not exceed 1200mg in 24 hours',
    refillDate: '',
    daysLeft: 0,
  }
];

const RemindersPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-800">Medication Reminders</h1>
            <p className="text-muted-foreground">Track and manage your medications</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus size={18} className="mr-2" /> Add Medication
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Medication</DialogTitle>
                <DialogDescription>
                  Enter the details of your medication to set up reminders
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="med-name">Medication Name</Label>
                    <Input id="med-name" placeholder="e.g. Lisinopril" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage</Label>
                    <Input id="dosage" placeholder="e.g. 10mg" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">Once daily</SelectItem>
                        <SelectItem value="twice">Twice daily</SelectItem>
                        <SelectItem value="three">Three times daily</SelectItem>
                        <SelectItem value="four">Four times daily</SelectItem>
                        <SelectItem value="as-needed">As needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Input id="instructions" placeholder="e.g. Take with food" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="refill">Next Refill Date</Label>
                    <Input id="refill" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reminder">Reminder Notifications</Label>
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch id="reminder" />
                      <Label htmlFor="reminder">Enable notifications</Label>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsDialogOpen(false)}>Save Medication</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b mb-6">
            <TabsList>
              <TabsTrigger value="all">All Medications</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="refills">Refills</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medications.map(med => (
                <Card key={med.id} className={med.status === 'inactive' ? 'opacity-70' : ''}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{med.name}</CardTitle>
                      {med.status === 'active' ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-gray-100 text-gray-500 border-gray-200">
                          Inactive
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm font-medium">{med.dosage} • {med.frequency}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock size={16} className="mr-1" />
                      <span>{med.time || 'As needed'}</span>
                    </div>
                    <p className="text-sm">{med.instructions}</p>
                    
                    {med.refillDate && (
                      <div className="mt-4 flex items-center text-sm">
                        <Calendar size={16} className="mr-1" />
                        <span>
                          Refill: {med.refillDate} 
                          {med.daysLeft <= 7 ? (
                            <span className="ml-2 text-red-500 font-medium">
                              ({med.daysLeft} days left)
                            </span>
                          ) : (
                            <span className="ml-2 text-muted-foreground">
                              ({med.daysLeft} days left)
                            </span>
                          )}
                        </span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-1">
                    <Button variant="ghost" size="sm">Edit</Button>
                    {med.status === 'active' && (
                      <Button variant="outline" size="sm" className="text-green-600">
                        <CheckCircle size={16} className="mr-1" /> Mark as Taken
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medications
                .filter(med => med.status === 'active')
                .map(med => (
                  <Card key={med.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{med.name}</CardTitle>
                      <div className="text-sm font-medium">{med.dosage} • {med.frequency}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Clock size={16} className="mr-1" />
                        <span>{med.time}</span>
                      </div>
                      <p className="text-sm">{med.instructions}</p>
                      
                      {med.refillDate && (
                        <div className="mt-4 flex items-center text-sm">
                          <Calendar size={16} className="mr-1" />
                          <span>
                            Refill: {med.refillDate} 
                            {med.daysLeft <= 7 ? (
                              <span className="ml-2 text-red-500 font-medium">
                                ({med.daysLeft} days left)
                              </span>
                            ) : (
                              <span className="ml-2 text-muted-foreground">
                                ({med.daysLeft} days left)
                              </span>
                            )}
                          </span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between pt-1">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-green-600">
                        <CheckCircle size={16} className="mr-1" /> Mark as Taken
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="today">
            <div className="text-center py-12">
              <p>View today's medication schedule here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="refills">
            <div className="text-center py-12">
              <p>View upcoming medication refills here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default RemindersPage;
