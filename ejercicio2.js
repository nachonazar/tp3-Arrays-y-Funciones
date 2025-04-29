let arreglo = "";
do {
  const nombresCiudades = prompt("Ingrese nombres de ciudades");
  if (nombresCiudades !== null && nombresCiudades.trim() !== "") {
    arreglo = nombresCiudades.split("’").map(ciudad => ciudad.trim());
    document.writeln("El arreglo de ciudades tiene " + arreglo.length + " elementos");
    document.writeln(`<ul>`)
    document.writeln("<li>Elemento 1er posición: "+arreglo[0]+" </li>")
    document.writeln("<li>Elemento 3er posición: "+arreglo[2]+" </li>")
    document.writeln("<li>Elemento ultima posición: "+arreglo[arreglo.length-1]+" </li>")
    document.writeln("<br>")
    document.writeln("<li>Elemento ultima posicion: Paris</li>")
    document.writeln("<h1><strong>Arreglo de ciudades</strong></h1>")
document.writeln(`<ul>`)
for(let i=0; i < arreglo.length; i++){
    document.writeln(`<li>${arreglo[i]}</li>`)
}
document.writeln("<li>Elemento: Paris</li>")
document.writeln(`</ul>`)
  }
} while (confirm("¿Deseas realizar otra operación?"));
