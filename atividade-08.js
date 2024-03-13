// class Aluno {
//   constructor(nome, dataNascimento, matricula, curso) {
//     this.nome = nome;
//     this.dataNascimento = dataNascimento;
//     this.matricula = matricula;
//     this.curso = curso;
//   }

//   calcularIdade() {
//     return 2024 - this.dataNascimento;
//   }

//   apresentar() {
//     const idade = this.calcularIdade();
//     return `Olá, meu nome é ${this.nome}, tenho ${idade} anos, sou aluno do curso de ${this.curso} e minha matrícula é ${this.matricula}.`;
//   }
// }

// const aluno1 = new Aluno("igor", 2007 ,"4168", "Tecnico de Informatica");
// console.log(aluno1.apresentar());


class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}

const sorveteMorangoGrande = new Sorvete('Morango', 0, 'G');
const sorveteChocolatePequeno = new Sorvete('Chocolate', 0, 'P');
const sorveteMelanciaMedio = new Sorvete('Melancia', 0, 'M');

console.log(sorveteMorangoGrande);
console.log(sorveteChocolatePequeno);
console.log(sorveteMelanciaMedio);


// Alterando o preço do sorvete de morango grande
sorveteMorangoGrande.preco = 10.51;
console.log(sorveteMorangoGrande);

function saoIguaisSemCaseSensitive(string1, string2) {
  // Converte ambas as strings para minúsculas
  var str1Lower = string1.toLowerCase();
  var str2Lower = string2.toLowerCase();

  // Compara as strings
  return str1Lower === str2Lower;
}

// Exemplo de uso:
var string1 = "Olá Mundo";
var string2 = "olá mundo";
if (saoIguaisSemCaseSensitive(string1, string2)) {
  console.log("As strings são iguais, ignorando o caso.");
} else {
  console.log("As strings são diferentes, considerando o caso.");
}

function extrairNumeros(string) {
  // Usa expressão regular para encontrar todos os números na string
  var numerosEncontrados = string.match(/\d+/g);
  
  // Verifica se foram encontrados números na string
  if (numerosEncontrados) {
      // Converte os números encontrados de strings para números inteiros
      var numeros = numerosEncontrados.map(function(numero) {
          return parseInt(numero, 10);
      });
      return numeros;
  } else {
      // Se nenhum número foi encontrado, retorna uma lista vazia
      return [];
  }
}

// Exemplo de uso:
var string = "Eu tenho 25 anos e meu número de sorte é 7.";
var numeros = extrairNumeros(string);
console.log("Números encontrados na string:", numeros);
 
function inverterOrdemDasPalavras(frase) {
  // Divide a frase em palavras usando o espaço como delimitador
  var palavras = frase.split(" ");

  // Inverte a ordem das palavras
  var palavrasInvertidas = palavras.reverse();

  // Junta as palavras invertidas em uma nova frase
  var novaFrase = palavrasInvertidas.join(" ");

  return novaFrase;
}

// Exemplo de uso:
var frase = "O céu é azul";
var fraseInvertida = inverterOrdemDasPalavras(frase);
console.log("Frase original:", frase);
console.log("Frase com ordem das palavras invertida:", fraseInvertida);
