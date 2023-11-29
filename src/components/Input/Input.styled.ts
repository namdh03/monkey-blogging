import { styled } from "styled-components";

export const InputStyled = styled.div<{ $isIcon: boolean }>`
    position: relative;
    width: 100%;

    input {
        width: inherit;
        padding: ${(props) =>
            props.$isIcon ? "25px 60px 25px 27px" : "25px 20px 25px 27px"};
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme.inputBorderColor};
        background: ${(props) => props.theme.whiteColor};
        outline: none;

        color: ${(props) => props.theme.textColor};
        font-size: 2rem;
        font-weight: 500;

        transition: border-color 0.2s linear;

        &:hover,
        &:focus {
            border-color: ${(props) => props.theme.inputBorderHoverColor};
        }

        &::placeholder {
            color: ${(props) => props.theme.placeholderColor};
        }
    }

    .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        translate: 0 -50%;
        padding: 10px;
        cursor: pointer;
    }
`;
