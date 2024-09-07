import { TimeSlot } from '../../../type/reservation';
import { changeTimeFormat } from '../../../utils';

type DateItemProps = TimeSlot & {day: string}

function DateItem({day, time, isAvailable}: DateItemProps): JSX.Element {
  const value = `${day}${changeTimeFormat(time)}`;

  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id={value} name="date" required value={value} disabled={!isAvailable}></input>
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default DateItem;
