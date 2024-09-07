import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import { UrlMapMarker } from './const';
import { MapPoint } from '../../type/reservation';

type MapProps = {
  points: MapPoint[];
  activePointId: string;
  onMapMarkerClick: (pointId: string) => void;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Default,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});
const activeCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Active,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

function Map({points, activePointId, onMapMarkerClick}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.coords[0],
          lng: point.coords[1],
        },
        {
          icon: activePointId === point.id ? activeCustomIcon : defaultCustomIcon,
        });
        marker.addTo(map);
        marker.on('click', () => onMapMarkerClick(point.id));
      });
    }
  }, [map, points, activePointId, onMapMarkerClick]);
  return (
    <div
      className="map__container"
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
