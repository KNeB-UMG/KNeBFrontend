export type User = {
    id: number;
    full_name: string;
    email: string;
    role: string;
    permissions?: string[]
};

export type UserState = {
    user: User | null;
};