import styled from "styled-components";

export const BlogStyled = styled.div`
    padding-bottom: 100px;

    .post {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
            margin: 40px 0;
        }

        &-feature {
            width: 100%;
            max-width: 640px;
            height: 466px;
            border-radius: 20px;
        }

        &-heading {
            font-weight: bold;
            font-size: 3.6rem;
            margin-bottom: 16px;
        }
        
        &-info {
            flex: 1;
        }

        &-content {
            max-width: 700px;
            margin: 80px auto;
        }

        &-category {
            margin-bottom: 20px;
        }
    }

    .author {
        margin-top: 40px;
        margin-bottom: 80px;
        display: flex;
        border-radius: 20px;
        background-color: ${(props) => props.theme.grayF3};

        &-image {
            width: 200px;
            height: 200px;
            flex-shrink: 0;
            border-radius: inherit;
        }

        &-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }

        &-content {
            flex: 1;
            padding: 20px;
        }

        &-name {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 2rem;
        }
        
        &-desc {
            font-size: 1.4rem;
            line-height: 2;
        }
    }
`;
