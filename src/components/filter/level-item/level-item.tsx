import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getLevelFilter, setLevelFilter } from '../../../store/quests/quests';

type LevelItemProps = {
  level: string;
  value: string;
}

function LevelItem({level, value}: LevelItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const activeLevel = useAppSelector(getLevelFilter);
  return (
    <li className="filter__item">
      <input
        type="radio"
        name="level"
        id={level}
        checked = {activeLevel === level}
        onChange={() => dispatch(setLevelFilter(level))}
      >
      </input>
      <label className="filter__label" htmlFor={level}><span className="filter__label-text">{value}</span>
      </label>
    </li>
  );
}

export default LevelItem;
