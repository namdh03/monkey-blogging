import { FC, PropsWithChildren } from "react";
import useDropdown from "@hooks/useDropdown";
import { OptionStyled } from "./Option.styled";

const Option: FC<PropsWithChildren> = ({ children }) => {
    const { onClick } = useDropdown();

    return <OptionStyled onClick={onClick}>{children}</OptionStyled>;
};

export default Option;
