const Employee = require('../lib/Employee');

test("Check if employee is created", () => {
    const testEmployee = new Employee();
    expect(typeof(testEmployee)).toBe("object");
})

test("check name", () => {
    const name = "Roger"
    const testEmployee = new Employee(name);
    expect(testEmployee.name).toBe(name);
})

test("check ID", () => {
    const id = 1;
    const testEmployee = new Employee("Roger",id);
    expect(testEmployee.id).toEqual(expect.any(Number));
})

test("check email", () => {
    const email = "roger@roger.com";
    const testEmployee = new Employee("Roger",1, email);
    expect(testEmployee.email).toBe(email)
})