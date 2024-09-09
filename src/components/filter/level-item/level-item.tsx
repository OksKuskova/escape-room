type LevelItemProps = {
  atributeName: string;
  level: string;
}

function LevelItem({atributeName, level}: LevelItemProps): JSX.Element {
  return (
    <li className="filter__item">
      <input
        type="radio"
        name="level"
        id={atributeName}
      >
      </input>
      <label className="filter__label" htmlFor={atributeName}><span className="filter__label-text">{level}</span>
      </label>
    </li>
  );
}

export default LevelItem;
