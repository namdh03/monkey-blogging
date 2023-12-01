import styled, { css } from "styled-components";
import { SizeType } from "@ts/index";

export const TitleStyled = styled.h3<{ $size: SizeType }>`
    font-weight: bold;
    line-height: 1.5;
    display: block;
    font-weight: 600;

    ${(props) =>
        props.$size === "large" &&
        css`
            font-size: 22px;
        `};

    ${(props) =>
        props.$size === "medium" &&
        css`
            font-size: 18px;
        `};

    ${(props) =>
        props.$size === "small" &&
        css`
            font-size: 16px;
        `};
`;
