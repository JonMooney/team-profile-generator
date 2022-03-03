const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const eng = new Engineer('Dave', 'dave@gmail.com', 'DaveGitHub');
  
    expect(eng.name).toBe('Dave');
    expect(eng.email).toBe('dave@gmail.com');
    expect(eng.github).toBe('DaveGitHub');
    expect(eng.id).toEqual(expect.any(Number));
  });

test("gets github username", () => {
    const eng = new Engineer('Dave', 'dave@gmail.com', 'DaveGitHub');

    expect(eng.getGithub()).toBe('DaveGitHub');
});

test("gets employee role", () => {
    const eng = new Engineer('Dave', 'dave@gmail.com', 'DaveGitHub');

    expect(eng.getRole()).toBe('Engineer');
});