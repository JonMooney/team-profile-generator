const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const emp = new Employee('Dave', 'dave@gmail.com');
  
    expect(emp.name).toBe('Dave');
    expect(emp.email).toBe('dave@gmail.com');
    expect(emp.id).toEqual(expect.any(Number));
  });

test("gets employee's name", () => {
    const emp = new Employee('Dave', 'dave@gmail.com');

    expect(emp.getName()).toBe('Dave');
});

test("gets employee id", () => {
    const emp = new Employee('Dave', 'dave@gmail.com');

    expect(emp.getId()).toBe(emp.id);
});

test("gets employee's email", () => {
    const emp = new Employee('Dave', 'dave@gmail.com');

    expect(emp.getEmail()).toBe('dave@gmail.com');
});

test("gets employee's role", () => {
    const emp = new Employee('Dave', 'dave@gmail.com');

    expect(emp.getRole()).toBe('Employee');
});