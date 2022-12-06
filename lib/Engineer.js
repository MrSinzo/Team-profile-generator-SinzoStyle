const Employee = require('./Employees')
/**Engineer subclass */
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGithub() { //this function will grab the userinput from the CLI and apply its value here?
    return Engineer.github;
  }
  getRole() {
    return 'Engineer';
  }
}
module.exports = Engineer
