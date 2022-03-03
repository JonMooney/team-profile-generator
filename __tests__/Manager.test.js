const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 'dave@gmail.com', '9165551234');
  
    expect(manager.name).toBe('Dave');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toBe('9165551234');
});

test("gets manager's role", () => {
    const manager = new Manager('Dave', 'dave@gmail.com', '9165551234');

    expect(manager.getRole()).toBe('Manager');
});