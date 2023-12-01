import { FC } from "react";
import { Link } from "react-router-dom";
import Loading from "@components/Loading";
import { ButtonProps } from "@ts/index";
import { ButtonStyled } from "./Button.styled";

const Button: FC<ButtonProps> = ({
    children,
    variant = "default",
    to,
    disabled,
    isLoading,
    ...props
}) => {
    if (to)
        return (
            <Link to={to}>
                <ButtonStyled $variant={variant} {...props}>
                    {children}
                </ButtonStyled>
            </Link>
        );

    return (
        <ButtonStyled
            $variant={variant}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? <Loading /> : children}
        </ButtonStyled>
    );
};

export default Button;
