const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("can create a new intern instance", () => {
    const intern = new Intern();
    console.log(intern);

    // expect(typeof(engineer)).toBe("object")// style 1?
    expect(typeof (intern)).toBe("object"); // style 2?
  });
  it("can set a name", () => {
    const name = "Karen";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
  });
  it("can set an id to the intern", () => {
    const id = 67;
    const intern = new Intern("testName", id);
    expect(intern.id).toBe(id);
  });
  it("Can set an email for the new intern", () => {
    const email = "123@email.com";
    const intern = new Intern("testName", 67, email);
    // expect(engineer.email).toInclude("@");
    expect(intern.email).toContain("@");
  });
  it("can set the office number for the intern", () => {
    const school = "hunkyMonkey CC";
    const intern = new Intern("testName", 67, "123@email.com", school);
    expect(intern.school).toBe(school);
  });
}); // got the main properties of the class, include methods?