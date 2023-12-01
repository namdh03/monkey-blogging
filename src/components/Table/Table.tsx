import { FC, PropsWithChildren } from "react";
import { TableStyled } from "./Table.styled";

const Table: FC<PropsWithChildren> = ({ children }) => {
    return (
        <TableStyled>
            <table>{children}</table>
        </TableStyled>
    );
};

export default Table;
