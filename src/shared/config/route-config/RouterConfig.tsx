import { RouteObject } from "react-router-dom";
import { Home } from "pages/home";
import { Completed } from "pages/completed";

export enum MainAppRoutes {
	HOME = "home",
	COMPLETED = "completed",
}

export const MainRouterPath: Record<MainAppRoutes, string> = {
    [MainAppRoutes.HOME]: "/",
    [MainAppRoutes.COMPLETED]: "/completed",
};

export const routerConfig: Record<MainAppRoutes, RouteObject> = {
    [MainAppRoutes.HOME]: {
        path: MainRouterPath.home,
        element: <Home />,
    },
    [MainAppRoutes.COMPLETED]: {
        path: MainRouterPath.completed,
        element: <Completed />,
    },
};
