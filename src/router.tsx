import { RootRoute, Route, ReactRouter } from '@tanstack/react-router';
import { MainLayout } from './layouts';
import { basicPageRoute, homePageRoute, paginationPageRoute } from './pages';
import { mutationsPageRoute } from './pages/Mutations';

export const rootRoute = new RootRoute({ component: MainLayout });

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  basicPageRoute,
  paginationPageRoute,
  mutationsPageRoute,
]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
