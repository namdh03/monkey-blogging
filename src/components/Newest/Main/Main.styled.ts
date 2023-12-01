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
            display: inline-block;
            padding: 8px 12px;
            border-radius: 8px;
            color: #6b6b6b;
            font-size: 14px;
            font-weight: 600;
            background-color: #f3edff;
            margin-bottom: 16px;
        }

        &-info {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            margin-left: auto;
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
            font-size: 22px;
            margin-bottom: 12px;
        }
    }
`;
