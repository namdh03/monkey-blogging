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

        div + div {
            margin-top: 50px;
        }
    }

    .question {
        display: block;
        margin-top: 49px;
        font-size: 1.8rem;

        a {
            color: ${(props) => props.theme.primaryColor};
            font-size: 2rem;
            font-weight: 600;
        }
    }

    .button {
        margin-top: 30px;
    }
`;
