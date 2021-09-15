// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "what's the project name ?",
        },
        {
            type: 'input',
            name: 'githubName',
            message: "what is your github username ?",
        },
        {
            type: 'input',
            name: 'githubLink',
            message: "what is your github link ?",
        },
        {
            type: 'input',
            name: 'email',
            message: "email address:",
        },
        {
            type: 'input',
            name: 'description',
            message: "description:",
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: "Install instructions ?",
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: "usage info",
        },
        {
            type: 'input',
            name: 'constributionGuideines',
            message: "contribution guidelines",
        },
        {
            type: 'input',
            name: 'tests',
            message: "tests",
        },
        {
            type: 'input',
            name: 'questions',
            message: "questions",
        },
        {
            type: 'list',
            name: 'licence',
            message: "what license did you use",
            choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A']
        },
    ]).then()
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
