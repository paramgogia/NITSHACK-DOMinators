"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Flame, Droplet, Wind, Globe } from 'lucide-react';

const DisasterTimeline = ({ data }) => {
  const getIcon = (event) => {
    switch (event.toLowerCase()) {
      case 'earthquake': return <Globe />;
      case 'flood': return <Droplet />;
      case 'hurricane': return <Wind />;
      case 'wildfire': return <Flame />;
      default: return <Globe />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Disaster Timeline</CardTitle>
      </CardHeader>
      <CardContent className="h-96 overflow-y-auto">
        <VerticalTimeline layout="1-column">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={getIcon(item.event)}
            >
              <h3 className="vertical-timeline-element-title">{item.event}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
              <p>
                {item.magnitude && `Magnitude: ${item.magnitude}`}
                {item.category && `Category: ${item.category}`}
                {item.severity && `Severity: ${item.severity}`}
                {item.area && `Affected Area: ${item.area}`}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </CardContent>
    </Card>
  );
};

export default DisasterTimeline;