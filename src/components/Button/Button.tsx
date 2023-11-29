import { FC } from "react";
import Loading from "@components/Loading";
import { ButtonProps } from "@ts/index";
import { ButtonStyled } from "./Button.styled";

const Button: FC<ButtonProps> = ({
    children,
    type,
    disabled,
    isLoading,
    onClick,
    ...props
}) => {
    return (
        <ButtonStyled
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            {...props}
        >
            {isLoading ? <Loading /> : children}
        </ButtonStyled>
    );
};

export default Button;