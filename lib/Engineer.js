const Employee = require('./Employees')
/**Engineer subclass */
class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() { //this function will grab the userinput from the CLI and apply its value here?
    return Engineer.github;
  }

  getRole() {
    return "Engineer"
  }
}
// const engy1 = new Engineer (`${engineerName}`, `${engineerID}`, `${engineerEmail}`, `${engineerGithub}`)
module.exports = Engineer
