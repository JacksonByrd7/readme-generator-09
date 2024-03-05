// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require(',/utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is the purpose of this project?',
    },
    {
        type: 'input',
        name: 'built with',
        message: 'what languages and technolgies were used to build this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'what license did you use for this project?',
        choices: ['MIT', 'BSD', 'none'],
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'please list any contributers on this project:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'please describe any tests that you may have performed:',
    },
    {      type: 'input',
    name: 'creator',
    message: 'Please enter your Github Username.',
},
{
    type: 'input',
    name: 'link',
    message: 'Please provide the live URL link to your deployed application.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile("SampleREADME.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
