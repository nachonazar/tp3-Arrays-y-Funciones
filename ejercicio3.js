const apariciones = Array(13).fill(0);

for (let i = 1; i <= 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;

  apariciones[suma]++;
}
document.writeln("<table border='1'>");
document.writeln("<th class='celdas'>Suma🎲🎲</th>");
document.writeln("<th class='celdas'>Apariciones</th>");
for (let i = 2; i <= 12; i++) {
  document.writeln("<tr class='celdas'>");
  document.writeln("<td class='celdas'> " + i + " </td>");
  document.writeln("<td class='celdas'> " + apariciones[i] + " </td>");
  document.writeln("</tr>");
}
document.writeln("</table>");
