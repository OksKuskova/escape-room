/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate, Location, useLocation} from 'react-router-dom';
import { useAuthorization } from '../../hooks/use-authorization';

type PrivateRouteProps = {
  onlyGuests?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
};

function PrivateRoute({ onlyGuests, children }: PrivateRouteProps) {

  const location: Location<FromState> = useLocation() as Location<FromState>;
  const { authorizationStatus } = useAuthorization();

  if (onlyGuests && authorizationStatus === AuthorizationStatus.Auth) {
    const from = location.state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from} />;
    // return <Navigate to={AppRoute.Root} />;
  }

  if (!onlyGuests && authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
    // return <Navigate to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
