export type Result<T> = { success: boolean; data?: T; error?: string };
export type Task<T> = (() => Promise<T>) | (() => T);
