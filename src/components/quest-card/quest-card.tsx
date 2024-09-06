import { ShortQuest } from '../../type/quest';
import { AppRoute, filterLevelList } from '../../const';
import { Link } from 'react-router-dom';

type QuestCardProps = {
  quest: ShortQuest;
}

function QuestCard({quest}: QuestCardProps): JSX.Element {

  const { id, title, level, previewImg, previewImgWebp, peopleMinMax: [min, max] } = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`}></source>
          <img src={previewImg} srcSet={`${previewImg} 2x`} width="344" height="232" alt={title}></img>
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={AppRoute.Quest.replace(':id', id)}>{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{min}&ndash;{max}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{filterLevelList[level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
