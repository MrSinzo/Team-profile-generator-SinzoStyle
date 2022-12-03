const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/Manager");

const Intern = require("./lib/Intern");

const Engineer = require("./lib/Engineer");

const teamMember = [];
init();
const generateHTML = ({
  managerName,
  managerID,
  managerEmail,
  managerOffice,
  engineerName,
  engineerID,
  engineerEmail,
  engineerGithub,
  internName,
  internID,
  internEmail,
  internSchool,
}) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <title>HTML team gen sandbox</title>
  </head>
  <body>
    <div>
    <header class="row bg-danger p-5 mb-4"><h1 class="col d-flex justify-content-center">My Team</h1></header>
    </div>
    <section name="team profile area" class="d-flex justify-content-around" >
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${managerName}</h5><h5 class="ml-1"></h5></div>
            <p class="card-text">ID : ${managerID}</p>
            <p class="card-text">Email : <a href="mailto:${managerEmail}">${managerEmail}</a></p>
            <p class="card-text">Office Number : ${managerOffice}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${engineerName}</h5><h5 class="ml-1">${engineer.getRole()}</h5></div>
            <p class="card-text">ID : ${engineerID}</p>
            <p class="card-text">Email : <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
            <p class="card-text"> Github : https://www.github.com/${engineerGithub}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${engineerName}</h5><h5 class="ml-1"></h5></div>
            <p class="card-text">ID : ${engineerID}</p>
            <p class="card-text">Email : <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
            <p class="card-text"> Github : https://www.github.com/${engineerGithub}</p>
        </div>
      </div>
    </section>

    <section name="team profile area" class="d-flex justify-content-around" >
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${internName}</h5><h5 class="ml-1"></h5></div>
            <p class="card-text">ID : ${internID}</p>
            <p class="card-text">Email : <a href="mailto:${internEmail}">${internEmail}</a></p>
            <p class="card-text">School : ${internSchool}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${internName}</h5><h5 class="ml-1"></h5></div>
            <p class="card-text">ID : ${internID}</p>
            <p class="card-text">Email :<a href="mailto:${internEmail}">${internEmail}</a></p>
            <p class="card-text">School : ${internSchool}</p>
        </div>
      </div> 
    </section>
    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
/**${getRole()}*/
function init() {
  inquirer.prompt([
    /**starting with team managers questions */
    {
      type: "input",
      name: "managerName",
      message: "Whats the Team Managers name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "Whats the Team Managers ID number?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the Team Manager's Email address?",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "What is the Team Manager's office number?",
    },
    {
      type: "list",
      name: "employees",
      message: "What kind of Employee would you like to add?",
      choices: ["Engineer", "Intern", "No more members to add"],
    },
  ]);
  // .then((response) =>
  if (response.employees === "Intern") {
    internCall();
  }
  if (response.employees === "Engineer") {
    engineerCall();
  } else {
    then((response) => {
      console.log(response);
      const htmlPageContent = generateHTML(response);
      fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
        err
          ? console.log(err)
          : console.log(
              "Successfully created your team profile generated SAMPLEindex.html!"
            )
      );
    });
  }
  const manager = new Manager(
    response.mananagerName,
    response.managerID,
    response.managerEmail,
    response.managerOffice
  );
  teamMember.push(manager);
}

/**engineer's questions */
function engineerCall() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the engineer's ID number?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's Email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's Github Username?",
    },
    {
      type: "list",
      name: "employees",
      message: "What kind of Employee would you like to add?",
      choices: ["Engineer", "Intern", "No more members to add"],
    },
  ]);
  if (response.employees === "Intern") {
    internCall();
  }
  if (response.employees === "Engineer") {
    engineerCall();
  } else {
    then((response) => {
      console.log(response);
      const htmlPageContent = generateHTML(response);
      fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
        err
          ? console.log(err)
          : console.log(
              "Successfully created your team profile generated SAMPLEindex.html!"
            )
      );
    });
  }
  const engineer = new Engineer(
    response.engineerName,
    response.engineerID,
    response.engineerEmail,
    response.engineerOffice
  );
  teamMember.push(engineer);
}

// /**Interns Questions */
function internCall() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internID",
      message: "What is the Intern's ID number?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the Intern's Email address?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school does the Intern attend?",
    },
    {
      type: "list",
      name: "employees",
      message: "What kind of Employee would you like to add?",
      choices: ["Engineer", "Intern", "No more members to add"],
    },
  ]);
  if (response.employees === "Intern") {
    internCall();
  }
  if (response.employees === "Engineer") {
    engineerCall();
  } else {
    then((response) => {
      console.log(response);
      const htmlPageContent = generateHTML(response);
      fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
        err
          ? console.log(err)
          : console.log(
              "Successfully created your team profile generated SAMPLEindex.html!"
            )
      );
    });
    const intern = new Intern(
      response.internName,
      response.internID,
      response.internEmail,
      response.internOffice
    );
    teamMember.push(intern);
  }
}



// Promise.all([manager, engineer, intern])
// .then((values) => {
//   const htmlPageContent = generateHTML(values);

//   fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
//     err
//       ? console.log(err)
//       : console.log(
//           "Successfully created your team profile generated SAMPLEindex.html!"
//         )
//   );
// });

// .catch(function (err) {
//   console.error("Promise rejected: " + err.issue);
