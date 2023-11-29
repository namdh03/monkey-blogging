import configs from "@configs/index";
import Authentication from "@layouts/Authentication";
import Home from "@pages/Home";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";

const publicRoutes = [
    {
        path: configs.routes.home,
        element: <Home />,
    },
    {
        element: <Authentication />,
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
];

export default publicRoutes;
