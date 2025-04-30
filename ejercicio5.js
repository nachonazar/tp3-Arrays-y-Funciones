function info(texto) {
  if (!isNaN(texto)) {
    return "La cadena de texto no es valida";
  } else if (texto === texto.toUpperCase()) {
    return "La cadena de texto esta formada solo por mayusculas";
  } else if (texto === texto.toLowerCase()) {
    return "La cadena de texto esta formada solo por minusculas";
  } else {
    return "La cadena de texto esta formada por mayusculas y minusculas";
  }
}

const texto = prompt("Ingrese una cadena de texto");
info(texto);
document.writeln(info(texto));
