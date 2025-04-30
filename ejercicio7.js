function tabla(num) {
  document.writeln("<table border='1'>");
  for (let i = 1; i <= 10; i++) {
    const resultado = num * i;
    document.writeln("<tr>");
    document.writeln("<td> " + num + " x " + i + " = " + resultado + " </td>");
    document.writeln("</tr>");
  }
  document.writeln("</table>");
}
const num = parseInt(prompt("Ingrese un numero"));
tabla(num);
