import { filterGenreList, filterLevelList } from '../../const';
import GenreItem from './genre-item/genre-item';
import LevelItem from './level-item/level-item';

function Filter(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {Object.entries(filterGenreList).map(([key, value]) => <GenreItem key={key} genre={key} value={value} />)}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {Object.entries(filterLevelList).map(([key, value]) => <LevelItem key={key} level={key} value={value} />)}
        </ul>
      </fieldset>
    </form>
  );
}

export default Filter;
