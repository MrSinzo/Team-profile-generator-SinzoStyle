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

/*******************************************************/

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

function generateManager(manager) {
  console.log(manager)
  return `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
  <div class="card-body">
    <div class="bg-info p-2"><h5 class="card-title ml-1">${manager.Name}</h5><h5 class="ml-1"></h5></div>
      <p class="card-text">ID : ${manager.ID}</p>
      <p class="card-text">Email : <a href="mailto:${manager.Email}">${manager.Email}</a></p>
      <p class="card-text">Office Number : ${manager.Office}</p>
  </div>
</div>` 

}