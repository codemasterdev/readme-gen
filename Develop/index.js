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
            name: 'githubUsername',
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
            message: "what is your email address ?",
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
