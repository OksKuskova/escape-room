import { TimeSlot } from '../../type/reservation';
import { getSlotKeyValue} from '../../utils';
import DateItem from './date-item/date-item';

type BookingDateSectionProps = {
  day: string;
  timeSlots: TimeSlot[];
}

function BookingDateSection({day, timeSlots}: BookingDateSectionProps): JSX.Element {
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{getSlotKeyValue(day)}</legend>
      <div className="booking-form__date-inner-wrapper">
        {timeSlots.map(({time, isAvailable}) => <DateItem key={time} day={day} time={time} isAvailable={isAvailable} />)}
      </div>
    </fieldset>
  );
}

export default BookingDateSection;
