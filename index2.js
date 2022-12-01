const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/Employee");
console.log("hello world");
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
          <div class="bg-info p-2"><h5 class="card-title ml-1">${managerName}</h5><h5 class="ml-1">${getRole()}</h5></div>
            <p class="card-text">ID : ${managerID}</p>
            <p class="card-text">Email : <a href="mailto:${managerEmail}">${managerEmail}</a></p>
            <p class="card-text">Office Number : ${managerOffice}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${engineerName}</h5><h5 class="ml-1">${getRole()}</h5></div>
            <p class="card-text">ID : ${engineerID}</p>
            <p class="card-text">Email : <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
            <p class="card-text"> Github : https://www.github.com/${engineerGithub}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${engineerName}</h5><h5 class="ml-1">${getRole()}</h5></div>
            <p class="card-text">ID : ${engineerID}</p>
            <p class="card-text">Email : <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
            <p class="card-text"> Github : https://www.github.com/${engineerGithub}</p>
        </div>
      </div>
    </section>

    <section name="team profile area" class="d-flex justify-content-around" >
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${internName}</h5><h5 class="ml-1">${getRole()}</h5></div>
            <p class="card-text">ID : ${internID}</p>
            <p class="card-text">Email : <a href="mailto:${internEmail}">${internEmail}</a></p>
            <p class="card-text">School : ${internSchool}</p>
        </div>
      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${internName}</h5><h5 class="ml-1">${getRole()}</h5></div>
            <p class="card-text">ID : ${internID}</p>
            <p class="card-text">Email :<a href="mailto:${internEmail}">${internEmail}</a></p>
            <p class="card-text">School : ${internSchool}</p>
        </div>
      </div> 
    </section>
    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
/**will need "mail to" links for emails */
/**
 * AskBCS says :  Currently the syntax inquirer.prompt is what is prompting “Whats the Team Managers name?” that you’re seeing. 
 * If you make a function that holds all the prompts then call the function you will be able to get all the prompts
Then use a .then to handle the user response and next action

My Response : Alright I think i understand. I basically need to put each set of prompts into a promise? and i can use .then to target the next set of prompts, dependant on the answer?
so all of managers questions into one, engineers into another, etc

AskBCS says :
Yes exactly! You can also add console.log to ensure you’re getting the data you expect
Once you give that a shot we can take another look if needed! Just want you to have the function since we typically don’t provide code!
*/

/**So these prompts need to be in a promise and .then set up... great */

const manager = new Promise((resolve, reject) => {
  if (0 === 0) {
    resolve(
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
    ])
  );
  } else {
    reject(new Error("Something went wrong"));
    }});
console.log(manager)
/**engineer's questions */
const engineer = new Promise((resolve, reject) => {
  if (0 === 0) {
    resolve(
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
      ])
    );
  } else {
    reject(new Error("Something went wrong"));
    }})
console.log(engineer);
/**Interns Questions */
const intern = new Promise((resolve, reject) => {
  if (0 === 0) {
    resolve(
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
      ])
    );
  } else {
    reject(new Error("Something went wrong"));
    }});
  

console.log(intern);

Promise.all([manager, engineer, intern])
  .then((values) => {
    console.log('\nThe returned array from our Promise.all() call:');
    console.log(values);
  })
  .catch((err) => new Error(err));
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error("Promise rejected: " + err.issue);
// });


// {
//   type: "list",
//   name: "employees",
//   message: "What kind of Employee would you like to add?",
//   choices: ["Engineer", "Intern", "No more members to add"],
// }



//     .then((answers) => {
//       const htmlPageContent = generateHTML(answers);

//       fs.writeFile("SAMPLEindex.html", htmlPageContent, (err) =>
//         err
//           ? console.log(err)
//           : console.log(
//               "Successfully created your team profile generated index.html!"
//             )
//       );
//     });
