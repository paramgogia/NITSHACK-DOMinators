"use client";
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { 
  Bell, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  User,
  AlertTriangle,
  Settings,
  Building,
  Pencil,
  Save,
  MessageSquare,
  X
} from "lucide-react";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    role: "Emergency Response Coordinator",
    department: "Emergency Response Unit",
    location: "Central Command, Delhi",
    position: "Senior Coordinator",
    email: "sarah.johnson@emergency.gov",
    phone: "+91 98765 43210",
    emergencyContact: "+91 98765 43211"
  });

  const [editedData, setEditedData] = useState(profileData);
  const [notificationPreferences, setNotificationPreferences] = useState({
    whatsapp: true,
    sms: false,
    email: true
  });

  const handleToggleNotification = (type) => {
    setNotificationPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const userStats = [
    {
      title: "Active Alerts",
      value: "12",
      icon: <AlertTriangle className="w-5 h-5" />,
      gradient: "from-orange-100 to-orange-200",
      textColor: "text-orange-700"
    },
    {
      title: "Safe Zones",
      value: "3",
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-green-100 to-green-200",
      textColor: "text-green-700"
    },
    {
      title: "Saved Locations",
      value: "4",
      icon: <MapPin className="w-5 h-5" />,
      gradient: "from-blue-100 to-blue-200",
      textColor: "text-blue-700"
    },
    {
      title: "Emergency Contacts",
      value: "6",
      icon: <Phone className="w-5 h-5" />,
      gradient: "from-purple-100 to-purple-200",
      textColor: "text-purple-700"
    }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(profileData);
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
    // Here you would typically make an API call to update the data
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(profileData);
  };

  const handleChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const EditableField = ({ label, value, field }) => (
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      {isEditing ? (
        <div className="flex items-center gap-2">
          <Input
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            className="mt-1"
          />
          <Pencil className="w-4 h-4 text-muted-foreground" />
        </div>
      ) : (
        <p className="text-foreground">{value}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <Card className="w-full overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20 pb-6 px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      value={editedData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="text-2xl font-bold"
                    />
                    <Input
                      value={editedData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground">{profileData.name}</h2>
                    <p className="text-muted-foreground">{profileData.role}</p>
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {isEditing ? (
                  <>
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" onClick={handleEdit}>
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button size="sm">
                      <Bell className="w-4 h-4 mr-2" />
                      Manage Alerts
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {userStats.map((stat, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gradient-to-b ${stat.gradient}`}
            >
              <div className="p-4">
                <div className={`${stat.textColor} mb-2`}>
                  {stat.icon}
                </div>
                <h3 className={`text-2xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </h3>
                <p className={`text-sm ${stat.textColor}`}>
                  {stat.title}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Organization Details
            </h3>
            <div className="space-y-3">
              <EditableField 
                label="Department" 
                value={editedData.department}
                field="department"
              />
              <EditableField 
                label="Location" 
                value={editedData.location}
                field="location"
              />
              <EditableField 
                label="Role" 
                value={editedData.position}
                field="position"
              />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <EditableField 
                label="Email" 
                value={editedData.email}
                field="email"
              />
              <EditableField 
                label="Phone" 
                value={editedData.phone}
                field="phone"
              />
              <EditableField 
                label="Emergency Contact" 
                value={editedData.emergencyContact}
                field="emergencyContact"
              />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span>WhatsApp</span>
                </div>
                <Switch
                  checked={notificationPreferences.whatsapp}
                  onCheckedChange={() => handleToggleNotification('whatsapp')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span>SMS</span>
                </div>
                <Switch
                  checked={notificationPreferences.sms}
                  onCheckedChange={() => handleToggleNotification('sms')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>Email</span>
                </div>
                <Switch
                  checked={notificationPreferences.email}
                  onCheckedChange={() => handleToggleNotification('email')}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
