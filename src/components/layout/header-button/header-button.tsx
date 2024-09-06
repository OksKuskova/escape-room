import { Link } from 'react-router-dom';
import { useAuthorization } from '../../../hooks/use-authorization';
import { AppRoute } from '../../../const';

function HeaderButton(): JSX.Element {
  const { hasAuthorization } = useAuthorization();

  if (hasAuthorization) {
    return (
      <a className="btn btn--accent header__side-item" href="#">Выйти</a>
    );
  }

  return (
    <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
  );
}

export default HeaderButton;
