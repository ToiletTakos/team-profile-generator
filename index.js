// require inquirer and fs to deal with user prompts and file management
const inquirer = require('inquirer');
const fs = require('fs');

//reaching out to each library file.
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Reach the html template
const htmlFile = require('./src/writeFileHtml');
//create an empty array that will hold the employees
const employeeArray = [];

// user is prompted for managers information
const promptManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the Managers name?',
            validate: managerName => {
                if(managerName) {
                    return true;
                }
                else{
                    console.log("Please enter Managers name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the Managers ID number? (Please enter an integer)',
            validate: managerID => {
                if(managerID && managerID % 1 === 0){
                    return true;
                }
                else {
                    console.log("Please enter a valid ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Managers email address?',
            validate: managerEmail => {
                if(managerEmail) {
                    return true;
                }
                else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the Managers office number? (Please enter an integer)',
            validate: managerOffice => {
                if(managerOffice && managerOffice % 1 === 0){
                    return true;
                }
                else{
                    console.log('Please enter a valid office number!')
                    return false;
                }
            }

        }
    ])
    .then(response => {
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
        employeeArray.push(manager)
        promptUser();
    })
}

// after manager is created the user is prompted to begin entering other members of the team
promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeam',
            message: 'Add employees that are appart of the team.',
            choices: ["Engineer", "Intern", "Finished"]
        }
    ])
    .then(function(choice){
        switch(choice.addTeam) {
            case "Engineer":
                promptEngineer();
                break;
            case "Intern":
                promptIntern();
                break;
            default:
                generateHtml();
        }
    })
}

// If user selects engineer then they are directed to the Engineer prompts
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the Engineer name?',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                }
                else{
                    console.log("Please enter Engineer name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the Engineers ID number? (Please enter an integer)',
            validate: engineerID => {
                if(engineerID && engineerID % 1 === 0){
                    return true;
                }
                else {
                    console.log("Please enter a valid ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the Engineers email address?',
            validate: engineerEmail => {
                if(engineerEmail) {
                    return true;
                }
                else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Engineers GitHub username?',
            validate: engineerGithub => {
                if(engineerGithub){
                    return true;
                }
                else{
                    console.log('Please enter a GitHub username!')
                    return false;
                }
            }

        }
    ])
    .then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
        employeeArray.push(engineer)
        promptUser();
    })
}

//If user selects intern then they are directed to the intern prompts
const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the Interns name?',
            validate: internName => {
                if(internName) {
                    return true;
                }
                else{
                    console.log("Please enter Interns name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the Interns ID number? (Please enter an integer)',
            validate: internID => {
                if(internID && internID % 1 === 0){
                    return true;
                }
                else {
                    console.log("Please enter a valid ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the Interns email address?',
            validate: internEmail => {
                if(internEmail) {
                    return true;
                }
                else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the Intern go to?',
            validate: internSchool => {
                if(internSchool){
                    return true;
                }
                else{
                    console.log('Please enter a valid school!')
                    return false;
                }
            }

        }
    ])
    .then(response => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        employeeArray.push(intern)
        promptUser();
    })
}


const generateHtml = () => {
    console.log(employeeArray)
    console.log("Team profile created!")

    fs.writeFile('./dist/index.html', htmlFile(employeeArray), err => {
        if (err) {
          reject(err);
          return;
        }
    });

}

promptManager()
