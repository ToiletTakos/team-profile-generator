const Intern = require('../lib/Intern');

test("test intern school", () => {
    const school = "The Best One";
    const testEmployee = new Intern("Roger", 1, "roger@roger.com", school);
    expect(testEmployee.school).toBe(school);
})

test("Role", () => {
    const internRole = "Intern";
    const testEmployee = new Intern("Roger", 1, "roger@roger.com", "The Best One", internRole);
    expect(testEmployee.getRole()).toBe(internRole);
})