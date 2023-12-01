import styled from "styled-components";

export const AddPostStyled = styled.section`
    .form__group {
        display: grid;
        margin-bottom: 2.5rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 2.5rem;
    }
`;
