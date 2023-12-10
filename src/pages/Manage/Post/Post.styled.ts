import styled from "styled-components";

export const PostStyled = styled.section`
    .post {
        &__heading {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            gap: 20px;
            justify-content: flex-end;
        }

        &__category {
            width: 100%;
            max-width: 200px;
        }

        &__search {
            width: 100%;
            max-width: 300px;
        }

        &__search-input {
            padding: 16px;
            border-radius: 8px;
            border-width: 1px;
            border-color: #d1d5db;
            border-style: solid;
            width: 100%;
            outline: none;

            &:focus {
                border-color: ${(props) => props.theme.inputBorderHoverColor};
            }
        }

        &__image {
            display: flex;
            column-gap: 12px;
            align-items: center;
        }

        &__image-img {
            object-fit: cover;
            border-radius: 4px;
            width: 66px;
            height: 55px;
        }

        &__desc {
            flex: 1 1 0%;

            h3 {
                font-weight: 600;
            }

            time {
                font-size: 1.4rem;
                line-height: 1.4;
            }
        }

        &__text {
            color: #6b7280;
        }

        &__actions {
            display: flex;
            column-gap: 12px;
            align-items: center;
        }

        &__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
            width: 40px;
            height: 40px;
            cursor: pointer;

            svg {
                width: 20px;
                height: 20px;
            }
        }

        &__pagination {
            margin-top: 40px;
            text-align: center;
        }

        &__btn {
            width: 200px;
            background-color: rgba(29, 192, 113, 0.1);
        }
    }
`;
