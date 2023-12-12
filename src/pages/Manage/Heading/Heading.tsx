import { FC } from "react";
import { AdminHeadingProps } from "@ts/index";
import { HeadingStyled } from "./Heading.styled";

const Heading: FC<AdminHeadingProps> = ({ children, title, subtitle }) => {
    return (
        <HeadingStyled>
            <div>
                <h1 className="dashboard-heading">{title}</h1>
                <p className="dashboard-short-desc">{subtitle}</p>
            </div>
            {children}
        </HeadingStyled>
    );
};

export default Heading;
