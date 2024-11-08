// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { AlertTriangle } from "lucide-react";

// export default function AlertsWidget({ alerts, onAlertClick }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Active Alerts</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {alerts.map(alert => (
//           <Alert key={alert.id} variant="destructive" className="mb-4" onClick={() => onAlertClick(alert.id)}>
//             <AlertTriangle className="w-4 h-4" />
//             <AlertTitle>{alert.type} Alert - {alert.severity} Severity</AlertTitle>
//             <AlertDescription>{alert.location}</AlertDescription>
//           </Alert>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function AlertsWidget({ alerts, onAlertClick }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.map(alert => (
          <Alert 
            key={alert.id} 
            variant="destructive" 
            className="mb-4 cursor-pointer hover:bg-[#f59191] hover:text-white" 
            onClick={() => onAlertClick(alert)}
          >
            <AlertTriangle className="w-4 h-4" />
            <AlertTitle>{alert.type} Alert - {alert.severity} Severity</AlertTitle>
            <AlertDescription>{alert.location}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}