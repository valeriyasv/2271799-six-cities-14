import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { OffersType } from '../../types/offers';
import { LocationType } from '../../types/location';

import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';

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
  specialOfferId: string | null;
  currentOffer?: Offer;
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

function Map({block, location, offers, currentOffer, specialOfferId}: MapPropsType) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  if (block === 'offer' && currentOffer && specialOfferId) {
    offers = offers.concat(currentOffer);
  }
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
            specialOfferId && offer.id === specialOfferId
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

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);


  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style={{ height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',}}
    />
  );
}

export default Map;
