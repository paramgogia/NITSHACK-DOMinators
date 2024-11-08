import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Newspaper } from "lucide-react";

export default function NewsFeeds() {
  const newsItems = [
    {
      id: 1,
      source: "Hindustan Times",
      title: "Loud explosion near CRPF school in Delhi, forensic team to find cause",
      timeAgo: "56 minutes ago",
      imageUrl: "https://picsum.photos/seed/news1/400/300",
    },
    {
      id: 2,
      source: "Times News",
      title: "Hurricane Warning Issued for Eastern Seaboard",
      timeAgo: "2 hours ago",
      imageUrl: "https://picsum.photos/seed/news2/400/300",
    },
    {
      id: 3,
      source: "Daily Express",
      title: "Earthquake Strikes California Coast",
      timeAgo: "3 hours ago",
      imageUrl: "https://picsum.photos/seed/news3/400/300",
    }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-4">
      {newsItems.map(item => (
        <Card 
          key={item.id} 
          className="overflow-hidden cursor-pointer transition-all duration-300 ease-in-out
            hover:shadow-lg hover:-translate-y-1 transform"
        >
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Newspaper className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600">
                {item.source}
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.timeAgo}</span>
                </div>
              </div>
              
              <div className="md:w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    minHeight: '128px',
                    minWidth: '128px'
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}