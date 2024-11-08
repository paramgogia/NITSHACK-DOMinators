"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AlertSettings() {
  const [email, setEmail] = useState(true)
  const [sms, setSms] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedDisasters, setSelectedDisasters] = useState({
    earthquake: true,
    flood: true,
    hurricane: true,
    wildfire: false,
    tsunami: false,
  })

  const handleDisasterToggle = (disaster) => {
    setSelectedDisasters(prev => ({
      ...prev,
      [disaster]: !prev[disaster]
    }))
  }

  const handleSave = () => {
    // Here you would typically save the settings to a backend
    console.log('Saving settings:', {
      email,
      sms,
      pushNotifications,
      phoneNumber,
      selectedDisasters,
    })
    // Show a success message to the user
    alert('Settings saved successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6">Alert Settings</h1>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Notification Methods</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email Notifications</Label>
            <Switch
              id="email"
              checked={email}
              onCheckedChange={setEmail}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms">SMS Notifications</Label>
            <Switch
              id="sms"
              checked={sms}
              onCheckedChange={setSms}
            />
          </div>
          {sms && (
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <Label htmlFor="push">Push Notifications</Label>
            <Switch
              id="push"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disaster Types</h2>
        <div className="space-y-2">
          {Object.entries(selectedDisasters).map(([disaster, isSelected]) => (
            <div key={disaster} className="flex items-center space-x-2">
              <Checkbox
                id={disaster}
                checked={isSelected}
                onCheckedChange={() => handleDisasterToggle(disaster)}
              />
              <label
                htmlFor={disaster}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {disaster.charAt(0).toUpperCase() + disaster.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <Button onClick={handleSave} className="mt-8 w-full">
          Save Settings
        </Button>
      </motion.div>
    </div>
  )
}