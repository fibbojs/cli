/**
 * Custom console class for Fibbo CLI
 */
export class ConsoleUtil {
  static readonly WARN_PREFIX = "FibboWarn: ";

  static throw(message: string) {
    // If there's no |n at the end of the message, add it
    if (!message.endsWith("\n")) {
      message += "\n";
    }
    // Make message red
    message = "\x1b[31m" + message + "\x1b[0m";
    const error = new Error(message);
    error.name = "FibboError";
    throw error;
  }

  static warn(message: string) {
    // If there's no |n at the end of the message, add it
    if (!message.endsWith("\n")) {
      message += "\n";
    }
    console.warn(ConsoleUtil.WARN_PREFIX + message);
  }

  static log(message: string) {
    // If there's no |n at the end of the message, add it
    if (!message.endsWith("\n")) {
      message += "\n";
    }
    console.log(message);
  }
}
