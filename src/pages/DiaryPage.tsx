
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Plus, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Sample diary entries
const sampleEntries = [
  {
    id: '1',
    title: 'Annual Checkup',
    date: '2025-04-15',
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Family Medicine',
    notes: 'Overall health is good. Blood pressure is slightly elevated, will monitor. Recommended reducing salt intake and increasing exercise.',
    tags: ['checkup', 'blood pressure'],
  },
  {
    id: '2',
    title: 'Dental Cleaning',
    date: '2025-03-21',
    doctor: 'Dr. Michael Chen',
    specialty: 'Dentist',
    notes: 'Teeth in good condition. Recommended flossing more regularly. No cavities found.',
    tags: ['dental', 'cleaning'],
  },
  {
    id: '3',
    title: 'Allergist Consultation',
    date: '2025-02-10',
    doctor: 'Dr. Emma Rodriguez',
    specialty: 'Allergist',
    notes: 'Discussed seasonal allergies. Prescribed new antihistamine. Follow up in 3 months to assess effectiveness.',
    tags: ['allergy', 'prescription'],
  },
];

const DiaryPage: React.FC = () => {
  const [entries] = useState(sampleEntries);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filteredEntries = entries.filter(entry => 
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.tags.some(tag => tag.includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-800">Medical Diary</h1>
            <p className="text-muted-foreground">Track your medical events and health journey</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus size={18} className="mr-2" /> Add Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Medical Diary Entry</DialogTitle>
                <DialogDescription>
                  Record details about your doctor visits, treatments, or health events.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="e.g. Annual Checkup" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Doctor</Label>
                    <Input id="doctor" placeholder="Doctor's name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input id="specialty" placeholder="e.g. Cardiologist" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add detailed notes about this visit or event" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" placeholder="e.g. checkup, blood test" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsDialogOpen(false)}>Save Entry</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center border-b mb-6">
            <TabsList>
              <TabsTrigger value="all">All Entries</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="doctors">By Doctor</TabsTrigger>
              <TabsTrigger value="tags">Tags</TabsTrigger>
            </TabsList>
            <div className="relative">
              <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search entries..." 
                className="pl-8 w-[200px] md:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <TabsContent value="all">
            {filteredEntries.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No entries found</h3>
                <p className="mt-2 text-muted-foreground">
                  {searchTerm ? 'Try a different search term' : 'Start recording your medical events'}
                </p>
                {!searchTerm && (
                  <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                    <Plus size={18} className="mr-2" /> Add your first entry
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEntries.map(entry => (
                  <Card key={entry.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between">
                        <span>{entry.title}</span>
                        <span className="text-sm font-normal text-muted-foreground">{entry.date}</span>
                      </CardTitle>
                      <CardDescription>
                        {entry.doctor} • {entry.specialty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700">{entry.notes}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="text-center py-12">
              <p>View your most recent medical entries here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="doctors">
            <div className="text-center py-12">
              <p>View your entries organized by healthcare provider</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tags">
            <div className="text-center py-12">
              <p>Browse entries by tags</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DiaryPage;
