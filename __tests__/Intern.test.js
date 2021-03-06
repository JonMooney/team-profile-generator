const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const intern = new Intern('Dave', '1234', 'dave@gmail.com', 'UC Davis');
  
    expect(intern.name).toBe('Dave');
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.id).toBe('1234');
    expect(intern.school).toBe('UC Davis');

  });

test("gets school name", () => {
    const intern = new Intern('Dave', '1234', 'dave@gmail.com', 'UC Davis');

    expect(intern.getSchool()).toBe('UC Davis');
});

test("gets employee role", () => {
    const intern = new Intern('Dave', '1234', 'dave@gmail.com', 'UC Davis');

    expect(intern.getRole()).toBe('Intern');
});