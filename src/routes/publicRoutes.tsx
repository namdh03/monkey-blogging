import configs from "@configs/index";
import GuestGuard from "@/guards/GuestGuard";
import Authentication from "@layouts/Authentication";
import MainLayout from "@layouts/MainLayout";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Blog from "@pages/Blog";

const publicRoutes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: configs.routes.home,
                element: <Home />,
            },
            {
                path: configs.routes.blogDetail,
                element: <Blog />,
            },
        ],
    },
    {
        element: (
            <GuestGuard>
                <Authentication />
            </GuestGuard>
        ),
        children: [
            {
                path: configs.routes.signIn,
                element: <SignIn />,
            },
            {
                path: configs.routes.signUp,
                element: <SignUp />,
            },
        ],
    },
    {
        path: configs.routes.notFound,
        element: <NotFound />,
    },
];

export default publicRoutes;
