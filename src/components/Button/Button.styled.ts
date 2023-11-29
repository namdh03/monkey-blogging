import styled from "styled-components";

export const ButtonStyled = styled.button`
    --button-height: 80px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 343px;
    height: var(--button-height);
    line-height: var(--button-height);
    padding: 0 16px;
    border-radius: 8px;
    background: linear-gradient(
        108deg,
        ${(props) => props.theme.buttonFromColor} 15.59%,
        ${(props) => props.theme.buttonToColor} 87.25%
    );

    color: ${(props) => props.theme.whiteColor};
    font-size: 2.4rem;
    font-weight: 600;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.9;
    }
`;