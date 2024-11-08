"use client"

// import React, { useState } from 'react';
// import AlertsWidget from '@/components/dashboard/AlertsWidget';
// import DisasterMap from '@/components/dashboard/DisasterMap';

// const mockAlerts = [
//   { id: 1, type: 'Cyclone', severity: 'High', location: 'Bay of Bengal', position: { lat: 15, lng: 90 } },
//   { id: 2, type: 'Flood', severity: 'Medium', location: 'Mumbai', position: { lat: 19, lng: 72 } },
//   // Add more mock alerts as needed
// ];

// export default function Dashboard() {
//   const [selectedAlert, setSelectedAlert] = useState(null);

//   const handleAlertClick = (alert) => {
//     setSelectedAlert(alert);
//   };

//   return (
//     <div className="container px-4 py-8 mx-auto">
//       <h1 className="mb-8 text-3xl font-bold">Disaster Monitoring Dashboard</h1>
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         <AlertsWidget alerts={mockAlerts} onAlertClick={handleAlertClick} />
//         <DisasterMap alerts={mockAlerts} selectedAlert={selectedAlert} />
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import AlertsWidget from '@/components/dashboard/AlertsWidget';
import DisasterMap from '@/components/dashboard/DisasterMap';

const mockAlerts = [
  { id: 1, type: 'Cyclone', severity: 'High', location: 'Bay of Bengal', position: { lat: 15, lng: 90 } },
  { id: 2, type: 'Flood', severity: 'Medium', location: 'Mumbai', position: { lat: 19, lng: 72 } },
  { id: 3, type: 'Earthquake', severity: 'High', location: 'Tokyo', position: { lat: 35.6762, lng: 139.6503 } },
  { id: 4, type: 'Volcanic Eruption', severity: 'Medium', location: 'Bali', position: { lat: -8.7573, lng: 115.2128 } },
  { id: 5, type: 'Tsunami', severity: 'High', location: 'Sumatra', position: { lat: 0.7893, lng: 100.0148 } },
];

export default function Dashboard() {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Disaster Monitoring Dashboard</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AlertsWidget alerts={mockAlerts} onAlertClick={handleAlertClick} />
        <DisasterMap alerts={mockAlerts} selectedAlert={selectedAlert} />
      </div>
    </div>
  );
}