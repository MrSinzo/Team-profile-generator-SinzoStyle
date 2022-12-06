const Manager = require("../lib/Manager")

describe("employee", () => {
  it("can create a new manager instance", () => {
    const manager = new Manager()
    console.log(manager)

    // expect(typeof(manager)).toBe("object")// style 1?
    expect(typeof(manager)).toBe("object") // style 2?
  })
  it("can set a name", () =>{
    const name = "Karen"
    const manager = new Manager(name)
    expect(manager.name).toBe(name)
  })
  it ("can set an id to the manager", () => {
    const id = 67;
    const manager = new Manager("testName", id)
    expect(manager.id).toBe(id)
  }) 
  it("Can set an email for the new employee", () => {
    const email = "123@email.com";
    const employee = new Manager("testName", 67, email);
    expect(employee.email).toBe(email);
  });
  it("can set the office number for the manager", () => {
    const officeNumber = 214;
    const manager = new Manager("testName", 67, "123@email.com", officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
  })
}) // got the main properties of the class, include methods?