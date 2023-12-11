import configs from "@configs/index";
import AuthGuard from "@/guards/AuthGuard";
import AdminLayout from "@layouts/AdminLayout";
import Dashboard from "@pages/Dashboard";
import Manage from "@pages/Manage";
import Profile from "@pages/Profile";

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
            {
                path: configs.routes.manageCategory,
                element: <Manage.Category />,
            },
            {
                path: configs.routes.addCategory,
                element: <Manage.AddCategory />,
            },
            {
                path: configs.routes.manageUser,
                element: <Manage.User />,
            },
            {
                path: configs.routes.profile,
                element: <Profile />,
            },
        ],
    },
];

export default privateRoutes;
