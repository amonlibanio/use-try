import { Result } from "../src/types";
import { useTry, useTryAsync } from "../src/useTry";

describe("useTry", () => {
  it("should handle synchronous tasks successfully", () => {
    const task = () => 42; // A successful synchronous task
    const result: Result<number> = useTry(task);

    expect(result.success).toBe(true);
    expect(result.data).toBe(42);
    expect(result.error).toBeUndefined();
  });

  it("should handle synchronous task errors", () => {
    const task = () => {
      throw new Error("Sync task failed");
    };
    const result: Result<number> = useTry(task);

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toEqual("Sync task failed");
  });

  it("should handle asynchronous tasks successfully", async () => {
    const task = async () => "Async success"; // A successful asynchronous task
    const result: Result<string> = await useTryAsync(task);

    expect(result.success).toBe(true);
    expect(result.data).toBe("Async success");
    expect(result.error).toBeUndefined();
  });

  it("should handle asynchronous task errors", async () => {
    const task = async () => {
      throw new Error("Async task failed");
    };
    const result: Result<string> = await useTryAsync<string>(task);

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toEqual("Async task failed");
  });

  it("should return custom error message for synchronous tasks", () => {
    const task = () => {
      throw new Error("Sync task failed");
    };
    const result: Result<number> = useTry(task, "Custom error message");

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toBe("Custom error message");
  });

  it("should return custom error message for asynchronous tasks", async () => {
    const task = async () => {
      throw new Error("Async task failed");
    };
    const result: Result<string> = await useTryAsync<string>(task, "Custom error message");

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toBe("Custom error message");
  });
});
