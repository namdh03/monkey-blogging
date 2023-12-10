import { css } from "styled-components";

export const GlobalClasses = css`
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        line-height: 1.5;
        // -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: "Epilogue", sans-serif;
        font-size: 1.6rem;
        color: #232323;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input,
    button,
    textarea,
    select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
    }

    button {
        outline: none;
        border: none;
        background: transparent;
    }

    .hidden-input {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
    }

    .container {
        width: 100%;
        max-width: 1260px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .text-primary {
        color: #a4d96c;
    }

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
            gap: 40px;
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

    .home-block {
        padding-bottom: 40px;
        @media screen and (min-width: 1024px) {
            padding-bottom: 60px;
        }
    }

    .entry-content {
        font-size: 1.6rem;

        h2,
        h3,
        h4 {
            font-weight: bold;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 3.2rem;
        }

        h3 {
            font-size: 2.6rem;
        }

        h4 {
            font-size: 2.2rem;
        }

        p {
            margin-bottom: 20px;
            line-height: 2;
        }

        figure {
            margin-bottom: 20px;
        }

        figure img {
            width: 100%;
            border-radius: 20px;
            margin-bottom: 10px;
        }

        figcaption {
            text-align: center;
            font-style: italic;
            font-size: 1.4rem;
            color: #6b6b6b;
        }

        @media screen and (max-width: 1023.98px) {
            font-size: 1.4rem;

            h2 {
                font-size: 2.6rem;
            }

            h3 {
                font-size: 2.4rem;
            }

            h4 {
                font-size: 2rem;
            }
        }
    }

    .hidden-input {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
    }

    .form-layout {
        display: grid;
        margin-bottom: 1.25rem;
        grid-template-columns: repeat(1, minmax(0, 1fr));

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 2.5rem;
        }
    }
`;
