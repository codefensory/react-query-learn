import { RootRoute, Route, ReactRouter } from '@tanstack/react-router';
import { MainLayout } from './layouts';
import { queriesPageRoute, homePageRoute, paginationPageRoute, mutationsPageRoute } from './pages';

export const rootRoute = new RootRoute({ component: MainLayout });

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  queriesPageRoute,
  paginationPageRoute,
  mutationsPageRoute,
]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
