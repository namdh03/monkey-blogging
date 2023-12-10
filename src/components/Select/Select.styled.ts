import styled from "styled-components";

export const SelectStyled = styled.div`
    .dropdown__wrapper {
        display: flex;
        padding: 12px 25px;
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
        
        span:last-child {
            height: 24px;
        }
    }

    .dropdown__icon {
        width: 24px;
        height: 24px;
    }
`;
