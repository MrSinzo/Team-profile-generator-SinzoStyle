const Employee = require('./lib/Employee')
/**Manager sub-class */
class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}
const manager1 = new Manager (`${managerName}`, `${managerId}`, `${managerEmail}`, `${managerOffice}`)
