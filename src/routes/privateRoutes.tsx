import configs from "@configs/index";
import AuthGuard from "@/guards/AuthGuard";
import AdminLayout from "@layouts/AdminLayout";
import Dashboard from "@pages/Dashboard";
import Manage from "@pages/Manage";

const privateRoutes = [
    {
        element: (
            <AuthGuard>
                <AdminLayout />
            </AuthGuard>
        ),
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
