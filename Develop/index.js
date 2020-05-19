// Pulls the inquirer file from the internet and stores it in the inquirer variable const
const inquirer = require("inquirer");
// Pulls the fs file from the internet storing it in the fs const variable
const fs = require("fs");
// Pulls the path file from the internet storing it in the path const variable
const path = require("path");
// Pulls the data in the generateMarkdown.js file storing it in the const togenerateMarkdown
const togenerateMarkdown = require("./utils/generateMarkdown");
// uses the prompt function built into iquirer Storing the questions in an array of properties in the const questions
const questions = [
  {
    type: "input",
    message: "What is your Project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Project description?",
    name: "description",
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "Who were your contributors?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What tests do you need to run",
    name: "tests",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["GNU GPLv3", "MIT License"],
  },
  {
    type: "input",
    message: "What is you github username?",
    name: "username",
  },
  {
    type: "input",
    message: "Whats your email?",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("readme.md", togenerateMarkdown(response));
  });
}

init();
