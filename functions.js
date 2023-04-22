
document.querySelectorAll('.user .data button').forEach((button) => {
  const name = button.parentElement.querySelector('.data .name');
  button.addEventListener('click', async (e) => {
    let { target } = e;
    url = target.getAttribute("url");
    let worldData = await loadPeopleWorld(url);
    let html = renderPeopleWorld(worldData);
    localStorage.setItem("html", html);
    window.open('http://127.0.0.1:5500/world.html', '_blank');
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
  <button>Back</button>
</div>`;
}