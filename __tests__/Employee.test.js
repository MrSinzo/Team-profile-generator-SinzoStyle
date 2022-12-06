const Employee = require("../lib/Employees");

describe("employees", () => {
  it("can create a new employee instance", () => {
    //arrange
    const employee = new Employee();
    console.log(employee);
    // act and assert
    expect(typeof(employee)).toBe("object");
    console.log(employee);
  });
  it("can set a name", () => {
    const name = "joel";
    console.log(name)
    const employee = new Employee(name);
    console.log( employee)
    expect(employee.name).toBe(name);
  });
  it("can set and ID", () => {
    const id = 67;
    const employee = new Employee("testName", id);
    expect(employee.id).toBe(id);
  });
  it("Can set an email for the new employee", () => {
    const email = "123@email.com";
    const employee = new Employee("testName", 67, email);
    expect(employee.email).toBe(email);
  });
  it("can get name via getName()", () => {
    const name = "Joel";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
  });
});
