import styled from "styled-components";

export const ItemStyled = styled.article`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: 0;
    }

    .post {
        &-image {
            display: block;
            flex-shrink: 0;
            width: 180px;
            height: 130px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 12px;
            }
        }

        &-category {
            margin-bottom: 8px;
        }

        &-info {
            color: #6b6b6b;

            .dot {
                color: #b1b5c3;
            }
        }

        &-title {
            margin: 8px 0 10px;
        }
    }
`;
