import configs from "@configs/index";
import Dashboard from "@pages/Dashboard";

const privateRoutes = [
    {
        path: configs.routes.dashboard,
        element: <Dashboard />,
    },
];

export default privateRoutes;
