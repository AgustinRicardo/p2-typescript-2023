import { getStarWarsPeople } from "./starWarsPeople.ts";

const starWarsPeople = await getStarWarsPeople(1);
console.log(starWarsPeople);
console.log(starWarsPeople.length);

