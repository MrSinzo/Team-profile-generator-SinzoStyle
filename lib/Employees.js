/*Parent Class */
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return Employee.name;
  }

  getId() {
    return Employee.id;
  }

  getEmail() {
    return Employee.email;
  }

  getRole() {
    return 'Employee';
  }
}
// const employee1 = new Employee ("Joe", 12, "billy@bob.com")
// const employee1 = new Employee (`${managerName}`, `${managerId}`, `${managerEmail}`)

module.exports = Employee;