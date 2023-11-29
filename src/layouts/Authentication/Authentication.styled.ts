import styled from "styled-components";

export const AuthenticationPageStyled = styled.section`
    min-height: 100vh;
    padding: 115px 0 217px;
    text-align: center;

    .heading {
        margin-top: 27px;
        color: ${(props) => props.theme.primaryColor};
        font-size: 4rem;
        font-weight: 600;
    }

    .form {
        margin: 107px auto 0;
        max-width: 800px;
    }

    .button {
        margin-top: 79px;
    }
`;
