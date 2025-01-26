import { Result, Task } from "./types";
import { handleAsyncTask, handleSyncTask } from "./utils/handleTask";

/**
 * Tries to execute a synchronous task and returns the result or an error.
 * @param task - A synchronous function to be executed.
 * @param errorMessage - Optional custom error message if the task fails.
 * @returns A `Result` object containing either the result or the error.
 */
export function useTry<T>(task: Task<T>, errorMessage?: string): Result<T> {
  return handleSyncTask(task, errorMessage);
}

/**
 * Tries to execute an asynchronous task and returns a Promise with the result or an error.
 * @param task - A synchronous function or a Promise to be executed.
 * @param errorMessage - Optional custom error message if the task fails.
 * @returns A `Promise` that resolves to a `Result` object containing either the result or the error.
 */
export function useTryAsync<T>(task: Task<T>, errorMessage?: string): Promise<Result<T>> {
  return handleAsyncTask(task, errorMessage);
}
