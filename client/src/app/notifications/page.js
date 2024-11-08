"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bell, AlertTriangle, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch notifications
    const fetchNotifications = async () => {
      setLoading(true)
      // In a real app, you'd fetch data from an API here
      setTimeout(() => {
        setNotifications([
          {
            id: 1,
            type: 'alert',
            title: 'Earthquake Warning',
            message: 'A 5.8 magnitude earthquake has been detected near your area. Take necessary precautions.',
            timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
          },
          {
            id: 2,
            type: 'update',
            title: 'Hurricane Path Update',
            message: 'The projected path of Hurricane Maria has shifted. Check the latest map for details.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
          },
          {
            id: 3,
            type: 'info',
            title: 'New Feature: Customized Alerts',
            message: 'You can now customize your alert preferences. Visit the settings page to update.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
          },
        ])
        setLoading(false)
      }, 1000)
    }

    fetchNotifications()
  }, [])

  const getIcon = (type) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-6 w-6 text-red-500" />
      case 'update':
        return <Bell className="h-6 w-6 text-yellow-500" />
      case 'info':
        return <Info className="h-6 w-6 text-blue-500" />
      default:
        return <Bell className="h-6 w-6" />
    }
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getIcon(notification.type)}
                  {notification.title}
                </CardTitle>
                <CardDescription>{formatTimestamp(notification.timestamp)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{notification.message}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Mark as Read</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {notifications.length === 0 && (
        <p className="text-center text-muted-foreground">No notifications at this time.</p>
      )}
    </div>
  )
}