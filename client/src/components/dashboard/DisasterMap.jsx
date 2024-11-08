"use client"

// api:31e44f8b8cc8042123d4733da8181981
// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const disasterIcon = new L.Icon({
//   iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Red_circle.svg/512px-Red_circle.svg.png',
//   iconSize: [20, 20],
//   iconAnchor: [10, 10],
// });

// const DisasterMap = ({ alerts, selectedAlert }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (selectedAlert && mapRef.current) {
//       const { lat, lng } = selectedAlert.position;
//       mapRef.current.setView([lat, lng], 8);
//     }
//   }, [selectedAlert]);

//   return (
//     <MapContainer
//       center={[20, 0]}
//       zoom={2}
//       style={{ height: '400px', width: '100%' }}
//       ref={mapRef}
//     >
//       <TileLayer
//         url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//         attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
//       />
//       {alerts.map(alert => (
//         <Marker
//           key={alert.id}
//           position={alert.position}
//           icon={disasterIcon}
//         >
//           <Popup>{`${alert.type} Alert - ${alert.severity}`}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default DisasterMap;
// components/dashboard/DisasterMap.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const disasterIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Red_circle.svg/512px-Red_circle.svg.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const DisasterMap = ({ alerts, selectedAlert }) => {
  const mapRef = useRef(null);
  const [earthquakeProne, setEarthquakeProne] = useState([]);
  const [volcanicProne, setVolcanicProne] = useState([]);

  useEffect(() => {
    // Dummy data for earthquake and volcanic eruption prone areas
    setEarthquakeProne([
      { id: 'eq1', position: [36.2048, 138.2529], radius: 100000 }, // Japan
      { id: 'eq2', position: [39.0742, -21.8243], radius: 80000 },  // Mid-Atlantic Ridge
    ]);
    setVolcanicProne([
      { id: 'v1', position: [-8.7573, 115.2128], radius: 50000 },   // Bali, Indonesia
      { id: 'v2', position: [14.6037, -90.5248], radius: 60000 },   // Guatemala
    ]);
  }, []);

  useEffect(() => {
    if (selectedAlert && mapRef.current) {
      const map = mapRef.current;
      const { lat, lng } = selectedAlert.position;
      map.flyTo([lat, lng], 8, {
        duration: 2 // Duration of the transition in seconds
      });
    }
  }, [selectedAlert]);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '400px', width: '100%' }}
      ref={mapRef}
    >
      {/* Base satellite layer */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      
      {/* Cloud layer */}
      <TileLayer
        url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=31e44f8b8cc8042123d4733da8181981"
        attribution="Map data &copy; OpenWeatherMap"
        opacity={0.5}
      />

      {/* Disaster alerts */}
      {alerts.map(alert => (
        <Marker
          key={alert.id}
          position={alert.position}
          icon={disasterIcon}
        >
          <Popup>{`${alert.type} Alert - ${alert.severity}`}</Popup>
        </Marker>
      ))}

      {/* Earthquake prone areas */}
      {earthquakeProne.map(area => (
        <Circle
          key={area.id}
          center={area.position}
          radius={area.radius}
          pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.2 }}
        >
          <Popup>Earthquake Prone Area</Popup>
        </Circle>
      ))}

      {/* Volcanic eruption prone areas */}
      {volcanicProne.map(area => (
        <Circle
          key={area.id}
          center={area.position}
          radius={area.radius}
          pathOptions={{ color: 'orange', fillColor: 'orange', fillOpacity: 0.2 }}
        >
          <Popup>Volcanic Eruption Prone Area</Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default DisasterMap;
// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const disasterIcon = new L.Icon({
//   iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Red_circle.svg/512px-Red_circle.svg.png',
//   iconSize: [20, 20],
//   iconAnchor: [10, 10],
// });

// const DisasterMap = ({ alerts, selectedAlert }) => {
//   const mapRef = useRef(null);
//   const [earthquakeProne, setEarthquakeProne] = useState([]);
//   const [volcanicProne, setVolcanicProne] = useState([]);

//   useEffect(() => {
//     // Dummy data for earthquake and volcanic eruption prone areas
//     setEarthquakeProne([
//       { id: 'eq1', position: [36.2048, 138.2529], radius: 100000 }, // Japan
//       { id: 'eq2', position: [39.0742, -21.8243], radius: 80000 },  // Mid-Atlantic Ridge
//     ]);
//     setVolcanicProne([
//       { id: 'v1', position: [-8.7573, 115.2128], radius: 50000 },   // Bali, Indonesia
//       { id: 'v2', position: [14.6037, -90.5248], radius: 60000 },   // Guatemala
//     ]);
//   }, []);

//   useEffect(() => {
//     if (selectedAlert && mapRef.current) {
//       const map = mapRef.current;
//       const { lat, lng } = selectedAlert.position;
//       map.flyTo([lat, lng], 8, {
//         duration: 2 // Duration of the transition in seconds
//       });
//     }
//   }, [selectedAlert]);

//   return (
//     <MapContainer
//       center={[20, 0]}
//       zoom={2}
//       style={{ height: '400px', width: '100%' }}
//       ref={mapRef}
//     >
//       {/* Base satellite layer */}
//       <TileLayer
//         url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//         attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
//       />
      
//       {/* Cloud layer */}
//       <TileLayer
//         url="https://{s}.tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=31e44f8b8cc8042123d4733da8181981"
//         attribution="Map data &copy; OpenWeatherMap"
//         opacity={0.5}
//       />

//       {/* Disaster alerts */}
//       {alerts.map(alert => (
//         <Marker
//           key={alert.id}
//           position={alert.position}
//           icon={disasterIcon}
//         >
//           <Popup>{`${alert.type} Alert - ${alert.severity}`}</Popup>
//         </Marker>
//       ))}

//       {/* Earthquake prone areas */}
//       {earthquakeProne.map(area => (
//         <Circle
//           key={area.id}
//           center={area.position}
//           radius={5}
//           pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }}
//         >
//           <Popup>Earthquake Prone Area</Popup>
//         </Circle>
//       ))}

//       {/* Volcanic eruption prone areas */}
//       {volcanicProne.map(area => (
//         <Circle
//           key={area.id}
//           center={area.position}
//           radius={5}
//           pathOptions={{ color: 'orange', fillColor: 'orange', fillOpacity: 0.3 }}
//         >
//           <Popup>Volcanic Eruption Prone Area</Popup>
//         </Circle>
//       ))}
//     </MapContainer>
//   );
// };

// export default DisasterMap;