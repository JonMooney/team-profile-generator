const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');

// Global object to hold manager, interns, and engineeers
const objEmployees = [];

const promptManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the team managers name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team managers employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the team managers employee ID!');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team managers email address?',
        validate: input => {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(res.test(input)){
                return true;
            }else{
                console.log('Please enter a valid email address!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the team managers office number?',
        validate: input => {
            // Phone Number Validation
            // Accepts numerous variations with and without parenthesis and dashes
            // Makes sure there are the correct amount of numbers in the string
            let res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
            if(res.test(input)){
                return true;
            } else {
                console.log('Please enter the team managers office number!');
                return false;
            }
        } 
    }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the engineers name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the engineers employee ID!');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email address?',
        validate: input => {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(res.test(input)){
                return true;
            }else{
                console.log('Please enter a valid email address!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub username?',
        validate: input => {
            if(input){
                return true;
            }else{
                console.log('Please enter a valid GitHub username!');
                return false;
            }
        } 
    }
    ]);
}

const promptIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the interns name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter the interns employee ID!');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email address?',
        validate: input => {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(res.test(input)){
                return true;
            }else{
                console.log('Please enter a valid email address!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns school name?',
        validate: input => {
            if(input){
                return true;
            }else{
                console.log('Please enter a valid school name!');
                return false;
            }
        } 
    }
    ]);
}

const promptMain = users => {
   if(!users){
       users = [];
   }

   inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish and generate a team profile page'],
    }
    ])
    .then(data => {
        const {choice} = data;
        if(choice == 'Add an engineer'){
            promptEngineer()
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                objEmployees.push(engineer);
            })
            .then(promptMain);
        }else if(choice === 'Add an intern'){
            promptIntern()
            .then(data => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                objEmployees.push(intern);
            })
            .then(promptMain);
        }else if(choice === 'Finish and generate a team profile page'){
            //console.log('add all users to master object array, then write to template, then write file');
            console.log(objEmployees);
            return;
        }
    })
}

promptManager()
.then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.number);
    objEmployees.push(manager)
    //console.log(objEmployees);
})
.then(promptMain)
.then(generateHTML(objEmployees))
.then(html => {
    writeFile(html);
})
