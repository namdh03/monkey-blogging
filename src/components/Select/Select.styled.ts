import styled from "styled-components";

export const SelectStyled = styled.div`
    .dropdown__wrapper {
        display: flex;
        padding: 25px 20px 25px 27px;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        background: ${(props) => props.theme.whiteColor};
        border: 1px solid ${(props) => props.theme.inputBorderColor};

        &:hover {
            border-color: ${(props) => props.theme.inputBorderHoverColor};
        }
    }

    .dropdown__icon {
        width: 2.4rem;
        height: 2.4rem;
    }
`;
