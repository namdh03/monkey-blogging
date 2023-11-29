import { ComponentPropsWithoutRef, Dispatch } from "react";
import { Control } from "react-hook-form";
import { AuthActionType } from "@utils/enum";

export type User = {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    locale: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
};

export type AuthState = {
    isAuthenticated?: boolean;
    isInitialized?: boolean;
    user: User | null;
};

export interface AuthContextType extends AuthState {
    dispatch: Dispatch<PayloadAction<AuthState>>;
}

export type PayloadAction<T> = {
    type: AuthActionType;
    payload: T;
};

export type ReducerHandlers = {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_OUT(state: AuthState): AuthState;
};

export type LabelProps = {
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
};

export type IconProps = {
    src: string;
    onClick: () => void;
};

export type SignInType = {
    email: string;
    password: string;
};

export type SignUpType = SignInType & {
    fullname: string;
};

export type InputProps = {
    id: string;
    name: keyof SignInType | keyof SignUpType;
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    placeholder?: string;
    icon?: IconProps;
};

export type LoadingProps = {
    size?: number | string;
    thickness?: number;
};

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
};
