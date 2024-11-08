"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [disasterArea, setDisasterArea] = useState('');

  const handleDonate = () => {
    // Here you would typically handle the donation process
    // For now, we'll just log the donation details
    console.log(`Donating $${amount} to ${disasterArea}`);
    alert(`Thank you for your donation of $${amount} to support ${disasterArea}!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Donate to Disaster Relief
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <h2 className="text-xl font-semibold">Make a Donation</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 h-50">
              <div>
                <label htmlFor="disasterArea" className="block text-sm font-medium text-gray-700 mb-4">
                  Select Disaster Area
                </label>
                <Select onValueChange={setDisasterArea} value={disasterArea}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="california-wildfires">California Wildfires</SelectItem>
                    <SelectItem value="haiti-earthquake">Haiti Earthquake</SelectItem>
                    <SelectItem value="indonesia-tsunami">Indonesia Tsunami</SelectItem>
                    <SelectItem value="australia-floods">Australia Floods</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Donation Amount ($)
                </label>
                <Input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleDonate} 
              className="w-full"
              disabled={!amount || !disasterArea}
            >
              Donate Now
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default DonationPage;