import styled from "styled-components";

export const HeadingStyled = styled.h2`
    color: ${(props) => props.theme.tertiary};
    font-size: 2.8rem;
    position: relative;
    margin-bottom: 30px;
    font-weight: 600;
    line-height: 128.571%;

    &:before {
        content: "";
        width: 50px;
        height: 4px;
        background-color: ${(props) => props.theme.accent};
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, -150%);
    }
`;
