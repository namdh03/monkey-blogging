import styled from "styled-components";

export const UploadStyled = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.inputBorderColor};
    width: 100%;
    height: 250px;
    background-color: #f3f4f6;
    cursor: pointer;
    overflow: hidden;

    .none-image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        pointer-events: none;
    }

    .none-image {
        margin-bottom: 20px;
        max-width: 80px;
    }

    .text {
        font-weight: 600;
    }

    .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .progress {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 4px;
        background-color: #34d399;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    .delete-button {
        display: flex;
        position: absolute;
        visibility: hidden;
        z-index: 10;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        width: 64px;
        height: 64px;
        color: #ef4444;
        background-color: #ffffff;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
        cursor: pointer;
        opacity: 0;
    }

    .icon {
        width: 50px;
        height: 50px;
    }

    &:hover {
        .delete-button {
            visibility: visible;
            opacity: 1;
        }
    }
`;
