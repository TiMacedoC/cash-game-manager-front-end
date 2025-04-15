import SidebarLayout from '@/components/sidebar-layout';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import HomePage from '@/pages/home';
import { SignInPage } from '@/pages/signin';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const PlayersPage = lazy(() => import('@/pages/players'));

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
    element: (
      <Suspense fallback={<LoadingSpinner full={true} size="100" />}>
        <SidebarLayout children={<HomePage />} />
      </Suspense>
    ),
  },
  {
    path: '/players',
    element: (
      <Suspense fallback={<LoadingSpinner full={true} size="100" />}>
        <SidebarLayout children={<PlayersPage />} />
      </Suspense>
    ),
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
