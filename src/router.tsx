import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { SuspenseLoader } from './components';
import { ROUTES } from './constants';

const Loader = Component => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const HomePage = Loader(lazy(() => import('./pages/home')));
const AboutUs = Loader(lazy(() => import('./pages/about')));
const NotFound = Loader(lazy(() => import('./pages/not-found')));

const routes: RouteObject[] = [
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.aboutUs,
    element: <AboutUs />,
  },
  {
    path: ROUTES.notFound,
    element: <NotFound />,
  },
];

export default routes;
