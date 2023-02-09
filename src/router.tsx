import { RootRoute, Route, ReactRouter } from '@tanstack/react-router';
import { MainLayout } from './layouts';
import { basicReactQueryPageRoute, homePageRoute } from './pages';

export const rootRoute = new RootRoute({ component: MainLayout });

const routeTree = rootRoute.addChildren([homePageRoute, basicReactQueryPageRoute]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
