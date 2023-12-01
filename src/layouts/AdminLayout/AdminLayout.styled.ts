import styled from "styled-components";

export const DashboardStyled = styled.section`
    max-width: 1600px;
    margin: 0 auto;

    .dashboard {
        &-main {
            display: grid;
            grid-template-columns: 300px minmax(0, 1fr);
            padding: 40px 20px;
            gap: 0 40px;
            align-items: start;
        }

        &-heading {
            font-weight: bold;
            font-size: 36px;
            margin-bottom: 40px;
            color: ${(props) => props.theme.primaryColor};
            letter-spacing: 1px;
        }
    }
`;
