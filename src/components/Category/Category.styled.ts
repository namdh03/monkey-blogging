import styled, { css } from "styled-components";
import { VariantType } from "@ts/index";

export const CategoryStyled = styled.article<{ $variant: VariantType }>`
    display: inline-block;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #6b6b6b;

    ${(props) =>
        props.$variant === "primary" &&
        css`
            background-color: ${props.theme.categoryPrimaryBgColor};
        `};

    ${(props) =>
        props.$variant === "default" &&
        css`
            background-color: ${props.theme.whiteColor};
        `};
`;
