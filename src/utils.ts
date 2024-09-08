import { AuthorizationStatus, Day } from './const';

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
