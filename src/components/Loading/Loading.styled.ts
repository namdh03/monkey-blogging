import styled from "styled-components";

export const LoadingStyled = styled.div<{
    $size: number | string;
    $thickness: number;
}>`
    display: inline-block;
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
    border: ${(props) => props.$thickness + "px"} solid white;
    border-top: ${(props) => props.$thickness + "px"} solid transparent;
    border-bottom: ${(props) => props.$thickness + "px"} solid transparent;
    border-radius: 50%;
    animation: spinner 1s infinite linear;

    @keyframes spinner {
        100% {
            transform: rotate(360deg);
        }
    }
`;
