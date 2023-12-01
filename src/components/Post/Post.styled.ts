import styled from "styled-components";

export const PostStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .post {
        &-image {
            height: 202px;
            margin-bottom: 20px;
            display: block;
            width: 100%;

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
            margin-top: auto;
            color: #6b6b6b;

            .dot {
                color: #b1b5c3;
            }
        }

        &-title {
            margin-bottom: 8px;
        }
    }
`;
