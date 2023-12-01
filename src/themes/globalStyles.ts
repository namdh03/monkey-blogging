// globalStyles.ts
import { createGlobalStyle } from "styled-components";
import { GlobalClasses } from "./globalClasses";

export const GlobalStyle = createGlobalStyle`
    ${GlobalClasses}
`;

export default GlobalStyle;
