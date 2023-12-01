import styled from "styled-components";

export const PostStyled = styled.section`
    .search {
        display: flex;
        margin-bottom: 2.5rem;
        justify-content: flex-end;

        &__input-wrapper {
            width: 100%;
            max-width: 300px;
        }

        &__input {
            padding: 1rem;
            border-radius: 0.5rem;
            border-width: 1px;
            border-color: #d1d5db;
            border-style: solid;
            width: 100%;
        }
    }

    .post {
        display: flex;
        column-gap: 0.75rem;
        align-items: center;

        &__img {
            object-fit: cover;
            border-radius: 0.25rem;
            width: 66px;
            height: 55px;
        }

        &__content {
            flex: 1 1 0%;
        }

        &__date {
            display: inline-block;
            margin-top: 8px;
            font-size: 1.4rem;
        }

        &__text {
            color: #6b7280;
        }
    }

    .actions {
        display: flex;
        column-gap: 0.75rem;
        align-items: center;

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.25rem;
            border-width: 1px;
            border-color: #e5e7eb;
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;
        }
    }

    .pagination {
        margin-top: 2.5rem;
    }
`;
