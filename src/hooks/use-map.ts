import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { MapLayer, MapSetup } from '../components/map/const';

const { Latitude, Longitude, Zoom } = MapSetup;

export function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: Latitude,
          lng: Longitude,
        },
        zoom: Zoom,
      });
      const layer = new TileLayer(
        MapLayer.Template,
        {
          attribution:
            MapLayer.Attribution,
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}
