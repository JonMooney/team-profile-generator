const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, email, gh){
        super(name, email);
        this.github = gh;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;