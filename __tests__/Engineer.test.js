const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const eng = new Engineer('Dave', '1234', 'dave@gmail.com', 'DaveGitHub');
  
    expect(eng.name).toBe('Dave');
    expect(eng.email).toBe('dave@gmail.com');
    expect(eng.github).toBe('DaveGitHub');
    expect(eng.id).toBe('1234')
  });

test("gets github username", () => {
    const eng = new Engineer('Dave', '1234', 'dave@gmail.com', 'DaveGitHub');

    expect(eng.getGithub()).toBe('DaveGitHub');
});

test("gets engineer's role", () => {
    const eng = new Engineer('Dave', '1234', 'dave@gmail.com', 'DaveGitHub');

    expect(eng.getRole()).toBe('Engineer');
});