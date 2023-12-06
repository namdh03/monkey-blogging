import { FC, PropsWithChildren } from "react";
import { DropdownStyled } from "./Dropdown.styled";
import { DropdownProvider } from "@contexts/dropdown/DropdownContext";

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
    return (
        <DropdownProvider>
            <DropdownStyled>{children}</DropdownStyled>
        </DropdownProvider>
    );
};

export default Dropdown;
