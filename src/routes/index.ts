import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const RoutesComponent = () => {
    return useRoutes([...publicRoutes, ...privateRoutes]);
};

export default RoutesComponent;
