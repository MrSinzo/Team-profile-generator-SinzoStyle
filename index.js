const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/Manager");

const Intern = require("./lib/Intern");

const Engineer = require("./lib/Engineer");

const teamMember = [];
let teamHtmlArray = []
function generateTeam(teamMember) { // 
  const html = [];
  
  // creates the manager html card
  const generateManager = (manager) => {
    return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${
            this.name
          }</h5><h5 class="ml-1">${manager.getRole()}</h5></div>
            <p class="card-text">ID : ${this.id}</p>
            <p class="card-text">Email : <a href="mailto:${this.email}">${
      this.email
    }</a></p>
            <p class="card-text">Office Number : ${this.officeNumber}</p>
        </div>
    </div>
    </div>
        `;
  };
  html.push(
    // team was originally here but changing it to teamMember array didnt help...//edit needed to use html.join(``) on line 110, page now loads but we get undefined in all categories
    teamHtmlArray
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  // creates the html card for engineers
  const generateEngineer = (engineer) => {
    // <div class="card employee-card">
    // <div class="card-header">
    return `
  <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body">
      <div class="bg-info p-2"><h5 class="card-title ml-1">${
        this.name
      }</h5><h5 class="ml-1">${engineer.getRole()}</h5></div>
        <p class="card-text">ID : ${this.id}</p>
        <p class="card-text">Email : <a href="mailto:${this.email}">${
      this.email
    }</a></p>
        <p class="card-text"> Github : https://www.github.com/${this.github}</p>
      </div>
    </div>
  </div>
        `;
  };
  html.push(
    teamHtmlArray 
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  // creates the html card for interns
  const generateIntern = (intern) => {
    return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${
            this.name
          }</h5><h5 class="ml-1">${intern.getRole()}</h5></div>
            <p class="card-text">ID : ${this.id}</p>
            <p class="card-text">Email : <a href="mailto:${this.email}">${
      this.email
    }</a></p>
            <p class="card-text">School : ${this.school}</p>
        </div>
      </div>
      </div>
        `;
  };
  html.push(
    teamHtmlArray
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${html.join(``)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
}

/**${getRole()}*/
/**starting with team managers questions */
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Team Managers name?",
        default: "Joe" // take out before turn in
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Team Managers ID number?",
        default: 21// take out before turn in
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Team Manager's Email address?",
        default: "email Address"
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the Team Manager's office number?",
        default: 12// take out before turn in
      },
      {
        type: "list",
        name: "employees",
        message: "What kind of Employee would you like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      // console.log(response);
      const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );
      teamMember.push(manager); // tried adding [] to manager see if that would fix undefined issue, no luck
      console.log("checking manager content \n"+manager); //edit comes up as [object Object].... ugh
      if (response.employees == "Intern") {
        internCall();
      }
      if (response.employees == "Engineer") {
        engineerCall();
      } else {
        buildPage();
      }
    });
}

/**engineer's questions */
function engineerCall() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
        default: "Bill" // take out before turn in
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the Engineer's ID number?",
        default: "234" // take out before turn in
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?",
        default: "other@email" // take out before turn in
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's Github Username?",
        default: "BillyJoeBob" // take out before turn in
      },
      {
        type: "list",
        name: "employees",
        message: "Any other Employee's you would like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      // console.log(response);
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGithub
      );
      teamMember.push(engineer);
      console.log("checking engineer content \n"+engineer);
      if (response.employees == "Intern") {
        internCall();
      }
      if (response.employees == "Engineer") {
        engineerCall();
      } else {
        buildPage();
      }
    });
}

/**Interns Questions */
function internCall() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?",
        default: "Sue" // take out before turn in
      },
      {
        type: "input",
        name: "internID",
        message: "What is the Intern's ID number?",
        default: 567 // take out before turn in
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's Email address?",
        default: "2ndEmail" // take out before turn in
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the Intern attend?",
        default: "a good one" // take out before turn in
      },
      {
        type: "list",
        name: "employees",
        message: "Any other Employee's you would like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      // console.log(response);
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      teamMember.push(intern);
      console.log(intern);
      if (response.employees == "Intern") {
        internCall();
      }
      if (response.employees == "Engineer") {
        engineerCall();
      } else {
        buildPage();
      }
    });
}
/**Function call to get the application started */
init();
function buildPage() {
  const htmlPageContent = generateTeam(teamMember);
  console.log("line 292 checking to see if anyting lives in the teamMember at this point\n" + teamMember)
  fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Successfully created your team profile generated SAMPLEindex.html!"
        )
  );
}
