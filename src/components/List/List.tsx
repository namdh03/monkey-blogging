import { FC, PropsWithChildren } from "react";
import { useDropdown } from "@hooks/index";

const List: FC<PropsWithChildren> = ({ children }) => {
    const { show } = useDropdown();

    return show && <div className="dropdown__children">{children}</div>;
};

export default List;
