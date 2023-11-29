import { PropsWithChildren, FC } from "react";
import { ContainerStyled } from "./Container.styled";

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
