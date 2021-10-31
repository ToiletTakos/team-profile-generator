const Engineer = require('../lib/Engineer');

test("test engineer GitHub", () => {
    const github = "billythekid";
    const testEmployee = new Engineer("Roger", 1, "roger@roger.com", github);
    expect(testEmployee.github).toBe(github);
})

test("Role", () => {
    const engineerRole = "Engineer";
    const testEmployee = new Engineer("Roger", 1, "roger@roger.com", "billythekid", engineerRole);
    expect(testEmployee.getRole()).toBe(engineerRole);
})