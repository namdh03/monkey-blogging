import {
    FC,
    PropsWithChildren,
    createContext,
    useEffect,
    useReducer,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import configs from "@configs/index";
import { AuthContextType, AuthState } from "@ts/index";
import { initialize } from "./actions";
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
        onAuthStateChanged(configs.firebase.auth, (user) => {
            if (!user)
                return dispatch(
                    initialize({ isAuthenticated: false, user: null })
                );

            dispatch(initialize({ isAuthenticated: !!user, user }));
        });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
