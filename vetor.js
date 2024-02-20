const numeros = [1, 2, 3, 4, 5];

console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

var dinos = ["t rex", "anquilossauro", "espinossauro"];
console.table(dinos);
console.log("o vetor tem", dinos.length, "elementos");

dinos.push("estegossauro");
console.table(dinos);
dinos.pop;
console.table(dinos);
