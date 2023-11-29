import { FC, PropsWithChildren, createContext, useEffect, useReducer } from "react";
import { AuthContextType, AuthState } from "@ts/index";
import { reducer } from "./reducer";

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null,
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
