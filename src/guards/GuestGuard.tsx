import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import configs from "@configs/index";
import { useAuth } from "@hooks/index";

const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
    const { isInitialized, isAuthenticated } = useAuth();

    if (!isInitialized) return <div>Loading</div>;
    if (isAuthenticated) return <Navigate to={configs.routes.home} />;

    return <>{children}</>;
};

export default GuestGuard;
