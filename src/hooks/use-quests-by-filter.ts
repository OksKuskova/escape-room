import { useAppDispatch, useAppSelector } from '.';
import { getQuests, getStatus, getGenreFilter, getLevelFilter } from '../store/quests/quests';
import { getFilteredQuests } from '../utils';
import { RequestStatus } from '../store/const';
import { fetchQuests } from '../store/quests/quests-thank';
import { useEffect } from 'react';

export function useQuestsByFilter() {
  const dispatch = useAppDispatch();

  const quests = useAppSelector(getQuests);
  const status = useAppSelector(getStatus);
  const genre = useAppSelector(getGenreFilter);
  const level = useAppSelector(getLevelFilter);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(fetchQuests());
    }
  });

  const questsByFilters = getFilteredQuests(quests, genre, level);

  return {
    quests: questsByFilters,
  };
}
