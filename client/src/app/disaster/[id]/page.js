"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DisasterDetails() {
  const { id } = useParams()
  const [disaster, setDisaster] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch disaster details
    const fetchDisaster = async () => {
      // In a real app, you'd fetch data from an API here
      setLoading(true)
      setTimeout(() => {
        setDisaster({
          id,
          type: 'Earthquake',
          location: 'San Francisco, CA',
          severity: 'High',
          date: new Date().toISOString(),
          description: 'A magnitude 6.5 earthquake struck the San Francisco Bay Area.',
          updates: [
            { id: 1, text: 'Emergency services deployed to affected areas.', timestamp: new Date().toISOString() },
            { id: 2, text: 'Aftershocks expected in the next 24 hours.', timestamp: new Date().toISOString() },
          ]
        })
        setLoading(false)
      }, 1000)
    }

    fetchDisaster()
  }, [id])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!disaster) {
    return <div className="container mx-auto px-4 py-8">Disaster not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-4">{disaster.type} in {disaster.location}</h1>
        <Alert>
          <AlertTitle>Severity: {disaster.severity}</AlertTitle>
          <AlertDescription>
            Date: {new Date(disaster.date).toLocaleDateString()}
          </AlertDescription>
        </Alert>
        <p className="mt-4">{disaster.description}</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Latest Updates</h2>
        <ul className="space-y-4">
          {disaster.updates.map((update) => (
            <li key={update.id} className="bg-background p-4 rounded-md">
              <p>{update.text}</p>
              <small className="text-muted-foreground">
                {new Date(update.timestamp).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}