import { StarWarsPeople } from "./starWarsPeople.ts";

const head = () =>
  `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star War People</title>
    <link rel="stylesheet" href="style.css">
    <script href="functions.js"></script>`;

const renderStarWarsPeople = (people: Array<StarWarsPeople>) => {
  let html = "";

  for (const actor of people) {
    html += `<div class="user">
            <img src="images/icons8-user-100.png" />

            <div class="data">
              <div class="name">${actor.name}</div>
              <div class="email">${actor.gender}</div>
              <button onclick="fn()">Click</button>
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
          ${renderStarWarsPeople(users)}
        </body>
      </html>
      `;
};
