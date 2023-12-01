import Button from "@components/Button";
import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    padding: 40px 0 44px;

    .logo {
        display: block;
        width: 43px;
        height: 56px;
        object-fit: cover;
    }

    .navbar {
        margin-left: 13px;

        &__list {
            display: flex;
            align-items: center;
            column-gap: 20px;
        }

        &__link {
            padding: 10px;
            color: ${(props) => props.theme.blackColor};
            font-size: 1.8rem;
            font-weight: 500;
        }
    }

    .search {
        position: relative;
        min-width: 320px;
        margin-left: auto;

        &__input {
            width: 100%;
            padding: 18px 41px 18px 21px;
            border-radius: 8px;
            border: 1px solid ${(props) => props.theme.searchBorderColor};
            background: ${(props) => props.theme.whiteColor};
            font-size: 1.6rem;
            color: ${(props) => props.theme.blackColor};
            transition: border-color 0.2s linear;
            outline: none;

            &::placeholder {
                color: #999;
            }

            &:focus {
                border-color: ${(props) => props.theme.searchBorderHoverColor};
            }
        }

        &__icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            padding: 14px;
            cursor: pointer;
        }
    }
`;

export const ButtonStyled = styled(Button)`
    --width: 191px;
    --height: 60px;
    margin-left: 21px;
    font-size: 1.8rem;
    background: ${(props) => props.theme.buttonBgColor};
`;
