import { Navigate, Outlet } from 'react-router-dom';
import './AdminLayout.css';
import { useStateContext } from '../contexts/ContentProvider';

export default function AdminLayout() {
  // const { user, token } = useStateContext();
  const { token } = useStateContext();

  return (
    <div className="wrap">
      <header className="page-header">
        <h1 className="page-header__title">
          Идём<span>в</span>кино
        </h1>
        <span className="page-header__subtitle">Администраторррская</span>
      </header>
      <Outlet />
      {!token && <Navigate to="/login" />}
    </div>
  );
}
