import {Route, Routes} from "react-router-dom";
import {DashboardRoutes} from "@/router/DashboardRoutes.tsx";
import {HomeView} from "@/view/HomeView.tsx";
import {PageLayout} from "@/layout/PageLayout.tsx";


export const Router = () => {
    const routes = [...DashboardRoutes];

    return (
        <Routes>
            <Route path="/" element={
                <PageLayout>
                <HomeView />
                </PageLayout>
            } />
            {routes.map((route) => (
                <Route key={route.path} path={route.path}
                       element=
                           {
                    <PageLayout>
                        {route.element}
                           </PageLayout>
                    }
                />
            ))}
        </Routes>
    )
}