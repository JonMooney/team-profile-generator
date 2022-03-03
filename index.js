const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const manager = require('./lib/Manager');

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
                console.log('Please enter a valid team manager email address!');
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

promptManager()
.then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.number)
    console.log(manager);
})





