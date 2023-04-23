document.addEventListener("DOMContentLoaded", async (e) => {
  addDetailClick();
});

const addDetailClick = () => {
  document.querySelectorAll('.people .data button').forEach((button) => {
    button.addEventListener('click', async (e) => {
      let { target } = e;
      const urlPeople = target.getAttribute("people-detail-url");
      localStorage.setItem("urlPeople", urlPeople);
      location.href = "./people-details.html";
    });
  });
};




document.querySelectorAll('button.paginate').forEach((button) => {
  button.addEventListener('click', async (e) => {
    let { target } = e;
    const url = target.getAttribute("url");
    const { previous, next, results } = await getStarWarsPeople(url);
    setPaginateBotonStatus(previous, next);
    setStarWarPeople(results);
  });
});

const setStarWarPeople = (results) => {

  document.querySelectorAll('div.people-content').forEach((element) => {
    element.textContent = null;
  });

  for(item of results.slice(0, 5)) {
    addPeople(item, "first");
  };

  for(item of results.slice(5, 10)) {
    addPeople(item, "second");
  };
  addDetailClick();
};

const addPeople = (people, classElemtn) => {
  const { gender, name, url } = people;
  let peopleDiv = document.createElement("div");
  peopleDiv.classList.add("people");
  let image = document.createElement("img");
  image.src = getImageSrc(gender);
  peopleDiv.appendChild(image)
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.innerHTML = name;
  dataDiv.appendChild(nameDiv)
  let genderDiv = document.createElement("div");
  genderDiv.classList.add("gender");
  genderDiv.innerHTML = gender;
  dataDiv.appendChild(genderDiv);
  let button = document.createElement('button');
  button.innerText = 'Details';
  button.setAttribute("people-detail-url", url);
  dataDiv.appendChild(button);
  peopleDiv.appendChild(dataDiv);
  const selector = `div.${classElemtn}`;
  let mainDiv =  document.querySelector(selector);
  mainDiv.appendChild(peopleDiv);
};

const getImageSrc = (gender) => {
  switch(gender) { 
    case `male`: { 
       return `images/icons8-persona-de-sexo-masculino-94.png`; 
    } 
    case `female`: { 
       return `images/icons8-persona-femenina-94.png`; 
    } 
    default: { 
       return `images/icons8-extraterrestre-94.png`; 
    } 
 } 
}

const setPaginateBotonStatus = (previous, next) => {
  if(previous && previous !== "") {
    document.querySelectorAll('button.previous').forEach((button) => {
      button.setAttribute("url", previous);
      button.removeAttribute('disabled');
    });
  }
  else {
    document.querySelectorAll('button.previous').forEach((button) => {
      button.setAttribute("url", "");
      button.setAttribute('disabled', "");
    });
  }

  if(next && next !== "") {
    document.querySelectorAll('button.next').forEach((button) => {
      button.setAttribute("url", next);
      button.removeAttribute('disabled');
    });
  }
  else {
    document.querySelectorAll('button.next').forEach((button) => {
      button.setAttribute("url", "");
      button.setAttribute('disabled', "");
    });
  }
};

const getStarWarsPeople = async (url) => {
  try {
    response = await fetch(url);
    return await response.json();
  } catch (e) {
    return null;
  }
};
