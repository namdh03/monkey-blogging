import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .header-avatar {
        width: 52px;
        height: 52px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 999px;
        }
    }
`;
