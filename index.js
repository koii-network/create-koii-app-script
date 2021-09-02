#! /usr/bin/env node
const packageJson = require("./package.json");
const chalk = require("chalk");
const commander = require("commander");
console.log(
  // chalk.green(`${packageJson.name} v${packageJson.version}`),
  "Installing koiiX App"
);
let projectName;
const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")}`)
  .action((name) => {
    projectName = name;
  });
// .option("--typescript", "ts");
const execSync = require("child_process").execSync;
execSync("git clone https://github.com/koii-network/koii.X.git")
  .toString()
  .trim();
console.log(
  chalk.green(`${packageJson.name} v${packageJson.version}`),
  "installed"
);
console.log(chalk.red(`${packageJson.name} v${packageJson.version}`), "error");
const fs = require("fs-extra");
// fs.ensureDirSync(projectName);
// fs.writeFileSync(projectName, JSON.stringify(data));
// fs.moveSync("/koii.X", "/" + projectName, { overwrite: true });
// fs.copySync("/koii.X", "/" + projectName);
execSync("Mv koii.X" + " " + projectName);
console.log(program, "program");
