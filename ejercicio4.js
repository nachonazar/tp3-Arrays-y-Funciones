function parOimpar(num) {
  if (num % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

const num = parseInt(prompt("Ingrese un numero entero"));

parOimpar(num);

document.writeln(parOimpar(num));