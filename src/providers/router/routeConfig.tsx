import { RouteProps } from 'react-router-dom';
import { AppRoutes, getRouteMain } from './router';
import { MainPage } from '@/pages/MainPage/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
