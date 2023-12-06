import styled from "styled-components";

export const DropdownStyled = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;

    .dropdown__children > * {
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
`;
