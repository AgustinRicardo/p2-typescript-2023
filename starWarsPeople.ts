
export class StarWarsPeople {
  constructor(
    public name: string,
    public height: string,
    public mass: string,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public url: string
  ) {}
}

export const getStarWarsPeople = async (page: number) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const { results } = (await response.json()) as { results: any[] };    
    const starWarsPeople: Array<StarWarsPeople> = [];
    for (const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, url } of results) {
      starWarsPeople.push(new StarWarsPeople(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, url));
    }
    return starWarsPeople;
};