import { useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function Logo(): JSX.Element {
  const { pathname } = useLocation();

  if (pathname as AppRoute === AppRoute.Root) {
    return (
      <span className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </span>
    );
  }

  return (
    <Link className="logo header__logo" to={AppRoute.Root} aria-label="Перейти на Главную">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
