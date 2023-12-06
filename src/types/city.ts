import { LocationType } from './location';
import { CityMapData } from '../const';

export type CityType = {
  name: string;
  location: LocationType;
};

export type City = keyof typeof CityMapData;
