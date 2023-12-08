import { FC, PropsWithChildren } from "react";
import { useAuth } from "@hooks/index";
import NotFound from "@pages/NotFound";

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
    const { isInitialized, isAuthenticated } = useAuth();

    if (!isInitialized) return <div>Loading</div>;
    if (!isAuthenticated) return <NotFound />;

    return <>{children}</>;
};

export default AuthGuard;
