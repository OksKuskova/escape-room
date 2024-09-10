import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/user/user-thunk';

function Login(): JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"></source>
          <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt=""></img>
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                    required
                    ref={emailRef}
                  >
                  </input>
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    required
                    ref={passwordRef}
                    pattern="^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{3,15})$"
                    title="Пароль должен содержать от 3 до 15 символов, включая как минимум одну букву и одну цифру"
                  >
                  </input>
                </div>
              </div>
              <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input type="checkbox" id="id-order-agreement" name="user-agreement" required></input>
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
