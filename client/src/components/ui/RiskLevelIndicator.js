"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const RiskLevelIndicator = ({ riskLevel, onRiskChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Risk Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Slider
            defaultValue={[riskLevel]}
            max={100}
            step={1}
            onValueChange={onRiskChange}
          />
          <span className="font-bold text-lg">{riskLevel}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskLevelIndicator;