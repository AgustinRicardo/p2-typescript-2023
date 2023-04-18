import { getStarWarsPeople } from "./starWarsPeople.js";
import { writeFile } from "fs/promises";
import { render } from "./render.js";

const starWarsPeople = await getStarWarsPeople(1);
const html = render(starWarsPeople);
await writeFile('index.html', html);