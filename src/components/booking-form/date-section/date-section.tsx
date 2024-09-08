import { Day } from '../../../const';
import { TimeSlot, Date } from '../../../type/reservation';
import { getSlotKeyValue } from '../../../utils';
import DateItem from '../date-item/date-item';

type DateSectionProps = {
  day: Day;
  timeSlots: TimeSlot[];
  onDateChange: (date: Date) => void;
}

function DateSection({day, timeSlots, onDateChange}: DateSectionProps): JSX.Element {
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{getSlotKeyValue(day)}</legend>
      <div className="booking-form__date-inner-wrapper">
        {timeSlots.map(({time, isAvailable}) => <DateItem key={time} day={day} time={time} isAvailable={isAvailable} onDateChange={onDateChange} />)}
      </div>
    </fieldset>
  );
}

export default DateSection;
