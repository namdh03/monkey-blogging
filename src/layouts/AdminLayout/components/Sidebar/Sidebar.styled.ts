import styled from "styled-components";

export const SidebarStyled = styled.aside`
    width: 300px;
    background: #ffffff;
    box-shadow: 10px 10px 20px rgba(218, 213, 213, 0.15);
    border-radius: 12px;

    .sidebar-logo {
        display: flex;
        align-items: center;
        font-weight: 600;
        gap: 0 20px;

        img {
            max-width: 40px;
        }

        margin-bottom: 20px;
        padding: 20px 20px 0;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 14px 20px;
        font-weight: 500;
        color: ${(props) => props.theme.gray80};
        margin-bottom: 20px;
        cursor: pointer;

        &.active,
        &:hover {
            background: #f1fbf7;
            color: ${(props) => props.theme.primary};
        }
    }

    .menu-icon {
        width: 24px;
        height: 24px;
        filter: brightness(0) saturate(100%) invert(76%) sepia(6%)
            saturate(202%) hue-rotate(201deg) brightness(86%) contrast(87%);
    }
`;
