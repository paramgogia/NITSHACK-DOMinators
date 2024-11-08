"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch news
    const fetchNews = async () => {
      setLoading(true)
      // In a real app, you'd fetch data from an API here
      setTimeout(() => {
        setNews([
          {
            id: 1,
            title: 'Earthquake Strikes California Coast',
            description: 'A magnitude 5.8 earthquake hit the California coast early this morning.',
            date: '2024-10-20',
            source: 'Disaster News Network'
          },
          {
            id: 2,
            title: 'Hurricane Warning Issued for Florida',
            description: 'The National Hurricane Center has issued a hurricane warning for the Florida Keys.',
            date: '2024-10-19',
            source: 'Weather Alert'
          },
          {
            id: 3,
            title: 'Wildfire Contained in Colorado',
            description: 'Firefighters have successfully contained the wildfire that threatened several communities in Colorado.',
            date: '2024-10-18',
            source: 'Local News 8'
          }
        ])
        setLoading(false)
      }, 1000)
    }

    fetchNews()
  }, [])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disaster News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.source} - {article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
                <Button className="mt-4">Read More</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}