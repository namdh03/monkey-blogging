import configs from "@configs/index";
import Home from "@pages/Home";
import SignUp from "@pages/SignUp";

const publicRoutes = [
    {
        path: configs.routes.home,
        element: <Home />,
    },
    {
        path: configs.routes.signUp,
        element: <SignUp />,
    },
];

export default publicRoutes;
