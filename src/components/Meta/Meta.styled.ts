import styled from "styled-components";

export const MetaStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;

    > * {
        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 1);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .dot {
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: currentColor;
        border-radius: 100rem;
    }
`;
