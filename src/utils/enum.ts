export enum AuthActionType {
    INITIALIZE = "INITIALIZE",
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

export enum Role {
    ADMIN = 1,
    MODERATOR = 2,
    USER = 3,
    EDITOR = 4,
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

export enum UserStatus {
    ACTIVE = 1,
    INACTIVE = 0,
    BAN = -1,
}
