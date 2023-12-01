import styled from "styled-components";
import Button from "@components/Button";

export const BannerStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 144px;
    padding: 53px 46px 53px 36px;
    background: linear-gradient(
        155deg,
        ${(props) => props.theme.linearFromColor} 6.67%,
        ${(props) => props.theme.linearToColor} 84.1%
    );

    .title {
        color: ${(props) => props.theme.whiteColor};
        font-size: 4.4rem;
        font-weight: 700;
    }

    .desc {
        margin-top: 28px;
        color: ${(props) => props.theme.whiteColor};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 200%;
    }

    .media {
        flex-shrink: 0;
        width: 508px;

        &__img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const ButtonStyled = styled(Button)`
    margin-top: 48px;
`;
