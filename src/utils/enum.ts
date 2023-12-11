export enum AuthActionType {
    INITIALIZE = "INITIALIZE",
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export enum PostStatus {
    APPROVED = 1,
    PENDING = 0,
    REJECTED = -1,
}

export enum CategoryStatus {
    APPROVED = 1,
    UN_APPROVED = 0,
}
