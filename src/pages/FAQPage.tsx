
import React from 'react';
import Layout from '../components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I find a hospital near me?</AccordionTrigger>
            <AccordionContent>
              You can use our search feature on the Hospitals page to find nearby hospitals. 
              Simply enter your location or use the map view to see hospitals in your area.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How can I book an appointment?</AccordionTrigger>
            <AccordionContent>
              You can book an appointment by visiting the hospital's profile page and clicking 
              on the "Book Appointment" button, or by calling the hospital directly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What should I do in case of an emergency?</AccordionTrigger>
            <AccordionContent>
              In case of an emergency, immediately call the emergency services or visit the 
              nearest hospital's emergency department. You can find emergency hospitals in 
              the "Emergency" tab on our Hospitals page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default FAQPage;
