import { Link } from 'react-router-dom';
import { useAuthorization } from '../../../hooks/use-authorization';
import { useAppDispatch } from '../../../hooks';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { logout } from '../../../store/user/user-thunk';

function HeaderButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAuthorization();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    const handleButtonClick = (evt: React.SyntheticEvent) => {
      evt.preventDefault();
      dispatch(logout());
    };

    return (
      <a
        className="btn btn--accent header__side-item"
        href="#"
        onClick={handleButtonClick}
      >
        Выйти
      </a>
    );
  }

  return (
    <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
  );
}

export default HeaderButton;
