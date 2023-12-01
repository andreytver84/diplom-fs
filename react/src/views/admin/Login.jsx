import { useRef } from 'react';
import { useStateContext } from '../../contexts/ContentProvider';
import axiosClient from '../../axios-client';

export default function Login() {
  const loginRef = useRef();
  const passRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      login: loginRef.current.value,
      password: passRef.current.value,
    };
    //console.log(payload);
    axiosClient
      .post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  return (
    <main>
      <section className="login">
        <header className="login__header">
          <h2 className="login__title">Авторизация</h2>
        </header>
        <div className="login__wrapper">
          <form className="login__form" onSubmit={onSubmitHandler}>
            <label className="login__label" htmlFor="email">
              E-mail
              <input ref={loginRef} className="login__input" type="email" placeholder="example@domain.xyz" name="email" required />
            </label>
            <label className="login__label" htmlFor="pwd">
              Пароль
              <input ref={passRef} className="login__input" type="password" placeholder="" name="password" required />
            </label>
            <div className="text-center">
              <input value="Авторизоваться" type="submit" className="login__button" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
