import styled from "styled-components";

export const NewestStyled = styled.article`
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
            display: inline-block;
            padding: 8px;
            border-radius: 8px;
            color: #6b6b6b;
            font-size: 12px;
            font-weight: 600;
            background-color: white;
            margin-bottom: 8px;
        }

        &-info {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            margin-left: auto;
            color: #6b6b6b;
        }

        &-dot {
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 100rem;
        }

        &-title {
            font-weight: bold;
            line-height: 1.5;
            display: block;
            font-size: 16px;
            margin-bottom: 8px;
        }
    }
`;
