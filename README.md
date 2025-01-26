# use-try

Clean up your code by removing those ugly `try-catch` blocks!

---

<p align="center">
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/badge/npm-use--try-brightgreen.svg" alt="npm package" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/v/use-try.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/dt/use-try.svg" alt="npm downloads" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/travis/amonlibanio/use-try.svg" alt="build status" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/l/use-try.svg" alt="license" /></a>
</p>

## About

When working with a codebase where methods are expected to `throw` errors, it's common to clutter your logic with `try-catch` blocks, leading to poor code design and maintainability.

`use-try` solves this problem by abstracting the `try-catch` logic into a separate method, allowing you to handle errors effectively while still accessing the return value of methods that may throw errors.

This approach helps clean up your code, making it more readable and maintainable.

## Installation

To install, run the following command:

```bash
npm install --save use-try
```

## Usage

### Importing the Package

#### JavaScript (all versions)

```js
const { useTry, useTryAsync } = require("use-try");
```

#### TypeScript or ES6+

```ts
import { useTry, useTryAsync } from "use-try";
```

### Example: Synchronous Task

Here's how you can use `useTry` to handle synchronous tasks that may throw errors:

```ts
// Synchronous task example
const syncTask = () => {
  const result = 2 + 2;
  if (result !== 4) {
    throw new Error("The result is invalid");
  }
  return result;
};

// Using useTry to execute the task
const result = useTry(syncTask, "Error executing the synchronous task");

if (result.success) {
  console.log("Task executed successfully:", result.data); // Output: 4
} else {
  console.error("Error:", result.error); // Logs the error if it fails
}
```

In this example:
- `useTry` handles the task and returns a `Result<T>` object with either the success or error message.

### Example: Asynchronous Task

For asynchronous tasks, use `useTryAsync` to handle errors:

```ts
// Asynchronous task example
const asyncTask = async () => {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

// Using async/await to execute the asynchronous task
async function executeAsyncTask() {
  const result = await useTryAsync(asyncTask);

  if (result.success) {
    console.log("Asynchronous task executed successfully:", result.data);
  } else {
    console.error("Error:", result.error); // Logs the error if it fails
  }
}
```

In this case:
- `useTryAsync` works similarly but handles asynchronous tasks by returning a `Promise<Result<T>>`.

---

## API

### `useTry<T>(task: Task<T>, errorMessage?: string): Result<T>`

Tries to execute a synchronous task and returns the result or an error.

- **`task`**: A synchronous function to be executed.
- **`errorMessage`** (optional): Custom error message if the task fails.

#### Return (`Result<T>`):

- **`success`**: A boolean value indicating whether the task succeeded (`true`) or failed (`false`).
- **`data`**: The result of the task (optional). This field will be present if the task succeeds and will contain the value returned by the task.
- **`error`**: An error message (optional). This field will be present if the task fails and will contain a description of the error.

### `useTryAsync<T>(task: Task<T>, errorMessage?: string): Promise<Result<T>>`

Tries to execute an asynchronous task and returns a Promise with the result or an error.

- **`task`**: A synchronous function or a `Promise` to be executed.
- **`errorMessage`** (optional): Custom error message if the task fails.

#### Return (`Promise<Result<T>>`):

- **`success`**: A boolean value indicating whether the asynchronous task succeeded.
- **`data`**: The value returned by the asynchronous task (if it succeeds).
- **`error`**: An error message, if the asynchronous task fails.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details