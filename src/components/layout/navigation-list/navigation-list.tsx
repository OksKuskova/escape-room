import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuthorization } from '../../../hooks/use-authorization';

function NavigationList(): JSX.Element {
  const { hasAuthorization } = useAuthorization();

  return (
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <NavLink className="link" to={AppRoute.Root}>Квесты</NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink className="link" to={AppRoute.Contacts}>Контакты</NavLink>
      </li>

      {hasAuthorization ? (
        <li className="main-nav__item">
          <NavLink className="link" to={AppRoute.MyQuests}>Мои бронирования</NavLink>
        </li>
      ) : ''}

    </ul>
  );
}

export default NavigationList;
