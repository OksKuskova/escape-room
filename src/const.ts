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
  'easy',
  'medium',
  'hard',
}

export enum QuestType {
  'adventures',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
}

export enum Date {
  'today',
  'tomorrow',
}

export const filterLevelList = {
  'any': 'Любой',
  'easy': 'Лёгкий',
  'medium': 'Средний',
  'hard': 'Сложный',
};

export const filterGenreList = {
  'all': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
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
