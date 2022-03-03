const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 'dave@gmail.com', 'UC Davis');
  
    expect(intern.name).toBe('Dave');
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe('UC Davis');

  });

test("gets school name", () => {
    const intern = new Intern('Dave', 'dave@gmail.com', 'UC Davis');

    expect(intern.getSchool()).toBe('UC Davis');
});

test("gets employee role", () => {
    const intern = new Intern('Dave', 'dave@gmail.com', 'UC Davis');

    expect(intern.getRole()).toBe('Intern');
});