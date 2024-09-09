import { AuthorizationStatus, Day, QuestGenre } from './const';

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

export const changeTimeFormat = (time: string) => {
  const splitTime = time.split(':');
  const [hours, minutes] = splitTime;
  return `${hours}h${minutes}m`;
};

export const getSlotKeyValue = (key: Day) => {
  switch(key) {
    case Day.today: return 'Сегодня';
    case Day.tomorrow: return 'Завтра';
  }
};

export const getAtribute = (atributeName: string) => {
  if (atributeName === QuestGenre.all) {
    return `${atributeName}-quests`;
  }
  return atributeName;
};

export const getGenreIconWidth = (atributeName: string) => {
  switch(atributeName) {
    case QuestGenre.all: return 26;
    case QuestGenre.adventure: return 36;
    case QuestGenre.detective: return 40;
    case QuestGenre['sci-fi']: return 28;
    default: return 30;
  }
};
