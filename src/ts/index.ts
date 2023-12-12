import { ComponentPropsWithoutRef, Dispatch } from "react";
import { Control } from "react-hook-form";
import { Timestamp } from "firebase/firestore";
import { User } from "firebase/auth";
import { AuthActionType, Role } from "@utils/enum";

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

export type RoleBasedGuardProps = {
    accessibleRoles: Array<Role>;
    children: React.ReactNode;
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

export type AddPostType = {
    id: string;
    userId: string;
    title: string;
    slug: string;
    categoryId: string;
    status: number;
    image: string;
    top: number;
    url: string;
    createdAt: Timestamp;
};

export type AddCategoryType = {
    categoryName: string;
    slug: string;
    status: number;
    createdAt: Timestamp;
};

export type ProfileType = {
    fullname: string;
    username: string;
    birthday: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type FormType =
    | SignInType
    | SignUpType
    | AddPostType
    | AddCategoryType
    | ProfileType;

export type InputProps = {
    id: string;
    name:
        | keyof SignInType
        | keyof SignUpType
        | keyof AddPostType
        | keyof AddCategoryType
        | keyof ProfileType;
    type: string;
    control:
        | Control<SignInType>
        | Control<SignUpType>
        | Control<AddPostType>
        | Control<AddCategoryType>
        | Control<ProfileType>;
    placeholder?: string;
    icon?: IconProps;
};

export type LoadingProps = {
    size?: number | string;
    thickness?: number;
};

export type ButtonVariantType = "primary" | "secondary" | "default" | "text";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    variant?: ButtonVariantType;
    to?: string;
    disabled?: boolean;
    isLoading?: boolean;
};

export type VariantType = "primary" | "secondary" | "default" | "text";

export type CategoryProps = ComponentPropsWithoutRef<"span"> & {
    to?: string;
    children: React.ReactNode;
    variant?: VariantType;
};

export type SizeType = "small" | "medium" | "large";

export type TitleProps = ComponentPropsWithoutRef<"h3"> & {
    children: React.ReactNode;
    to: string;
    size?: SizeType;
};

export type MetaProps = {
    time?: string;
    author?: string;
    className?: string;
};

export type ImageProps = ComponentPropsWithoutRef<"img"> & {
    url: string;
};

export type NavbarLinksType = {
    path: string;
    name: string;
};

export type SidebarLinksType = {
    title: string;
    url: string;
    icon: string;
    onclick?: () => void;
};

export type SearchProps = ComponentPropsWithoutRef<"input"> & {
    placeholder?: string;
};

export type RadioProps = ComponentPropsWithoutRef<"input"> & {
    checked?: boolean;
    children: React.ReactNode;
    control: Control<AddPostType> | Control<AddCategoryType>;
    name: keyof AddPostType | keyof AddCategoryType;
};

export type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
    checked?: boolean;
    children: React.ReactNode;
    control: Control<AddPostType> | Control<AddCategoryType>;
    name: keyof AddPostType | keyof AddCategoryType;
};

export type DropdownContextType = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type UploadProps = ComponentPropsWithoutRef<"input"> & {
    progress: number;
    image: string;
    onDelete: () => void;
};

export type ToggleProps = ComponentPropsWithoutRef<"div"> & {
    on: number;
};

export type CategoryType = {
    id: string;
    categoryName: string;
    slug: string;
    status: number;
};

export type SelectProps = ComponentPropsWithoutRef<"div"> & {
    placeholder: string;
};

export type OptionProps = {
    children: React.ReactNode;
    onClick: () => void;
};

export type UserType = {
    id: string;
    avatar: string;
    fullname: string;
    email: string;
    createdAt: Timestamp;
    username: string;
    status: number;
    role: string;
};

export type AdminHeadingProps = {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
};

export type TagVariantType = "success" | "info" | "warning" | "danger";

export type TagType = {
    children: React.ReactNode;
    variant?: TagVariantType;
};

export type ActionType = {
    onClick?: () => void;
};
