const logo = document.querySelector(".Logo");
logo.src = "../IMG/cc.jpg";

const head =  document.querySelector("head title");
head.textContent = "Movies";

const header = document.querySelector("header");
header.children[1].innerHTML = `
<a href="#">Cartelera</a>
<a href="#">Pronto</a>
<a href="#">Cineco Alternativo</a>
<a href="#">Comidas</a>
`
const ciudad = document.querySelector(".ciudad");
ciudad.textContent = "Bucaramanga";

header.children[2].children[0].placeholder = "Buscar pelicula";

const main = document.querySelector("main");

const titulo = document.querySelector("main h2");
titulo.textContent = "Cine Colombia - Peliculas";

main.children[1].children[0].children[0].src = "../IMG/gato.jpg";
main.children[1].children[1].children[0].src = "../IMG/Ballena.jpg";
main.children[1].children[2].children[0].src = "../IMG/conejo.webp";
main.children[1].children[3].children[0].src = "../IMG/evil.jpg";

main.children[1].children[0].children[1].textContent = "Gato con Botas";
main.children[1].children[1].children[1].textContent = "La Ballena";
main.children[1].children[2].children[1].textContent = "Evil Dead Raise";
main.children[1].children[3].children[1].textContent = "Academia de Conejos";

