import { AuthState, PayloadAction } from "@ts/index";
import { AuthActionType } from "@utils/enum";

export function initialize(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.INITIALIZE,
        payload,
    };
}

export function signIn(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.SIGN_IN,
        payload,
    };
}

export function signOut(): PayloadAction<AuthState> {
    return {
        type: AuthActionType.SIGN_OUT,
        payload: {
            isAuthenticated: false,
            user: null,
        },
    };
}
