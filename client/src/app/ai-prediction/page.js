"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MultiDisasterChart from '@/components/ui/MultiDisasterChart';
import RiskDistributionChart from '@/components/ui/RiskDistributionChart';
import DisasterRiskForecast from '@/components/ui/DisasterRiskForecast';
import PrecautionChatbot from '@/components/ui/PrecautionChatbot';

const AIPredictionPage = () => {
  const [disasterData, setDisasterData] = useState({
    earthquake: [
      { month: 'Jan', risk: 30 }, { month: 'Feb', risk: 35 }, { month: 'Mar', risk: 40 },
      { month: 'Apr', risk: 38 }, { month: 'May', risk: 42 }, { month: 'Jun', risk: 45 },
    ],
    flood: [
      { month: 'Jan', risk: 20 }, { month: 'Feb', risk: 25 }, { month: 'Mar', risk: 35 },
      { month: 'Apr', risk: 45 }, { month: 'May', risk: 55 }, { month: 'Jun', risk: 60 },
    ],
    hurricane: [
      { month: 'Jan', risk: 10 }, { month: 'Feb', risk: 15 }, { month: 'Mar', risk: 20 },
      { month: 'Apr', risk: 30 }, { month: 'May', risk: 50 }, { month: 'Jun', risk: 70 },
    ],
  });

  const [forecastData, setForecastData] = useState([
    { date: '2024-05-01', event: 'Earthquake', probability: 0.3, severity: 'Moderate', location: 'California' },
    { date: '2024-05-15', event: 'Hurricane', probability: 0.6, severity: 'High', location: 'Florida' },
    { date: '2024-06-01', event: 'Flood', probability: 0.4, severity: 'Moderate', location: 'Mississippi River' },
    { date: '2024-06-15', event: 'Wildfire', probability: 0.7, severity: 'High', location: 'Colorado' },
  ]);

  const updatePredictions = () => {
    // Simulate API call to update predictions
    const newDisasterData = Object.keys(disasterData).reduce((acc, key) => {
      acc[key] = disasterData[key].map(item => ({
        ...item,
        risk: Math.floor(Math.random() * 100)
      }));
      return acc;
    }, {});

    setDisasterData(newDisasterData);

    // Update forecast
    const newForecastData = forecastData.map(item => ({
      ...item,
      probability: Math.random().toFixed(2),
      severity: Math.random() > 0.5 ? 'High' : 'Moderate'
    }));
    setForecastData(newForecastData);
  };

  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DisasterRiskForecast data={forecastData} />
        <RiskDistributionChart data={disasterData} />
      </div>

      <div className="mb-6">
        <MultiDisasterChart data={disasterData} />
      </div>
{/* 
      <div className="mb-6">
        <PrecautionChatbot />
      </div> */}

      <div className="mt-6">
        <Button onClick={updatePredictions}>Update Predictions</Button>
      </div>
    </div>
  );
};

export default AIPredictionPage;