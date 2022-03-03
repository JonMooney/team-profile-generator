const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const emp = new Employee('Dave', '15435', 'dave@gmail.com');
  
    expect(emp.name).toBe('Dave');
    expect(emp.id).toBe('15435');
    expect(emp.email).toBe('dave@gmail.com');
  });

test("gets employee's name", () => {
    const emp = new Employee('Dave', '15435', 'dave@gmail.com');

    expect(emp.getName()).toBe('Dave');
});

test("gets employee id", () => {
    const emp = new Employee('Dave', '15435', 'dave@gmail.com');

    expect(emp.getId()).toBe('15435');
});

test("gets employee's email", () => {
    const emp = new Employee('Dave', '15435', 'dave@gmail.com');

    expect(emp.getEmail()).toBe('dave@gmail.com');
});

test("gets employee's role", () => {
    const emp = new Employee('Dave', '15435', 'dave@gmail.com');

    expect(emp.getRole()).toBe('Employee');
});