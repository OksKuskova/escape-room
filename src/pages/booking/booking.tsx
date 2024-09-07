import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getReservationPlaces } from '../../mocks/reservation-places';
import { MapPoint } from '../../type/reservation';
import Map from '../../components/map/map';
import { useActivePlace } from '../../hooks/use-active-place';
import BookingAddress from '../../components/booking-address/booking-address';
import { AppRoute } from '../../const';

function Booking(): JSX.Element {
  const places = getReservationPlaces();
  const mapPoints: MapPoint[] = places.map(({id, location: {coords}}) => ({id, coords}));

  const [ activePointId, setActivePointId ] = useState<string>(mapPoints[0].id);

  const activePlace = useActivePlace(activePointId);

  if (!activePlace) {
    return <Navigate to={AppRoute.Error} />;
  }

  const { location, slots: {today, tomorrow} } = activePlace;

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
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today9h45m" name="date" required value="today9h45m"></input>
                  <span className="custom-radio__label">9:45</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today15h00m" name="date" checked required value="today15h00m"></input>
                  <span className="custom-radio__label">15:00</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today17h30m" name="date" required value="today17h30m"></input>
                  <span className="custom-radio__label">17:30</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today19h30m" name="date" required value="today19h30m" disabled></input>
                  <span className="custom-radio__label">19:30</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today21h30m" name="date" required value="today21h30m"></input>
                  <span className="custom-radio__label">21:30</span>
                </label>
              </div>
            </fieldset>

            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="tomorrow11h00m" name="date" required value="tomorrow11h00m"></input>
                  <span className="custom-radio__label">11:00</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="tomorrow15h00m" name="date" required value="tomorrow15h00m" disabled></input>
                  <span className="custom-radio__label">15:00</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="tomorrow17h30m" name="date" required value="tomorrow17h30m" disabled></input>
                  <span className="custom-radio__label">17:30</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="tomorrow19h45m" name="date" required value="tomorrow19h45m"></input>
                  <span className="custom-radio__label">19:45</span>
                </label>
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="tomorrow21h30m" name="date" required value="tomorrow21h30m"></input>
                  <span className="custom-radio__label">21:30</span>
                </label>
              </div>
            </fieldset>
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
