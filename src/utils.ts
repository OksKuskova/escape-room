import { AuthorizationStatus, Day, Level, QuestGenre } from './const';
import { ShortQuest } from './type/quest';

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

export const getGenreIconWidth = (atributeName: string) => {
  switch(atributeName) {
    case QuestGenre.all: return 26;
    case QuestGenre.adventures: return 36;
    case QuestGenre.detective: return 40;
    case QuestGenre['sci-fi']: return 28;
    default: return 30;
  }
};

export const getQuestsByGenre = (quests: ShortQuest[], genre: string) => {
  if (genre === QuestGenre.all) {
    return quests;
  } else {
    return quests.filter((quest) => quest.type === genre);
  }
};

export const getQuestsByLevel = (quests: ShortQuest[], level: string) => {
  if (level === Level.any) {
    return quests;
  } else {
    return quests.filter((quest) => quest.level === level);
  }
};


export const getFilteredQuests = (quests: ShortQuest[], genre: string, level: string) => {
  const filteredQuests = getQuestsByGenre(quests, genre);
  return getQuestsByLevel(filteredQuests, level);
};
