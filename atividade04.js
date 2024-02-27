var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.table(matrix);

console.log(matrix[0][0],matrix[1][1],matrix[2][2])
console.log(matrix[2][2],matrix[1][1],matrix[0][0])
console.log(matrix[0][2],matrix[1][1],matrix[2][0])
console.log(matrix[2][0],matrix[1][1],matrix[0][2])

var usuario = ["igor",16,"azul","morango","atlantida","hercules"]

console.log("ola ",usuario[0],"seja bem vindo")
console.log("voce mora no endereço",usuario[4],"e tem um pet chamado",usuario[5])
console.log("sua idade é ",usuario[1],"e gosta muito da fruta",usuario[3])
console.log("sua cor favorita é",usuario[2])
