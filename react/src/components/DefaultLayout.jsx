import { Outlet } from 'react-router-dom';
import './DefaultLayout.css';

export default function DefaultLayout() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">
          Идём<span>в</span>кино
        </h1>
      </header>
      <Outlet />
    </>
  );
}
