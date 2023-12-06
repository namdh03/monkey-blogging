import { FC } from "react";
import { useDropdown } from "@hooks/index";
import { OptionProps } from "@ts/index";
import { OptionStyled } from "./Option.styled";

const Option: FC<OptionProps> = ({ children, onClick }) => {
    const { setShow } = useDropdown();
    const handleClick = () => {
        onClick();
        setShow(false);
    };

    return <OptionStyled onClick={handleClick}>{children}</OptionStyled>;
};

export default Option;
