const Manager = require('../lib/Manager');

test("test office number", () => {
    const managerOffice = 12;
    const testEmployee = new Manager("Roger", 1, "roger@roger.com", managerOffice);
    expect(testEmployee.managerOffice).toEqual(expect.any(Number));
})

test("Role", () => {
    const managerRole = "Manager";
    const testEmployee = new Manager(managerRole);
    expect(testEmployee.getRole()).toBe(managerRole);
})