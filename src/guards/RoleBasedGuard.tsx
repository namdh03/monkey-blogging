import { FC } from "react";
import { useAuth } from "@hooks/index";
import { RoleBasedGuardProps } from "@ts/index";

const RoleBasedGuard: FC<RoleBasedGuardProps> = ({
    accessibleRoles,
    children,
}) => {
    const { user } = useAuth();

    console.log(user, accessibleRoles);

    // if (!accessibleRoles.includes(user!.role)) return <div>Not found!</div>;

    return <>{children}</>;
};

export default RoleBasedGuard;
