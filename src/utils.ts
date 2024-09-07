import { AuthorizationStatus } from './const';

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

export const changeTimeFormat = (time: string) => {
  const splitTime = time.split(':');
  const [hours, minutes] = splitTime;
  return `${hours}h${minutes}m`;
};

export const getSlotKeyValue = (key: string) => {
  switch(key) {
    case 'today': return 'Сегодня';
    case 'tomorrow': return 'Завтра';
  }
};
