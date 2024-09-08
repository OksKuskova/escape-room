import { Day } from '../const';
import { ShortQuest } from './quest';

type Coords = [number, number]

type Location = {
  address: string;
  coords: Coords;
}

export type TimeSlot = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today: TimeSlot[];
  tomorrow: TimeSlot[];
}

export type ReservationData = {
  date: Day;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number | undefined;
  placeId: string;
}

export type Reservation = Omit<ReservationData, 'placeId'> & {
  id: string;
  location: Location;
  quest: ShortQuest;
}

export type ReservationPlace = {
  id: string;
  location: Location;
  slots: Slots;
}

export type Date = Pick<ReservationData, 'date' | 'time'>

export type MapPoint = Pick<ReservationPlace, 'id'> & Pick<Location, 'coords'>;


