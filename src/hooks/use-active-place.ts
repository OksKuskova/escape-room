import { getReservationPlaces } from '../mocks/reservation-places';

export function useActivePlace(activePointId: string) {
  const places = getReservationPlaces();
  const activePlace = places.find((place) => place.id === activePointId);

  return activePlace;
}
