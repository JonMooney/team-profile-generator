let counter = 0;
class Employee{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.id = counter ++;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
