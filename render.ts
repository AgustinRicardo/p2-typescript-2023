import { StarWarsPeople } from "./starWarsPeople.ts";


const head = () =>
  `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star War People</title>
    <link rel="stylesheet" href="style.css">`;

const getImage = (gender: string) => {
  switch(gender) { 
    case `male`: { 
       return `<img src="images/icons8-persona-de-sexo-masculino-94.png" />`; 
    } 
    case `female`: { 
       return `<img src="images/icons8-persona-femenina-94.png" />`; 
    } 
    default: { 
       return `<img src="images/icons8-extraterrestre-94.png" />`; 
    } 
 } 
}

const renderStarWarsPeople = (people: Array<StarWarsPeople>) => {
  let html = "";

  for (const actor of people) {
    html += `<div class="people">
            ${getImage(actor.gender)}
            <div class="data">
              <div class="name">${actor.name}</div>
              <div class="gender">${actor.gender}</div>
              <button people-detail-url="${actor.url}">Details</button>
            </div>
          </div>`;
  }
  return html;
};

export const render = (users: Array<StarWarsPeople>) => {
  return `
      <html>
        ${head()}
        <body>
            <div class="people-content">
              ${renderStarWarsPeople(users.slice(0, 5))}
            </div>
            <div class="people-content">
              ${renderStarWarsPeople(users.slice(5, 10))}
            </div>
          <script src="functions.js"></script>         
        </body>        
      </html>
      `;
};
