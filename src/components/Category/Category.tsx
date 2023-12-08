import { FC } from "react";
import { Link } from "react-router-dom";
import { CategoryProps } from "@ts/index";
import configs from "@configs/index";
import { CategoryStyled } from "./Category.styled";

const Category: FC<CategoryProps> = ({
    to = configs.routes.home,
    children,
    variant = "default",
    ...props
}) => {
    return (
        <Link to={to}>
            <CategoryStyled $variant={variant} {...props}>
                {children}
            </CategoryStyled>
        </Link>
    );
};

export default Category;
