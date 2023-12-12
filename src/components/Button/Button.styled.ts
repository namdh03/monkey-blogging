import styled, { css } from "styled-components";
import { ButtonVariantType } from "@ts/index";

export const ButtonStyled = styled.button<{
    $variant: ButtonVariantType | undefined;
}>`
    --width: 343px;
    --height: 80px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: var(--width);
    height: var(--height);
    line-height: var(--height);
    padding: 0 16px;
    border-radius: 8px;

    color: ${(props) => props.theme.whiteColor};
    font-size: 2.4rem;
    font-weight: 600;

    ${(props) =>
        props.$variant === "default" &&
        css`
            --width: 230px;
            --height: 60px;

            color: #23bb86;
            font-size: 1.8rem;
            font-weight: 600;
            background-color: rgba(29, 192, 113, 0.1);
        `};

    ${(props) =>
        props.$variant === "primary" &&
        css`
            background: linear-gradient(
                108deg,
                ${(props) => props.theme.linearFromColor} 15.59%,
                ${(props) => props.theme.linearToColor} 87.25%
            );
        `};

    ${(props) =>
        props.$variant === "secondary" &&
        css`
            --width: 191px;
            --height: 60px;
            font-size: 1.8rem;
            background: ${(props) => props.theme.buttonBgColor};
        `};

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.9;
    }
`;
