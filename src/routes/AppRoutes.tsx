import SidebarLayout from '@/components/sidebar-layout';
import DashboardPage from '@/pages/dashboard';
import { SignInPage } from '@/pages/signin';
import { Navigate, Route, Routes } from 'react-router-dom';

const routes = [
  {
    path: '*',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/dashboard',
    element: <SidebarLayout children={<DashboardPage />} />,
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
