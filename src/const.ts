export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  Login = 'login',
  Booking = '/quest/:id/booking',
  MyQuests = '/my-quests',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
