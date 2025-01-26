import { Result } from "../types";

/**
 * Centralizes the error handling logic and returns a standardized error response.
 * @param err - The error encountered during task execution.
 * @param errorMessage - Optional custom error message.
 * @returns A standardized error result.
 */
export function handleError<T>(err: unknown, errorMessage?: string): Result<T> {
  const message = errorMessage || ErrorMessage(err);
  return { success: false, error: message };
}

/**
 * Extracts the error message from an error object.
 * @param err - The error object.
 * @returns A string containing the error message.
 */
export function ErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return "An unexpected error occurred";
}
