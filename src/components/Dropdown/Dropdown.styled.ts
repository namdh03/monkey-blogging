import styled from "styled-components";

export const DropdownStyled = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;

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

    .dropdown__children > * {
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
`;
