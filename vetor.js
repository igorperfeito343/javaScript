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

dinos.splice(1, 1);
console.table(dinos);

//continuação da aula

var Dinos = [
  "t rex",
  "anquilossauro",
  "espinossauro",
  "estegossauro",
  "brontossauro",
  "velociraptor",
  "barney",
];

console.table(Dinos);

var elementoProcurado = "brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " esta no indice " + posicao);
