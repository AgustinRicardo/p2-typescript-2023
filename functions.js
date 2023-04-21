import fs from 'fs';

document.querySelectorAll('.user .data button').forEach((button) => {
  const name = button.parentElement.querySelector('.data .name');
  button.addEventListener('click', async () => {
    let test = await loadPeopleWorld("url");
    let html = renderPeopleWorld(test);
    writeFile('world.html', html);
    window.open('http://localhost:5500/world.html', '_blank');
    console.log(test);
  });
});


const loadPeopleWorld = async (url) => {
  try {
    response = await fetch(`https://swapi.dev/api/planets/1/`);
    return await response.json();
  } catch (e) {
    return null;
  }
}

const renderPeopleWorld = (wolrd) => {
  return `<div class="data">
  <div class="name">Dato de prueba</div>
  <button>Click</button>
</div>`;
}