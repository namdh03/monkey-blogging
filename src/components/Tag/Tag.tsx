import { FC } from "react";
import { TagType } from "@ts/index";
import { TagStyled } from "./Tag.styled";

const Tag: FC<TagType> = ({ children, variant = "info" }) => {
    return <TagStyled $variant={variant}>{children}</TagStyled>;
};

export default Tag;
