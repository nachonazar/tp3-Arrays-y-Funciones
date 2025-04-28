const meses = [
  "Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre",
];
document.writeln("<h1><strong>Lista de Meses</strong></h1>")
document.writeln(`<ul>`)
for(let i=0; i < meses.length; i++){
    document.writeln(`<li>${meses[i]}</li>`)
}
document.writeln(`</ul>`)
