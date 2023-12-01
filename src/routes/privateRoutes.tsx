import configs from "@configs/index";
import AdminLayout from "@layouts/AdminLayout";
import Dashboard from "@pages/Dashboard";
import Manage from "@pages/Manage";

const privateRoutes = [
    {
        element: <AdminLayout />,
        children: [
            {
                path: configs.routes.dashboard,
                element: <Dashboard />,
            },
            {
                path: configs.routes.managePost,
                element: <Manage.Post />,
            },
            {
                path: configs.routes.addPost,
                element: <Manage.AddPost />,
            },
        ],
    },
];

export default privateRoutes;
