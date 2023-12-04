import styled, { css } from "styled-components";

export const RadioStyled = styled.div<{ $isChecked: boolean }>`
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
    font-weight: 500;
    cursor: pointer;

    .radio {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 9999px;
        background-color: #e5e7eb;

        ${(props) =>
            props.$isChecked &&
            css`
                background-color: #34d399;
            `};
    }
`;
