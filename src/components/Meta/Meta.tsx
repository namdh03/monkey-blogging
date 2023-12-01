import { FC } from "react";
import { MetaProps } from "@ts/index";
import { MetaStyled } from "./Meta.styled";

const Meta: FC<MetaProps> = ({ time, author, className }) => {
    return (
        <MetaStyled className={className}>
            <span className="time">{time}</span>
            <span className="dot"></span>
            <span className="author">{author}</span>
        </MetaStyled>
    );
};

export default Meta;
