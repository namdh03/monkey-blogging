import { FC } from "react";
import { Link } from "react-router-dom";
import Loading from "@components/Loading";
import { ButtonProps } from "@ts/index";
import { ButtonStyled } from "./Button.styled";

const Button: FC<ButtonProps> = ({
    children,
    to,
    disabled,
    isLoading,
    ...props
}) => {
    if (to)
        return (
            <Link to={to}>
                <ButtonStyled {...props}>{children}</ButtonStyled>
            </Link>
        );

    return (
        <ButtonStyled disabled={disabled || isLoading} {...props}>
            {isLoading ? <Loading /> : children}
        </ButtonStyled>
    );
};

export default Button;
