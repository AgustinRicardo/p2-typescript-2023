
document.querySelectorAll('.people .data button').forEach((button) => {
  const name = button.parentElement.querySelector('.data .name');
  button.addEventListener('click', async (e) => {
    let { target } = e;
    const urlPeople = target.getAttribute("people-detail-url");
    localStorage.setItem("urlPeople", urlPeople);
    location.href = "./people-details.html";
  });
});


