const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/Manager");

const Intern = require("./lib/Intern");

const Engineer = require("./lib/Engineer");

const teamMember = [];

function generateTeam(teamMember) {
  const html = [];

  // creates the manager html card
  const generateManager = (manager) => {
    return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${manager.getName()}</h5><h5 class="ml-1">${manager.getRole()}</h5></div>
            <p class="card-text">ID : ${manager.getId()}</p>
            <p class="card-text">Email : <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="card-text">Office Number : ${manager.getOfficeNumber()}</p>
        </div>
    </div>
        `;
  };
  html.push(
    teamMember
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  // creates the html card for engineers
  const generateEngineer = (engineer) => {
    return `
  <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body">
      <div class="bg-info p-2"><h5 class="card-title ml-1">${engineer.getName()}</h5><h5 class="ml-1">${engineer.getRole()}</h5></div>
        <p class="card-text">ID : ${engineer.getId()}</p>
        <p class="card-text">Email : <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p class="card-text"> Github : <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getName()}'s Github Link</a></p>
      </div>
    </div>`;
  };
  html.push(
    teamMember
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  // creates the html card for interns
  const generateIntern = (intern) => {
    return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${intern.getName()}</h5><h5 class="ml-1">${intern.getRole()}</h5></div>
            <p class="card-text">ID : ${intern.getId()}</p>
            <p class="card-text">Email : <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="card-text">School : ${intern.getSchool()}</p>
        </div>
      </div>
        `;
  };
  html.push(
    teamMember
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
          <div class="team-area col-12 d-flex justify-content-center flex-wrap">
              ${html.join(``)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
}

/**starting with team managers questions */
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Team Managers name?",
        default: "Joe", 
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Team Managers ID number?",
        default: 21, 
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Team Manager's Email address?",
        default: "Manager@email.com",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the Team Manager's office number?",
        default: 12, 
      },
      {
        type: "list",
        name: "employees",
        message: "What kind of Employee would you like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );
      teamMember.push(manager);
      if (response.employees == "Intern") {
        internCall();
      } else if (response.employees == "Engineer") {
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
        default: "Sue",
      },
      {
        type: "input",
        name: "internID",
        message: "What is the Intern's ID number?",
        default: 567,
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's Email address?",
        default: "Intern@email.com",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the Intern attend?",
        default: "a good one",
      },
      {
        type: "list",
        name: "employees",
        message: "Any other Employee's you would like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      teamMember.push(intern);
      if (response.employees == "Intern") {
        internCall();
      } else if (response.employees == "Engineer") {
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
        default: "Bill",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the Engineer's ID number?",
        default: "234",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?",
        default: "Engineer@email.com",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's Github Username?",
        default: "BillyJoeBob",
      },
      {
        type: "list",
        name: "employees",
        message: "Any other Employee's you would like to add?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGithub
      );
      teamMember.push(engineer);
      if (response.employees == "Intern") {
        internCall();
      } else if (response.employees == "Engineer") {
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
  fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Successfully created your team profile generated SAMPLEindex.html!"
        )
  );
}
