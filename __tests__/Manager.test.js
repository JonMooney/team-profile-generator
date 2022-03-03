const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Dave', '1234', 'dave@gmail.com', '9165551234');
  
    expect(manager.name).toBe('Dave');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.id).toBe('1234');
    expect(manager.officeNumber).toBe('9165551234');
});

test("gets manager's role", () => {
    const manager = new Manager('Dave', '1234', 'dave@gmail.com', '9165551234');

    expect(manager.getRole()).toBe('Manager');
});