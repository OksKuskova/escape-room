import { Day } from '../../../const';
import { TimeSlot, Date } from '../../../type/reservation';
import { changeTimeFormat } from '../../../utils';

type DateItemProps = TimeSlot & {
  day: Day;
  onDateChange: (date: Date) => void;
}

function DateItem({day, time, isAvailable, onDateChange}: DateItemProps): JSX.Element {
  const value = `${day}${changeTimeFormat(time)}`;

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={value}
        name="date"
        required
        value={value}
        disabled={!isAvailable}
        onChange={() => onDateChange({date: day, time})}
      >
      </input>
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default DateItem;
