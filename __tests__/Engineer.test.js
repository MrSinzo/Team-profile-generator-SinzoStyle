const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("can create a new Engineer instance", () => {
    const engineer = new Engineer();
    console.log(engineer);

    expect(typeof(engineer)).toBe("object")// style 1?
    // expect(typeof (engineer).toBe("object")); // style 2?
  });
  it("can set a name", () => {
    const name = "Karen";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
  });
  it("can set an id to the manager", () => {
    const id = 67;
    const engineer = new Engineer("testName", id);
    expect(engineer.id).toBe(id);
  });
  it("Can set an email for the new employee", () => {
    const email = "123@email.com";
    const engineer = new Engineer("testName", 67, email);
    // expect(engineer.email).toInclude("@");
    expect(engineer.email).toContain("@");

  });
  it("can set the office number for the manager", () => {
    const github = "hunkyMonkey";
    const engineer = new Engineer("testName", 67, "123@email.com", github);
    expect(engineer.github).toBe(github);
  });
}); // got the main properties of the class, include methods?
