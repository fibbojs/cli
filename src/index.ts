import { init } from "./commands/init";
import { upgrade } from "./commands/upgrade";
import { help } from "./commands/help";
import { ConsoleUtil } from "./util/ConsoleUtil";

/**
 * Main function to run the Fibbo CLI
 * It is responsible for parsing the command and run the corresponding function with the expected parameters
 */
export const runMain = () => {
  // Get command and parameters from the global context
  const command = globalThis.__FIBBO_CLI__.args[0];
  const parameters = globalThis.__FIBBO_CLI__.args.slice(1);

  // Detect the command to run
  switch (command) {
    case "init":
      init({
        type: parameters[0],
        name: parameters[1]
      });
      break;
    case "upgrade":
      upgrade();
      break;
    case "help":
      help();
      break;
    default:
      ConsoleUtil.warn(`
        Unknown command '${command}'

        Run 'fibbo help' to see the available commands
      `);
      break;
  }
}
