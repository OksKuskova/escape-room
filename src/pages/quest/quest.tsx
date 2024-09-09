import { useParams, Link } from 'react-router-dom';
// import { getQuestById } from '../../mocks/quests';
import { AppRoute, filterGenreList, filterLevelList } from '../../const';
import QuestImage from '../../components/quest-image/quest-image';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuest, getStatus } from '../../store/full-quest/full-quest';
import { fetchFullQuest } from '../../store/full-quest/full-quest-thunk';
import { RequestStatus } from '../../store/const';
import NotFound from '../not-found/not-found';
import Loader from '../../components/loader/loader';

function Quest(): JSX.Element {
  const dispatch = useAppDispatch();

  const quest = useAppSelector(getQuest);
  const status = useAppSelector(getStatus);

  const { id: questId } = useParams();

  useEffect(() => {
    dispatch(fetchFullQuest(questId as string));
  }, [dispatch, questId]);

  if (status === RequestStatus.Loading) {
    return <Loader />;
  }

  if (status === RequestStatus.Failed || !quest) {
    return <NotFound />;
  }

  const { id, title, level, type: genre, previewImg, previewImgWebp, coverImg, coverImgWebp, peopleMinMax: [min, max], description } = quest;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <QuestImage previewImg={previewImg} previewImgWebp={previewImgWebp} coverImg={coverImg} coverImgWebp={coverImgWebp} />
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{filterGenreList[genre]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
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
          <p className="quest-page__description">{description}</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Booking.replace(':id', id)}>Забронировать</Link>
        </div>
      </div>
    </main>
  );
}

export default Quest;
