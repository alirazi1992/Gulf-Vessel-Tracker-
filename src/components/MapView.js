import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  CircleMarker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as turf from '@turf/turf';

import initialVessels from '../data/vessels';
import persianGulfPolygon from '../data/gulfPolygon';
import shipImg from '../assets/ship-icon.png';

const shipTypes = ['All', 'Oil', 'Cargo', 'Tug'];

const shipIcon = new L.Icon({
  iconUrl: shipImg,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  className: 'ship-icon',
});

const MapView = () => {
  const [vessels, setVessels] = useState(initialVessels);
  const [trailHistory, setTrailHistory] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const interval = setInterval(() => {
      setVessels(prev =>
        prev.map((v) => {
          let newLat = v.lat;
          let newLng = v.lng;
          let foundValidMove = false;

          for (let i = 0; i < 10; i++) {
            const latOffset = (Math.random() - 0.5) * 0.05;
            const lngOffset = (Math.random() - 0.5) * 0.05;
            const proposedLat = v.lat + latOffset;
            const proposedLng = v.lng + lngOffset;

            const point = turf.point([proposedLng, proposedLat]);
            if (turf.booleanPointInPolygon(point, persianGulfPolygon)) {
              newLat = proposedLat;
              newLng = proposedLng;
              foundValidMove = true;
              break;
            }
          }

          return foundValidMove ? { ...v, lat: newLat, lng: newLng } : v;
        })
      );

      setTrailHistory(prev => {
        const newTrail = vessels.map(v => ({
          id: v.id,
          lat: v.lat,
          lng: v.lng,
        }));
        return [...prev, newTrail].slice(-10);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [vessels]);

  return (
    <>
      {/* Sidebar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '180px',
        backgroundColor: '#0a0a0a',
        color: 'white',
        padding: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        borderRight: '2px solid #222',
        boxShadow: '2px 0 12px rgba(255,0,51,0.3)'
      }}>
        <h3 style={{ color: '#ff0033', marginBottom: '12px' }}>Ship Types</h3>
        {shipTypes.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: '8px',
              backgroundColor: filter === type ? '#ff0033' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Map */}
      <MapContainer
        center={[27, 53]}
        zoom={6}
        style={{ height: '100vh', marginLeft: '180px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Trail Markers */}
        {trailHistory.flat().map((trailPoint, i) => (
          <CircleMarker
            key={`${trailPoint.id}-${i}`}
            center={[trailPoint.lat, trailPoint.lng]}
            radius={2}
            pathOptions={{ color: '#ff0033', opacity: 0.2 }}
          />
        ))}

        {/* Ship Markers */}
        {vessels
          .filter(v => filter === 'All' || v.type === filter)
          .map(v => (
            <Marker
              key={v.id}
              position={[v.lat, v.lng]}
              icon={shipIcon}
            >
              <Tooltip>{v.name}</Tooltip>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
};

export default MapView;
