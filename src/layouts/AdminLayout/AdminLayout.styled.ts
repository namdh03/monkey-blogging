import styled from "styled-components";

export const DashboardStyled = styled.section`
    max-width: 1600px;
    margin: 0 auto;

    .dashboard {
        &-heading {
            font-weight: bold;
            font-size: 2.5rem;
            margin-bottom: 5px;
            color: ${(props) => props.theme.black};
        }

        &-short-desc {
            font-size: 1.4rem;
            color: ${(props) => props.theme.gray80};
        }

        &-main {
            display: grid;
            grid-template-columns: 300px minmax(0, 1fr);
            padding: 40px 20px;
            gap: 0 40px;
            align-items: start;
        }

        @media screen and (max-width: 1023.98px) {
            &-heading {
                font-size: 2rem;
            }
            
            &-main {
                grid-template-columns: 100%;
                padding: 20px;
            }
        }
    }
`;
