const team =(input) => {

    //create the manager card to display in the HTML
    const managerCard = manager => {
        return `
        <div class="col-4">
            <div class="card-body p-3 bg-primary text-white">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-text">${manager.getRole()}</h6>
            </div>
            <div class="card p-3 mb-2 bg-light">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getManagerOffice()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    };

    // create the intern card to display in HTML
    const internCard = intern => {
        return `
        <div class="col-4">
            <div class="card-body p-3 bg-primary text-white">
                <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-text">${intern.getRole()}</h6>
            </div>
            <div class="card p-3 mb-2 bg-light">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    };

    // creat the Engineer card to display in HTML
    const engineerCard = engineer => {
        return `
        <div class="col-4">
            <div class="card-body p-3 bg-primary text-white">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h6 class="card-text">${engineer.getRole()}</h6>
            </div>
            <div class="card p-3 mb-2 bg-light">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
    }

    const newTeam = [];

    newTeam.push(input
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCard(manager))
    );

    newTeam.push(input
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer)).join("")
    );

    newTeam.push(input
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern)).join("")
    );

    return newTeam.join("");

}

module.exports = (input) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profiles</title>
    </head>
    <body>
        <header class="p-3 mb-2 bg-danger text-white text-center">My Team</header>

        <section class="container">
            <div class="row justify-content-around">
                ${team(input)}
            </div>
        </section>
        
    </body>
    </html>
    `
}