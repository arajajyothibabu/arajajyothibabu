const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const HANDLE = "arajajyothibabu";

const handle = chalk.cyan(HANDLE);
const name = chalk.white.bold("Jyothi Babu Araja");
const work = chalk.white("Software Engineer");
const web = chalk.cyan("https://arajajyothibabu.github.io");

const social = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  facebook: "https://www.fb.com/",
  twitter: "https://twitter.com/",
  npm: "https://npmjs.com/~",
};

const labels = {
  github: "         GitHub",
  linkedin: "       LinkedIn",
  facebook: "       Facebook",
  twitter: "        Twitter",
  npm: "            npm",
};

const content = `
    ${name} / ${HANDLE}
    $ ${work}_

            ${chalk.white.bold("Web")}: ${web}
${Object.entries(labels)
  .map(
    ([labelKey, label]) =>
      `${chalk.white.bold(label)}: ${chalk.cyan(social[labelKey])}${handle}`
  )
  .join("\n")}

    ${chalk.white.bold("Card")}: npx ${HANDLE}
`;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(content, options))
);
