import styled, { css } from "styled-components";

export const ToggleStyled = styled.div<{ $on: number }>`
    .toggle {
        display: inline-block;
        position: relative;
        padding: 4px;
        border-radius: 999px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
        cursor: pointer;
        width: 74px;
        height: 42px;
        background-color: #d1d5db;

        ${(props) =>
            props.$on === 1 &&
            css`
                background-color: #10b981;
            `};

        &__dot {
            display: inline-block;
            border-radius: 999px;
            background-color: #ffffff;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
            width: 34px;
            height: 34px;

            ${(props) =>
                props.$on === 1 &&
                css`
                    transform: translateX(31px);
                `};
        }
    }
`;
