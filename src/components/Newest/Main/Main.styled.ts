import styled from "styled-components";

export const MainStyled = styled.section`
    .post {
        &-image {
            display: block;
            margin-bottom: 16px;
            height: 433px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 16px;
            }
        }

        &-category {
            margin-bottom: 16px;
        }

        &-info {
            color: #6b6b6b;

            .dot {
                color: #b1b5c3;
            }
        }

        &-title {
            margin-bottom: 12px;
        }
    }
`;
