import { useState, ChangeEvent } from 'react';
import { Slots, Date, ReservationData } from '../../type/reservation';
import DateSection from './date-section/date-section';
import { Day } from '../../const';

type BookingFormProps = {
  slots: Slots;
  activePointId: string;
}

function BookingForm({slots, activePointId}: BookingFormProps): JSX.Element {
  const [formData, setFormData] = useState<ReservationData>({
    date: Day.today,
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: undefined,
    placeId: activePointId,
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {checked} = evt.target;
    setFormData({...formData, withChildren: checked});
  };

  const handleDateChange = (date: Date) => {
    setFormData({...formData, ...date});
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        {Object.entries(slots).map(([key, value]) => <DateSection key={key} day={key as Day} timeSlots={value} onDateChange={handleDateChange}/>)}
      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="contactPerson">Ваше имя</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            placeholder="Имя"
            required
            pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
            onChange={handleInputChange}
            value={formData.contactPerson}
          >
          </input>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="phone">Контактный телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Телефон"
            required
            pattern="[0-9]{10,}"
            onChange={handleInputChange}
            value={formData.phone}
          >
          </input>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="peopleCount">Количество участников</label>
          <input
            type="number"
            id="peopleCount"
            name="peopleCount"
            placeholder="Количество участников"
            required
            onChange={handleInputChange}
            value={formData.peopleCount}
          >
          </input>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            onChange={handleCheckboxChange}
          >
          </input>
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
  );
}

export default BookingForm;
