import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
