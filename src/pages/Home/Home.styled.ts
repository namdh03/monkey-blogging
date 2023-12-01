import styled from "styled-components";

export const Section = styled.section`
    margin-top: 60px;

    .grid-layout {
        display: grid;
        grid-auto-columns: 235px;
        gap: 20px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        @media screen and (min-width: 1024px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 48px;
        }
        @media screen and (max-width: 1023.98px) {
            grid-auto-flow: column;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
        }

        & > * {
            scroll-snap-align: start;
        }
        &--primary {
            grid-auto-columns: 220px;
            @media screen and (min-width: 1024px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }
    }

    .layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 40px;
        margin-bottom: 64px;
        align-items: start;
    }

    .sidebar {
        padding: 28px 20px;
        background-color: #f3edff;
        border-radius: 16px;
    }
`;
