import { FC, PropsWithChildren } from "react";
import { HeadingStyled } from "./Heading.styled";

const Heading: FC<PropsWithChildren> = ({ children }) => {
    return <HeadingStyled>{children}</HeadingStyled>;
};

export default Heading;
