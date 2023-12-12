import styled from "styled-components";

export const CategoryStyled = styled.div`
    .category {
        &-name {
            color: #9ca3af;
            font-style: italic;
        }

        &-heading {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &-search {
            width: 100%;
            max-width: 300px;
        }

        &-input {
            padding: 20px 16px;
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

        &-btn {
            margin-top: 10px;
        }
    }

    .actions {
        display: flex;
        gap: 1.25rem;
        color: #9ca3af;
    }
`;
