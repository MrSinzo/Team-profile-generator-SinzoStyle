function generateTeam(teamArray) {
  const html = [];
 
      // create the manager html
      const generateManager = manager => {
        return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${managerName}</h5><h5 class="ml-1">${manager.getrole()}</h5></div>
            <p class="card-text">ID : ${managerID}</p>
            <p class="card-text">Email : <a href="mailto:${managerEmail}">${managerEmail}</a></p>
            <p class="card-text">Office Number : ${managerOffice}</p>
        </div>
    </div>
        `;
    };
    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body">
      <div class="bg-info p-2"><h5 class="card-title ml-1">${engineerName}</h5><h5 class="ml-1">${engineer.getRole()}</h5></div>
        <p class="card-text">ID : ${engineerID}</p>
        <p class="card-text">Email : <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
        <p class="card-text"> Github : https://www.github.com/${engineerGithub}</p>
    </div>
</div>
        `;
    };
    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
          <div class="bg-info p-2"><h5 class="card-title ml-1">${internName}</h5><h5 class="ml-1">${intern.getRole()}</h5></div>
            <p class="card-text">ID : ${internID}</p>
            <p class="card-text">Email : <a href="mailto:${internEmail}">${internEmail}</a></p>
            <p class="card-text">School : ${internSchool}</p>
        </div>
      </div>
        `;
    };}