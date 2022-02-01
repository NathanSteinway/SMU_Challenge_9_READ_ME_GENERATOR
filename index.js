// Inquirer is needed for prompts in command line 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// link to js that will generate our markdown
const generateMarkdown = require('./utils/generateMarkdown');

// Array containing the questions a user will be asked to answer while creating a README

const questions = [

    // Questions asking for user input begin here
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

    // type list ensures that inquirer knows to allow the user to choose between options provided within [choices]
    
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
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// This function initializes the application.
function init() {

    //Upon launch, inquirer will prompt the user with questions contained within [questions]
    //Then passes answers to generateMarkdown() located within ./utils/generateMarkdown.js
    //THEN calls writeToFile() located above
    // Which passes README.md as the file to be written to and const markdown as the data to be written.
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
}

// Function call to initialize app
init();

