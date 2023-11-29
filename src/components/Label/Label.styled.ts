import { styled } from "styled-components";

export const LabelStyled = styled.label`
    color: ${(props) => props.theme.textColor};
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
`;
