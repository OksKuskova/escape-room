import { getAtribute, getGenreIconWidth } from '../../../utils';

type GenreItemProps = {
  atributeName: string;
  genreName: string;
}

function GenreItem({atributeName, genreName}: GenreItemProps): JSX.Element {
  const atribute = getAtribute(atributeName);
  const width = getGenreIconWidth(atributeName);

  return (
    <li className="filter__item">
      <input
        type="radio"
        name="type"
        id={atribute}
        checked
      >
      </input>
      <label className="filter__label" htmlFor={atribute}>
        <svg className="filter__icon" width={width} height="30" aria-hidden="true">
          <use xlinkHref={`#icon-${atribute}`}></use>
        </svg><span className="filter__label-text">{genreName}</span>
      </label>
    </li>
  );
}

export default GenreItem;

