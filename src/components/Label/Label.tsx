import { FC } from "react";
import { LabelProps } from "@ts/index";
import { LabelStyled } from "./Label.styled";

const Label: FC<LabelProps> = ({ htmlFor, children, className, ...props }) => {
    return (
        <LabelStyled htmlFor={htmlFor} className={className} {...props}>
            {children}
        </LabelStyled>
    );
};

export default Label;
