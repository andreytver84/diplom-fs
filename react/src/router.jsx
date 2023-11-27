import { Navigate, createBrowserRouter } from 'react-router-dom';
import Hall from './views/client/Hall';
import NotFound from './views/NotFound';
import Login from './views/admin/Login';
import AdminPanel from './views/admin/AdminPanel';
import DefaultLayout from './components/DefaultLayout';
import AdminLayout from './components/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/hall" />,
      },
      {
        path: '/hall',
        element: <Hall />,
      },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/adminpanel',
        element: <AdminPanel />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
