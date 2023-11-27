export default function Login() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
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
              <input className="login__input" type="email" placeholder="example@domain.xyz" name="email" required />
            </label>
            <label className="login__label" htmlFor="pwd">
              Пароль
              <input className="login__input" type="password" placeholder="" name="password" required />
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
