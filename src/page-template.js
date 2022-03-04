const generateHTML = (objEmployees) => {
    
    const manager = objEmployees.filter(type => {type.getRole() === 'Manager'})

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
        <title>Team Profile</title>
    </head>
    <body>
        <main>
            <div class="banner">My Team</div>
            
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
                <div class="col">
                <div class="card">
                    <div class="card-body">
                    <h3 class="card-title">${manager.name}</h3>
                    <h4>Manager</h4>
                    <ul class="list-group">
                        <li class="list-group-item">Employee ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                    </div>
                </div>
                </div>


                
            </div>
        </main>
        
    </body>
    </html>
`


//     <div class="col">
//         <div class="card">
//             <div class="card-body">
//                 <h3 class="card-title">${manager.name}</h3>
//                 <h4>Manager</h4>
//                 <ul class="list-group">
//                     <li class="list-group-item">Employee ID: 1234</li>
//                     <li class="list-group-item">Email: <a href="mailto:jon.mooney@yahoo.com">jon.mooney@yahoo.com</a></li>
//                     <li class="list-group-item">Office Number: 916-583-1455</li>
//                 </ul>
//             </div>
//         </div>
//     </div>`;

// }

module.exports = generateHTML;


// // create the about section
// const generateAbout = aboutText => {
//     if (!aboutText) {
//       return '';
//     }
  
//     return `
//       <section class="my-3" id="about">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//         <p>${aboutText}</p>
//       </section>
//     `;
//   };
  
//   const generateProjects = projectsArr => {
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${projectsArr
//           .filter(({ feature }) => feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
  
//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
//   };
  
//   module.exports = templateData => {
//     // destructure page data by section
//     const { projects, about, ...header } = templateData;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
  
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//     </head>
  
//     <body>
//       <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//           <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//           <nav class="flex-row">
//             <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
//               header.github
//             }">GitHub</a>
//           </nav>
//         </div>
//       </header>
//       <main class="container my-5">
//         ${generateAbout(about)}
//         ${generateProjects(projects)}
//       </main>
//       <footer class="container text-center py-3">
//         <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//       </footer>
//     </body>
//     </html>
//     `;
//   };