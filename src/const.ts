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

