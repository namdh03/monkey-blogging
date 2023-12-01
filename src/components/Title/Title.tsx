import { FC } from "react";
import { Link } from "react-router-dom";
import { TitleProps } from "@ts/index";
import { TitleStyled } from "./Title.styled";

const Title: FC<TitleProps> = ({ children, to, size = "medium", ...props }) => {
    return (
        <Link to={to}>
            <TitleStyled $size={size} {...props}>
                {children}
            </TitleStyled>
        </Link>
    );
};

export default Title;
