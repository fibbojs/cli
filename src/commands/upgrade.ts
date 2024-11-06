import { ConsoleUtil } from "../util/ConsoleUtil";
import { ProcessUtil } from "../util/ProcessUtil";

/**
 * The upgrade command is responsible for upgrading the current Fibbo project to the latest version
 */
export const upgrade = () => {
  ConsoleUtil.log("⏳ Upgrading project...");

  /**
   * Read the package.json to find every `@fibbojs` dependency and update them to the latest version
   */
  ProcessUtil.run("cat package.json")
    .then((packageJsonRaw) => {
      const packageJson = JSON.parse(packageJsonRaw);
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      const fibboDependencies = Object.keys(dependencies).filter((dependency) => dependency.startsWith("@fibbojs"));

      if (fibboDependencies.length === 0) {
        ConsoleUtil.warn("No `@fibbojs` dependencies found in the project, it seems you are running this command in a non-Fibbo project");
        return;
      } else {
        // Update every `@fibbojs` dependency to the latest version
        const upgradeCommand = `npm install ${fibboDependencies.map((dependency) => `${dependency}@latest`).join(" ")}`;
        ProcessUtil.run(upgradeCommand)
          .then(() => {
            ConsoleUtil.log("✅ Project upgraded successfully");
          })
          .catch((error) => {
            ConsoleUtil.throw("Error while upgrading the project : " + error);
          });
      }
    })
    .catch((error) => {
      ConsoleUtil.throw("Error while upgrading the project : " + error);
    });
}
