import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard/dashboard-page";
import Root from "../components/root/root";
import OrdersPage from "../pages/orders/orders-page";
import OrderPage from "../pages/order/order-page";
import TeamPage from "../pages/team/team-page";
import ProfilePage from "../pages/profile/profile-page";
import NewOrderPage from "../pages/new-order/new-order-page";
import ClinicsPage from "../pages/clinics/clinics-page";
import ClinicPage from "../pages/clinic/clinic-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/orders",
                element: <OrdersPage />,
            },
            {
                path: "/orders/:id",
                element: <OrderPage />,
            },
            {
                path: "/team",
                element: <TeamPage />,
            },
            {
                path: "/profile",
                element: <Navigate to="/profile/info" />,
            },
            {
                path: "/profile/:id",
                element: <ProfilePage />,
            },
            {
                path: "/new-order",
                element: <NewOrderPage />,
            },
            {
                path: "/clinics",
                element: <ClinicsPage />,
            },
            {
                path: "/clinics/:id",
                element: <ClinicPage />,
            },
            // Маршрут для страницы 404
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);