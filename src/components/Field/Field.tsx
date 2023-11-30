import { FC, PropsWithChildren } from "react";
import { FieldStyled } from "./Field.styled";

const Field: FC<PropsWithChildren> = ({ children }) => {
    return <FieldStyled>{children}</FieldStyled>;
};

export default Field;
