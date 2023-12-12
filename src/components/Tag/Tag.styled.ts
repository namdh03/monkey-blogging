import styled, { css } from "styled-components";
import { TagVariantType } from "@ts/index";

export const TagStyled = styled.span<{ $variant: TagVariantType }>`
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 500;

    ${(props) =>
        props.$variant === "success" &&
        css`
            color: #10b981;
            background-color: #d1fae5;
        `};

    ${(props) =>
        props.$variant === "warning" &&
        css`
            color: #f59e0b;
            background-color: #fef3c7;
        `};

    ${(props) =>
        props.$variant === "danger" &&
        css`
            color: #ef4444;
            background-color: #fee2e2;
        `};

    ${(props) =>
        props.$variant === "info" &&
        css`
            color: #6b7280;
            background-color: #f3f4f6;
        `};
`;
