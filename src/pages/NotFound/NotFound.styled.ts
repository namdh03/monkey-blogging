import styled from "styled-components";

export const NotFoundStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .title {
        margin: 70px 0;
        font-size: 8rem;
        font-weight: 700;
        color: ${(props) => props.theme.primaryColor};
    }
`;
