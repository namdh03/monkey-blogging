import styled from "styled-components";

export const TableStyled = styled.section`
    overflow-x: auto;
    background-color: white;
    border-radius: 10px;

    table {
        width: 100%;
    }

    thead {
        background-color: #f7f7f8;
    }

    th,
    td {
        white-space: nowrap;
        vertical-align: middle;
    }

    th {
        padding: 20px 30px;
        font-weight: 600;
        text-align: left;
    }

    td {
        padding: 15px 30px;
    }

    tbody {
    }
`;
