# Fibbo CLI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

This repository contains the source code of the Fibbo CLI, the command line interface for the Fibbo game engine.

## Usage

To start the Fibbo CLI, you can use the following command:

```bash
npx fibbo <command> [options]
```

## Development

- Install the dependencies
  ```bash
  npm install
  ```

- Run commands

  To test the Fibbo CLI locally :

  ```bash
  npm run fibbo <command> [options]
  ```

  For example :

  ```bash
  npm run fibbo help
  npm run fibbo init 2d my-new-game
  npm run fibbo upgrade
  ```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/fibbo/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/fibbo

[npm-downloads-src]: https://img.shields.io/npm/dm/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/fibbo

[license-src]: https://img.shields.io/npm/l/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/fibbo
