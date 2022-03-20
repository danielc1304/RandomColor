const boton = document.getElementsByClassName("boton");
const colores = ["red", "blue", "green", "#F5F6F8"];

for (let index = 0; index < boton.length; index++) {
  const element = boton[index];
  element.addEventListener("click", cambiarFondo);
}

function cambiarFondo(button) {
  //const indice = Math.floor((Math.random() * colores.length));
  const contenedor = this.parentNode;
  let nuevoColor =
    "rgba(" +
    generateRandom() +
    "," +
    generateRandom() +
    "," +
    generateRandom() +
    "," +
    generateRandomAlpha() +
    ")";
  let nuevoColorHEX = RGBAToHexA(
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandomAlpha()
  );
  //console.log(contenedor);
  //contenedor.style.backgroundColor = colores[indice];
  contenedor.style.backgroundColor = nuevoColorHEX;

  const texto = this.parentNode.childNodes[1];
  //texto.innerHTML = colores[indice];
  texto.innerHTML = nuevoColorHEX;

  console.log(nuevoColorHEX);
  //console.log(texto)
  //console.log(this);
}

function generateRandom(min = 0, max = 255) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

function generateRandomAlpha(min = 0, max = 10) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand / 10;
}

function RGBAToHexA(r, g, b, a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  if (a.length == 1) a = "0" + a;

  return "#" + r + g + b + a;
}
