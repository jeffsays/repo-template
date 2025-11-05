/** @file - Template index.ts */

import { Command } from "commander";

const Program = new Command();

Program.command("script")
  .description("this is a script")
  .action(() => {
    const something = "something";

    try {
      console.log(something);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

Program.parse(process.argv);
