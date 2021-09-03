#! /usr/bin/env node
const packageJson = require("./package.json");
const chalk = require("chalk");
const commander = require("commander");
const fs = require("fs-extra");
const path = require("path");

console.log("Installing koiiX App...");

const boxen = require("boxen");
const package = `${chalk.white.bold(
  `${packageJson.name} v${packageJson.version}`
)}`;
const nodeVersion = `${chalk.green(`Node: ${process.version}`)}`;
const description = `${chalk.blue.bold(`${packageJson.description}`)}`;
const labels = package + "\n" + description + "\n" + nodeVersion + " ";
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "classic",
  borderColor: "green",
  backgroundColor: "#555555",
  align: "center",
};

const msgBox = boxen(labels, boxenOptions);
console.log(msgBox);

let projectName;
const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("[project-directory]")
  .usage(`${chalk.green("<project-directory>")}`)
  .action((name) => {
    projectName = name || "KoiiX";
  });
program.parse(process.argv);
// .option("--typescript", "ts");

const execSync = require("child_process").execSync;
execSync("git clone https://github.com/koii-network/koii.X.git")
  .toString()
  .trim();

console.log(chalk.green("Installing dependencies..."));
fs.copySync(`${__dirname}/koii.X/`, projectName);
fs.removeSync(`${__dirname}/koii.X/`);
execSync(`cd ${projectName} && yarn --ignore-engines`);
fs.rmdirSync(path.join(projectName, "bin"), { recursive: true });
console.log(chalk.blueBright.bold("yarn start" + " \n " + "to start the app"));

console.log(
  chalk.blue.bold("yarn storybook" + " \n " + "to start the storybook")
);

console.log(chalk.blueBright.bold("yarn test", " \n ", "to run the tests"));

console.log(chalk.green.bold("We suggest that you begin by typing: "));

console.log(chalk.white.bold(`cd ${projectName}`));

console.log(chalk.green.bold("yarn start"));

console.log(chalk.white.bold("Happy hacking"));
