#  use-try 

Clean up your code base by removing those ugly try-catch-finally blocks!

---

<p align="center">
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/badge/npm-use--try-brightgreen.svg" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/v/use-try.svg" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/dt/use-try.svg" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/travis/amonlibanio/use-try.svg" /></a>
  <a href="https://www.npmjs.com/package/use-try"><img src="https://img.shields.io/npm/l/use-try.svg" /></a>
</p>

## About

Working in a code base where methods are expected to `throw` can lead to logic being cluttered with `try-catch` blocks. This also results in poor code design.

`useTry` solves this problem by abstracting the `try-catch` logic into an external method, while giving you the flexibility to handle errors appropriately and access the return value of methods that may throw.

## Installation

To install, run:

```bash
npm install --save use-try
```

##  Usage

First, import the package:

#### JavaScript (all)

```js
const { useTry, useTryAsync } = require("use-try");
```

#### TypeScript or ES6+

```ts
import { useTry, useTryAsync } from "use-try";
```
#### Example Sync

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
  console.error("Error:", result.error); // If it fails, logs the error
}

```


#### Example Async

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
    console.error("Error:", result.error);
  }
}

```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
