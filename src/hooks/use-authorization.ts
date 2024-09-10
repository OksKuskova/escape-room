import { AuthorizationStatus } from '../const';
import { useAppSelector } from '.';
import { getAuthorizationStatus } from '../store/user/user';

export function useAuthorization() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return {
    authorizationStatus,
    isAuthChecked: authorizationStatus !== AuthorizationStatus.Unknown,
  };
}
