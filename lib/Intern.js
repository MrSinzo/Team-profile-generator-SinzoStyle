const Employee = require('./Employees')
/**Intern sub-class */
class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return Intern.school;
  }
  getRole() {
    return "Intern"
  }
}
// const intern1 = new Intern (`${internName}`, `${internID}`, `${internEmail}`, `${internSchool}`)
module.exports = Intern