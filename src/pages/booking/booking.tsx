import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getReservationPlaces } from '../../mocks/reservation-places';
import { MapPoint } from '../../type/reservation';
import { useActivePlace } from '../../hooks/use-active-place';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import BookingAddress from '../../components/booking-address/booking-address';
import BookingDateSection from '../../components/booking-date-section/booking-date-section';

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
        <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            {Object.entries(slots).map(([key, value]) => <BookingDateSection key={key} day={key} timeSlots={value} />)}
          </fieldset>
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Контактная информация</legend>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"></input>
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
              <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}"></input>
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="person">Количество участников</label>
              <input type="number" id="person" name="person" placeholder="Количество участников" required></input>
            </div>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
              <input type="checkbox" id="children" name="children" checked></input>
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
            </label>
          </fieldset>
          <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input type="checkbox" id="id-order-agreement" name="user-agreement" required></input>
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}

export default Booking;
