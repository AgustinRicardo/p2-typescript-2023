


window.addEventListener("DOMContentLoaded", async (event) => {
    const urlPeople= localStorage.getItem("urlPeople");
    let peopleJson  = { homeworld } = await getInformation(urlPeople);
    const worldJson = await getInformation(homeworld);
    const html = renderPeopleWorld(peopleJson, worldJson);
    document.querySelector("#content").innerHTML = html;
});

const getInformation = async (url) => {
    try {
      response = await fetch(url);
      return await response.json();
    } catch (e) {
      return null;
    }
}
  
const renderPeopleWorld = (peopleJson, worldJson) => {
    const { name, mass, hair_color, skin_color, eye_color, birth_year, gender } = peopleJson;
    return `<div class="data">    
    <h1>${name}</h1>
    <div class="pair"> <div class="info">Gender: </div><div>${gender}</div></div>
    <div class="pair"> <div class="info">Birth year: </div><div>${birth_year}</div></div>
    <div class="pair"> <div class="info">Hair color: </div><div>${hair_color}</div></div>
    <div class="pair"> <div class="info">Skin color: </div><div>${skin_color}</div></div>
    <div class="pair"> <div class="info">Eye color: </div><div>${eye_color}</div></div>
    <div class="pair"> <div class="info">Mass: </div><div>${mass} Kg</div></div>
    <div class="pair"> <div class="info">Home world: </div><div>${worldJson.name}</div></div>
    </div>
    <input type="button" value="Go back!" onclick="history.back()">`;
}

/*public name: string,
    public height: string,
    public mass: string,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public url: string */