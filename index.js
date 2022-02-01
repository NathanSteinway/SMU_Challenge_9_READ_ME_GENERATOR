// Inquirer is needed for prompts in command line 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// link to js that will generate our markdown
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What would you like to name your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: "Please describe your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should someone use your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message:'How may someone contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is your project tested?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licenses does your product use?',
        choices: ['MIT', 'Apache 2.0']
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('done');
    })
}

// Function call to initialize app
init();

