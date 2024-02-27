var frutas = ["banana", "maça", "pera", "uva", "morango"];
frutas.push("tangerina");
frutas.unshift("goiaba");
console.table(frutas);
console.log(frutas[5]);
//frutas.splice(4, 1);
console.table(frutas);

var proc = frutas.indexOf("uva");
console.log(frutas[proc]);
console.log("vetor copia 2");
var copia2 = frutas.slice(1, 3);
console.table(copia2);

var numeros = [1, 2, 3, 4, 5];

console.log(numeros);
console.table(numeros[2]);

var copia3 = numeros.slice();
console.table(copia3);

copia3[0] = numeros[0] * 2;

copia3[1] = numeros[1] * 2;

copia3[2] = numeros[2] * 2;

copia3[3] = numeros[3] * 2;

copia3[4] = numeros[4] * 2;

console.table(copia3);
