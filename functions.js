// Hay que poner un handler de click a TODOS los botones!
// Y para pillarlos todos es mejor usar 'querySelectorAll'
document.querySelectorAll('.user .data button').forEach((button) => {
  // Usamos el DOM para recuperar el nombre del personaje
  const name = button.parentElement.querySelector('.data .name');
  // Ponemos el handler para clicks, que muestra el nombre en la consola
  button.addEventListener('click', () => {
    console.log("Has clicado: ", name.textContent);
  });
});
