import { ConsoleUtil } from "../util/ConsoleUtil";

/**
 * The help command is responsible for giving information about the available commands
 */
export const help = () => {
  ConsoleUtil.log(`
  === Fibbo CLI ===

  Available commands:
  - init <type> <project-name>   Initialize a new Fibbo project. The type can be '2d', '3d' or 'module'
  - upgrade                      Upgrade the current Fibbo project
  - help                         Show a list of available commands
  `);
}
