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
  getGithub() { //this function will grab the userinput from the CLI and apply its value here// kind of: this will grab the value form the cli and actually place it in the method, which we can call into index.js for properly update data
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}
module.exports = Engineer
