import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  onlyGuests?: boolean;
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

// type FromState = {
//   from?: Location;
// };

function PrivateRoute({onlyGuests, children, authorizationStatus}: PrivateRouteProps) {

  // const location: Location<FromState> = useLocation() as Location<FromState>

  if (onlyGuests && authorizationStatus === AuthorizationStatus.Auth) {
    // const from = location.state?.from || {pathname: AppRoute.Root}
    // return <Navigate to={from} />;
    return <Navigate to={AppRoute.Root} />;
  }

  if (!onlyGuests && authorizationStatus === AuthorizationStatus.NoAuth) {
    // return <Navigate state={{from: location}} to={AppRoute.Login} />;
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
