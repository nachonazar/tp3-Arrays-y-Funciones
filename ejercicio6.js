function perimetro(largo, ancho) {
  const resultado = 2 * (largo + ancho);
  document.writeln("El perimetro es: " + resultado);
}

const largo = Number(prompt("Ingrese el largo de un rectangulo")),
  ancho = Number(prompt("Ingrese el ancho de un rectangulo"));

if (isNaN(largo) || isNaN(ancho)) {
  document.writeln("El valor ingresado no es valido");
} else {
  perimetro(largo, ancho);
}
