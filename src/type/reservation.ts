import { Date } from '../const';
import { ShortQuest } from './quest';

type Coords = [number, number]

type Location = {
  address: string;
  coords: Coords;
}

type TimeSlot = {
  time: string;
  isAvailable: boolean;
}

type Slots = {
  today: TimeSlot[];
  tomorrow: TimeSlot[];
}

export type Reservation = {
  date: keyof typeof Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: ShortQuest;
}

export type ReservationPlace = {
    id: string;
    location: Location;
    slots: Slots;
}

export type MapPoint = Pick<ReservationPlace, 'id'> & Pick<Location, 'coords'>;
