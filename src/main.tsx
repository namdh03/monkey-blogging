import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import { AuthProvider } from "@contexts/auth/AuthContext.tsx";
import GlobalStyle from "@themes/globalStyles.ts";
import theme from "@utils/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
            <ToastContainer />
        </AuthProvider>
    </React.StrictMode>
);
