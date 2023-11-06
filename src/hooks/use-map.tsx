import {useState, useRef, useEffect, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import { TILE_LAYER, COPYRIGHT } from '../const';

import { LocationType } from '../types/location';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(TILE_LAYER, {
        attribution: COPYRIGHT,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

export default useMap;
