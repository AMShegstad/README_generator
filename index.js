// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from "fs/promises";
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    'What is your project called? ', 
    'Provide a description of the project? ',
    'Please provide installation instructions for the project: ',
    'What is the intended use of this project? ',
    'How can developers contribute to your project? ',
    'Provide Test instructions: ',
    "Which type of license comes with your software? "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // the filename and data are already assigned by the time it gets to this, so a simple function will so what we need.
    writeFile(fileName, data, 'utf8');
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            // Choices were gleaned from the options found in GitHubs' Docs.
            // https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
            choices: [
                'Apache license 2.0', 
                'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license',
                'BSD 3-clause Clear license',
                'Creative Commons Zero v1.0 Universal',
                'Creative Commons Attribution 4.0',
                'Creative Commons Attribution ShareAlike 4.0',
                'Eclipse Public License 1.0',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License v3.0',
                'ISC',
                'MIT',
                'Mozilla Public License 2.0',
                'SIL Open Font License 1.1',
                'The Unlicense',
                'zLib License'
            ]
        }
    ])
    .then((promise => {

       writeToFile('readMe.md', generateMarkdown(promise));
    })
)};

// Function call to initialize app
init();
