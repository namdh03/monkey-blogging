import { AuthState, PayloadAction, ReducerHandlers } from "@ts/index";

const reducerHandlers: ReducerHandlers = {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },

    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },

    SIGN_OUT(state: AuthState): AuthState {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    },
};

export function reducer(state: AuthState, action: PayloadAction<AuthState>) {
    if (!reducerHandlers[action.type]) return state;

    return reducerHandlers[action.type](state, action);
}
