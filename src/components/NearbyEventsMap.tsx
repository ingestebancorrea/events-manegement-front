import { useEffect, useRef } from "react";
import { useFetchData } from "../hooks/useFecthData";
import mapboxgl from 'mapbox-gl';

interface Props {
    id: string | undefined;
}

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5nZXN0ZWJhbmNvcnJlYTgiLCJhIjoiY2x1bGdldTQ2MDNqaTJqbzIwcm8wZzBqbSJ9.RPaN2jp1kPOpGX2z7AsUrQ';

export const NearbyEventsMap = ({ id }: Props) => {
    const { fetchData, data } = useFetchData();
    const mapContainerRef = useRef<HTMLDivElement | null>(null); // Specify the type of ref

    useEffect(() => {
        fetchData(`/events/${id}/nearby`);
    }, []);

    useEffect(() => {
        if (!mapContainerRef.current) return; // Check if ref is null

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-122.4194, 37.7749], // San Francisco coordinates
          zoom: 12,
        });
    
        // Add route data here (e.g., obtained from a routing service)
        const routeCoordinates = [
          [-122.4194, 37.7749], // Start point
          [-122.4475, 37.7596], // End point
        ];
    
        // Add a GeoJSON line to the map
        map.on('load', () => {
          map.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: routeCoordinates,
              },
            },
          });
    
          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#888',
              'line-width': 8,
            },
          });
        });
    
        // Clean up
        return () => map.remove();
      }, []);

    return (
        <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
    )
}
