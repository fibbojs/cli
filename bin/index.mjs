#!/usr/bin/env node

import { fileURLToPath } from 'node:url'
import { runMain } from '../dist/index.mjs'

globalThis.__FIBBO_CLI__ = {
  startTime: Date.now(),
  entry: fileURLToPath(import.meta.url),
  args: process.argv.slice(2),
}

runMain()
