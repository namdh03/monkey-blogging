import { FC } from "react";
import { AdminHeadingProps } from "@ts/index";
import { HeadingStyled } from "./Heading.styled";

const Heading: FC<AdminHeadingProps> = ({ title, subtitle }) => {
    return (
        <HeadingStyled>
            <h1 className="dashboard-heading">{title}</h1>
            <p className="dashboard-short-desc">{subtitle}</p>
        </HeadingStyled>
    );
};

export default Heading;
