import styled from "styled-components";

export const FeatureStyled = styled.article`
    width: 100%;
    border-radius: 16px;
    position: relative;
    height: 169px;

    .post {
        &-overlay {
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 16px;
            background: linear-gradient(
                179.77deg,
                #6b6b6b 36.45%,
                rgba(163, 163, 163, 0.622265) 63.98%,
                rgba(255, 255, 255, 0) 99.8%
            );
            mix-blend-mode: multiply;
            opacity: 0.6;
        }

        &-content {
            position: absolute;
            inset: 0;
            z-index: 10;
            padding: 20px;
            color: white;
        }

        &-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        &-info {
            color: #f8f9fa;
        }
    }

    @media screen and (min-width: 1024px) {
        height: 272px;
    }
`;
