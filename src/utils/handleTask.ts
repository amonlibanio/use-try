import { Result, Task } from "../types";
import { handleError } from "./handleError";

/**
 * Handles an asynchronous task and returns a `Result`.
 * @param task - The Promise to be executed.
 * @param errorMessage - Optional custom error message.
 * @returns A Promise resolving to a `Result`.
 */
export async function handleAsyncTask<T>(task: Task<T>, errorMessage?: string): Promise<Result<T>> {
  try {
    const data = await Promise.resolve(task() as Promise<T>);
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return handleError(err, errorMessage);
  }
}

/**
 * Handles a synchronous task and returns a `Result`.
 * @param task - The synchronous function to be executed.
 * @param errorMessage - Optional custom error message.
 * @returns A `Result`.
 */
export function handleSyncTask<T>(task: Task<T>, errorMessage?: string): Result<T> {
  try {
    const data = task() as T;
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return handleError(err, errorMessage);
  }
}
