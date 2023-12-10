import styled from "styled-components";

export const AddPostStyled = styled.section`
    .form__group {
        display: grid;
        margin-bottom: 40px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 40px;

        & > * {
            margin-top: 0;
        }
    }

    .form__radio {
        display: flex;
        column-gap: 20px;
        align-items: center;
    }

    .tag {
        display: inline-block;
        padding: 16px;
        border-radius: 4px;
        font-size: 1.6rem;
        font-weight: 500;
        color: #059669;
        background-color: #ecfdf5;
    }
`;
