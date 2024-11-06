import { exec } from 'node:child_process'
import { ConsoleUtil } from './ConsoleUtil';

export interface ProcessUtilRunOptions {
  silent?: boolean;
  throwOnFail?: boolean;
}

/**
 * A class to make it easier to run commands in the terminal
 */
export class ProcessUtil extends Error {
  static run(command: string, options?: ProcessUtilRunOptions): Promise<string> {
    // DEFAULT OPTIONS
    options = {
      silent: true,
      throwOnFail: false,
      ...options
    };

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          if (options.throwOnFail) {
            ConsoleUtil.throw(error.message);
          }
          reject(error.message);
        }
        if (stderr) {
          if (!options.silent) {
            ConsoleUtil.log(stderr);
          }
        }
        if (!options.silent) {
          ConsoleUtil.log(stdout);
        }
        resolve(stdout);
      });
    });
  }
}
