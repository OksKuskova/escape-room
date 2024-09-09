import { QuestGenre } from '../../../const';
import { getGenreIconWidth } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getGenreFilter, setGenreFilter } from '../../../store/quests/quests';

type GenreItemProps = {
  genre: string;
  value: string;
}

function GenreItem({genre, value}: GenreItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const width = getGenreIconWidth(genre);
  const activeGenre = useAppSelector(getGenreFilter);

  return (
    <li className="filter__item">
      <input
        type="radio"
        name="type"
        id={genre}
        checked = {activeGenre === genre}
        onChange={() => dispatch(setGenreFilter(genre))}
      >
      </input>
      <label className="filter__label" htmlFor={genre}>
        <svg className="filter__icon" width={width} height="30" aria-hidden="true">
          <use xlinkHref={`#icon-${genre === QuestGenre.all ? `${genre}-quests` : genre}`}></use>
        </svg><span className="filter__label-text">{value}</span>
      </label>
    </li>
  );
}

export default GenreItem;

