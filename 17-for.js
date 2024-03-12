// for (let i = 0; i < 1000; i++) {
//     console.log("prestar atenção nas aulas")
    
// }

// for (let i = 0; i <= 1000; i+= 2) {
//     console.log(i)
    
// }

// for (let i = 1; i <= 1000; i+= 2) {
//     console.log(i)
    
// }

// for (let i = 0; i <= 1000; i+= 2) {
//     if (i % 2 != 0)
//     console.log(i)

    
// }

// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }

// for (let i = 2; i <= 20; i+= 2) {
//     console.log(i)
    
// }
//  for (let i = 1; i <= 20; i++) {
//      if (i % 2 != 0)
//      console.log(i)
// }

const numeros = [ 5,6,8,14,0,9,7,2]

var soma = 0
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]  
}
console.log("a soma dos elementos do vetor é :", soma)

let array = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < array.length; i++) {
    array[i] *= 3;
}

console.log(array); // Mostra o array com todos os elementos multiplicados por 3


let matriz = [
    [8, 4, 1],
    [3, 7, 8],
  ];
  
  console.table(matriz);
  
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      console.log("Matriz: " + matriz[linha][coluna] + " | Posição: [" + linha + "," + coluna + "]" );
    }
  }



