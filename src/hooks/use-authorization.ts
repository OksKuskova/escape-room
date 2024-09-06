import { AuthorizationStatus } from '../const';
import { getAuthorizationStatus } from '../utils';

export function useAuthorization() {
  const authorizationStatus = getAuthorizationStatus();

  return {
    authorizationStatus,
    hasAuthorization: authorizationStatus === AuthorizationStatus.Auth,
  };
}
