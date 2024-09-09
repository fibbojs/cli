#!/usr/bin/env node

import { fileURLToPath } from 'node:url'
import { runMain } from '../dist/index.mjs'

globalThis.__FIBBO_CLI__ = {
  startTime: Date.now(),
  entry: fileURLToPath(import.meta.url),
}

runMain()

/* dist/index.mjs
export const runMain = () => {
  console.log('Hello Fibbo !')
  console.log(globalThis.__FIBBO_CLI__)
}
*/
