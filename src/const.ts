export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  Login = '/login',
  Booking = '/quest/:id/booking',
  MyQuests = '/my-quests',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Level {
  'any' = 'any',
  'easy' = 'easy',
  'medium' = 'medium',
  'hard' = 'hard',
}

export enum QuestGenre {
  'all' = 'all',
  'adventures' = 'adventures',
  'horror' = 'horror',
  'mystic' = 'mystic',
  'detective' = 'detective',
  'sci-fi' = 'sci-fi',
}

export enum Day {
  'today' = 'today',
  'tomorrow' = 'tomorrow',
}

export const GENRE_FILTER_DEFAULT = QuestGenre.all;
export const LEVEL_FILTER_DEFAULT = Level.any;

export const filterLevelList = {
  [Level.any]: 'Любой',
  [Level.easy]: 'Лёгкий',
  [Level.medium]: 'Средний',
  [Level.hard]: 'Сложный',
};

export const filterGenreList = {
  [QuestGenre.all]: 'Все квесты',
  [QuestGenre.adventures]: 'Приключения',
  [QuestGenre.horror]: 'Ужасы',
  [QuestGenre.mystic]: 'Мистика',
  [QuestGenre.detective]: 'Детектив',
  [QuestGenre['sci-fi']]: 'Sci-fi',
};

export const ImageSize = {
  Preview: {
    WIDTH: 344,
    HEIGHT: 232,
  },
  Cover: {
    WIDTH: 1366,
    HEIGHT: 768,
  }
};


