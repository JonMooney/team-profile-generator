const Employee = require('/Employee');

class Engineer{
    constructor(gh){
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