const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, email, officeNum){
        super(name, email);
        this.officeNumber = officeNum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;