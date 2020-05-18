// req inquierer, axios, genererateMarkdown.js, fs

// ask the user a bunch of questions
// -- use inquirer to ask a bunch of questions
// -- get the object w/ all the answers
// then block
// call out to the users gihub to get prof pic and email
// -- use axios to make an http call to dudes github -- promise
// -- then block
// -- sift thru that response and find the info u need
// -- create an obj w/ all that info
/*
    {
        title: "who is the black panther",
        profilePicUrl: "http://princeAchu"
    }
*/
// pass all of that crap to the genMarkdown funct
// -- catch the response in a var (makr)
// use that result to create a .md file (README.MD)
// -- fs.writeFile('Readme.md', makr, function(err) {
// if (err) {
//         console.log(err)
// }
//     console.log('IM DONE')
// })
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var togenerateMarkdown = require("./utils/generateMarkdown");
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
    name: "installation",
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
    name: "tests",
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
// path.join(process.cwd(), fileName),
// .then(answers);

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("readme.md", togenerateMarkdown(response));
  });
}

init();
