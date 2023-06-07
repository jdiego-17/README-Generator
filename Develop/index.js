// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter title of project',
    },
    {
      type:'input',
      name: 'Description',  
      message: 'Enter a brief description'
    },
    {
      type:'input',
      name: 'installation',  
      message: 'Describe installation process'
    },
    {
        type:'checkbox',
        name: 'languages',  
        message: 'Languages Used?',
        choices: ['HTML', 'CSS', 'JavaScript']
      },
      {
        type:'list',
        name: 'license',  
        message: 'Pick one of the following licenses',
        choices: ['MIT']
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'Enter github username',
        },
      {
        type:'input',
        name: 'email',  
        message: 'Enter email'
      },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('something went wrong', err);
    } else {
      console.log("README file has been created");
    };
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) =>{
    const markdownCont = generateMarkdown(res);
    writeToFile("README.md", markdownCont);
  })
}

// Function call to initialize app
init();
