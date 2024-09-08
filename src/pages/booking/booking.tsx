import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getReservationPlaces } from '../../mocks/reservation-places';
import { MapPoint } from '../../type/reservation';
import { useActivePlace } from '../../hooks/use-active-place';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import BookingAddress from '../../components/booking-address/booking-address';
import BookingForm from '../../components/booking-form/booking-form';

function Booking(): JSX.Element {
  const places = getReservationPlaces();
  const mapPoints: MapPoint[] = places.map(({id, location: {coords}}) => ({id, coords}));

  const [ activePointId, setActivePointId ] = useState<string>(mapPoints[0].id);

  const activePlace = useActivePlace(activePointId);

  if (!activePlace) {
    return <Navigate to={AppRoute.Error} />;
  }

  const { location, slots } = activePlace;

  const handleMapMarkerClick = (pointId: string) => {
    setActivePointId(pointId);
  };

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"></source>
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""></img>
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <Map points={mapPoints} activePointId={activePointId} onMapMarkerClick={handleMapMarkerClick} />
            </div>
            <BookingAddress address={location.address} />
          </div>
        </div>
        <BookingForm slots={slots} activePointId={activePointId}/>

      </div>
    </main>
  );
}

export default Booking;
