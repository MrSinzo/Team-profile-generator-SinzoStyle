const Employee = require('./lib/Employee')
/**Engineer subclass */
class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return Engineer.github;
  }

  getRole() {
    return "Engineer"
  }
}
const engy1 = new Engineer (`${engineerName}`, `${engineerID}`, `${engineerEmail}`, `${engineerGithub}`)
engy1.printInfo()