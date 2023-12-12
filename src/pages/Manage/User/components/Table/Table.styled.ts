import styled from "styled-components";

export const TableStyled = styled.div`
    .whitespace-nowrap {
        white-space: nowrap;
    }

    .user {
        &-info {
            display: flex;
            column-gap: 12px;
            align-items: center;
        }

        &-avatar {
            object-fit: cover;
            border-radius: 6px;
            width: 40px;
            height: 40px;
        }

        &-date {
            font-size: 1.4rem;
            color: #d1d5db;
        }
    }

    .flex-1 {
        flex: 1 1 0%;
    }

    .actions {
        display: flex;
        column-gap: 12px;
        align-items: center;
    }
`;
