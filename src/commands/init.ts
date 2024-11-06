import { ConsoleUtil } from "../util/ConsoleUtil";
import { ProcessUtil } from "../util/ProcessUtil";

export interface InitOptions {
  type: string;
  name: string;
}

const handleTigedError = (error: string) => {
  if(error.includes("destination directory is not empty")) {
    ConsoleUtil.warn("The destination directory is not empty. Please, choose another name or remove the existing directory");
  } else {
    ConsoleUtil.throw("Error while initializing the project : " + error);
  }
}

/**
 * The init command is responsible for initializing a new Fibbo project
 */
export const init = async (options: InitOptions) => {
  /**
   * Validate the type parameter
   */
  if (options.type === undefined || options.type === "") {
    ConsoleUtil.warn("You must provide a type for the project to be initialized");
    return;
  }
  if (options.type !== "2d" && options.type !== "3d" && options.type !== "module") {
    ConsoleUtil.warn("Invalid project type. It must be '2d', '3d' or 'module'");
    return;
  }
  /**
   * Validate the name parameter
   */
  if (options.name === undefined || options.name === "") {
    ConsoleUtil.warn("You must provide a name for the project to be initialized");
    return;
  }

  /**
   * Run the tiged command to clone the corresponding template
   */
  switch (options.type) {
    case "2d":
      ConsoleUtil.log("⏳ Initializing 2D project...");
      ProcessUtil.run(`npx tiged@latest fibbojs/starter-2d ${options.name}`)
        .then(() => {
          ConsoleUtil.log("✅ 2D project initialized");
          ConsoleUtil.log(`
            To start the project, run the following commands:
        
            cd ${options.name}
            npm install
            npm run dev
          `);
        })
        .catch(handleTigedError);
      break;
    case "3d":
      ConsoleUtil.log("⏳ Initializing 3D project...");
      ProcessUtil.run(`npx tiged@latest fibbojs/starter-3d ${options.name}`)
        .then(() => {
          ConsoleUtil.log("✅ 3D project initialized");
          ConsoleUtil.log(`
            To start the project, run the following commands:
        
            cd ${options.name}
            npm install
            npm run dev
          `);
        })
        .catch(handleTigedError);
      break;
    case "module":
      ConsoleUtil.log("⏳ Initializing module project...");
      ProcessUtil.run(`npx tiged@latest fibbojs/starter-module ${options.name}`)
        .then(() => {
          ConsoleUtil.log("✅ Module project initialized");
          ConsoleUtil.log(`
            To start the project, run the following commands:
        
            cd ${options.name}
            npm install
            npm run dev
          `);
        })
        .catch(handleTigedError);
      break;
  }
}
