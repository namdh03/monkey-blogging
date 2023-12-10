import styled, { css } from "styled-components";

export const RadioStyled = styled.div<{ $isChecked: boolean }>`
    display: flex;
    column-gap: 12px;
    align-items: center;
    font-weight: 500;
    cursor: pointer;

    .radio {
        width: 38px;
        height: 38px;
        border-radius: 999px;
        background-color: #e5e7eb;

        ${(props) =>
            props.$isChecked &&
            css`
                background-color: #34d399;
            `};
    }
`;
