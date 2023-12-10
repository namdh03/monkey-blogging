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
            font-size: 2.2rem;
        `};

    ${(props) =>
        props.$size === "medium" &&
        css`
            font-size: 1.8rem;
        `};

    ${(props) =>
        props.$size === "small" &&
        css`
            font-size: 1.6rem;
        `};
`;
