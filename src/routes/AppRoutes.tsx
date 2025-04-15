import SidebarLayout from '@/components/sidebar-layout';
import HomePage from '@/pages/home';
import { SignInPage } from '@/pages/signin';
import { Navigate, Route, Routes } from 'react-router-dom';

const routes = [
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/home',
    element: <SidebarLayout children={<HomePage />} />,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
