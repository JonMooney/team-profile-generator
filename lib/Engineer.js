const Employee = require('/Employee');

class Engineer{
    constructor(name, id, email, gh){
        super(name, id, email);
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