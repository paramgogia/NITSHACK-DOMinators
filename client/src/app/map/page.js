// "use client"

// import { useState } from 'react'
// import { motion } from 'framer-motion'

// export default function Map() {
//   const [selectedDisaster, setSelectedDisaster] = useState(null)

//   // Simplified disaster data
//   const disasters = [
//     { id: 1, type: 'Earthquake', location: 'San Francisco', severity: 'High' },
//     { id: 2, type: 'Flood', location: 'New Orleans', severity: 'Medium' },
//     { id: 3, type: 'Hurricane', location: 'Miami', severity: 'High' },
//   ]

//   return (
//     <div className="container px-4 py-8 mx-auto">
//       <h1 className="mb-8 text-3xl font-bold">Disaster Map</h1>
//       <div className="p-4 rounded-lg shadow-lg bg-secondary">
//         {/* Placeholder for the actual map */}
//         <div className="flex items-center justify-center rounded-lg h-96 bg-muted">
//           Interactive Map Placeholder
//         </div>
//         <div className="mt-4 space-y-2">
//           {disasters.map((disaster) => (
//             <motion.div
//               key={disaster.id}
//               className="p-4 rounded-md cursor-pointer bg-background"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedDisaster(disaster)}
//             >
//               <h3 className="font-bold">{disaster.type}</h3>
//               <p>Location: {disaster.location}</p>
//               <p>Severity: {disaster.severity}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {selectedDisaster && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="p-4 mt-8 rounded-lg shadow-lg bg-secondary"
//         >
//           <h2 className="mb-4 text-2xl font-bold">{selectedDisaster.type} Details</h2>
//           <p>Location: {selectedDisaster.location}</p>
//           <p>Severity: {selectedDisaster.severity}</p>
//           {/* Add more details as needed */}
//         </motion.div>
//       )}
//     </div>
//   )
// }
"use client";

import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Disaster icons for different types
const earthquakeIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Earthquake_icon.svg/512px-Earthquake_icon.svg.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const volcanicIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Volcano_icon.svg/512px-Volcano_icon.svg.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

// Dummy data for disaster-prone areas
const disasterData = {
  'Mumbai': { position: [19.0760, 72.8777], type: 'Flood', severity: 'High' },
  'Tokyo': { position: [35.6762, 139.6503], type: 'Earthquake', severity: 'Severe' },
  'Bali': { position: [-8.3405, 115.0920], type: 'Volcanic Eruption', severity: 'Medium' },
  'Guatemala': { position: [14.6349, -90.5069], type: 'Volcanic Eruption', severity: 'High' },
};

export default function Map() {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [userInput, setUserInput] = useState('');
  const mapRef = useRef(null);

  // Effect to update map view based on selected disaster
  useEffect(() => {
    if (selectedDisaster && mapRef.current) {
      const { position } = selectedDisaster;
      mapRef.current.flyTo(position, 8, {
        duration: 2,
      });
    }
  }, [selectedDisaster]);

  // Handle user input and show disaster details
  const handleInputSubmit = (e) => {
    e.preventDefault();
    const disaster = disasterData[userInput];
    if (disaster) {
      setSelectedDisaster(disaster);
    } else {
      alert('Location not found or no disaster data available.');
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* <h1 className="mb-8 text-3xl font-bold">Disaster Map</h1> */}

      {/* Input form for user to type location */}
      <form onSubmit={handleInputSubmit} className="mb-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="p-2 mr-2 border rounded"
          placeholder="Enter location (e.g., Mumbai)"
        />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Show Disaster
        </button>
      </form>

      <div className="p-4 rounded-lg shadow-lg bg-secondary">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '400px', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />

          {/* Render selected disaster marker */}
          {selectedDisaster && (
            <Marker
              position={selectedDisaster.position}
              icon={selectedDisaster.type === 'Earthquake' ? earthquakeIcon : volcanicIcon}
            >
              <Popup>
                {selectedDisaster.type} Alert - {selectedDisaster.severity} Severity
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {selectedDisaster && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 mt-8 rounded-lg shadow-lg bg-secondary"
        >
          <h2 className="mb-4 text-2xl font-bold">Disaster Details</h2>
          <p>Location: {userInput}</p>
          <p>Disaster Type: {selectedDisaster.type}</p>
          <p>Severity: {selectedDisaster.severity}</p>
        </motion.div>
      )}
    </div>
  );
}
