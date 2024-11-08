"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MultiDisasterChart = ({ data }) => {
  const chartData = data.earthquake.map((item, index) => ({
    month: item.month,
    Earthquake: item.risk,
    Flood: data.flood[index].risk,
    Hurricane: data.hurricane[index].risk,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-Disaster Risk Trends</CardTitle>
      </CardHeader>
      <CardContent className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Earthquake" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Flood" stroke="#82ca9d" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Hurricane" stroke="#ffc658" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MultiDisasterChart;