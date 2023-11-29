import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const RoutesComponent = () => {
    return useRoutes([...publicRoutes]);
};

export default RoutesComponent;
