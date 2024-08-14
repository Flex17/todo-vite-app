import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config";

export const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routerConfig).map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    );
                })
            }
        </Routes>
    );
};
