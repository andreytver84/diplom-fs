import { Outlet } from 'react-router-dom';
import './AdminLayout.css';

export default function AdminLayout() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">
          Идём<span>в</span>кино
        </h1>
        <span className="page-header__subtitle">Администраторррская</span>
      </header>
      <Outlet />
    </>
  );
}
