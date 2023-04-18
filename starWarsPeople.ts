
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
    public homeworld: string
  ) {}
}

export class PeopleWorld {
  constructor(
    public name: string
  ) {}
}

export const getStarWarsPeople = async (page: number) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const { results } = (await response.json()) as { results: any[] };    
    const starWarsPeople: Array<StarWarsPeople> = [];
    for (const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } of results) {
      starWarsPeople.push(new StarWarsPeople(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld));
    }
    return starWarsPeople;
  };

export const getPeopleWorld = async (link: string) => {
    const response = await fetch(link);
    const { results: { name } }: any = (await response.json()) as { results: any[] };
    return new PeopleWorld(name);
  };