import styled, { css } from "styled-components";

export const CheckboxStyled = styled.div<{ $isChecked: boolean }>`
    display: flex;
    column-gap: 12px;
    align-items: center;
    font-weight: 500;
    cursor: pointer;

    .checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: 24px;
        height: 24px;
        color: transparent;
        background-color: #e5e7eb;

        ${(props) =>
            props.$isChecked &&
            css`
                color: #ffffff;
                background-color: #34d399;
            `};
    }

    .icon {
        width: 24px;
        height: 24px;
    }
`;
