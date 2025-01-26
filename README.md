#  useTry 

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

Working in a code base where methods are expected to `throw` can lead to logic being cluttered with `try-catch` blocks. This also results in poor code design. 🤢

`useTry` solves this problem by abstracting the `try-catch` logic into an external method, while giving you the flexibility to handle errors appropriately and access the return value of methods that may throw. 🤘🤘

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



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
