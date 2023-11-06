import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { OffersType } from '../../types/offers';
import { LocationType } from '../../types/location';

import useMap from '../../hooks/use-map';

type IconConfigType = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

type MapPropsType = {
  block: string;
  location: LocationType;
  offers: OffersType[];
  specialOfferId: number | null;
}

const defaultIconConfig: IconConfigType = {
  url: '/markup/img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

const activeIconConfig: IconConfigType = {
  url: '/markup/img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

function createIcon(config: IconConfigType) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY],
  });
}

function Map({block, location, offers, specialOfferId}: MapPropsType) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if(map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === specialOfferId
              ? createIcon(activeIconConfig)
              : createIcon(defaultIconConfig)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return <section className={`${block}__map map`} ref={mapRef} />;
}

export default Map;
