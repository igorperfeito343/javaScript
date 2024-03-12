// class pessoa{
//     constructor(pNome, pIdade){
//         this.nome = pNome
//         this.idade = pIdade
//     }
//     apresentarSe() {
//         console.log(`ola meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
//     }

//     envelhecer() {
//         this.idade++
//     }  
// }

// var pessoa1 = new pessoa ("igor",16)
// pessoa1.apresentarSe()

// var p2 = new pessoa("taldo pedrin", 18)

// pessoa1.apresentarSe()
// p2.apresentarSe()

// pessoa1.envelhecer()
// pessoa1.apresentarSe()

// p2.envelhecer()
// p2.apresentarSe()

// console.log("------------------------------------------------------------------------------")

// // ABRSTRÇÃO

// class Pet {
//     constructor(nome, idade, tipo){
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//     }
// alimentar(){
//     console.log(`${this.nome} foi alimentado!`)
// }
// }
// const meuPet = new Pet ("Rex", 2, "cachorro")
// console.log(`meu pet é um ${meuPet.tipo},chmado ${meuPet.nome} e tem ${meuPet.idade} anos!`)

// meuPet.alimentar()

// console.log("-------------------------------------------------------------------------------")
// //HERENÇA

// class Animal {
//     constructor(nome, idade, tipoAlimentacao) {
//         this.nome = nome
//         this.idade = idade
//         this.tipoAlimentacao = tipoAlimentacao
//     }
    
//     alimentar() {
//         console.log(`o animal ${this.nome} foi alimentado!`)
//     }
//     emitirsom() {
//         console.log(`barulho padrão animal`)
//     }
// }

// class Catioro extends Animal {
//     alimentar() {
//         console.log(`o cachorro ${this.nome} foi alimentado`)
//     }

//     emitirsom() {
//         console.log("Au au!")
//     }
// }
// const pet = new Animal("carlos", 10 ,"comida espacial")
// const meuCachorro = new Catioro("Rex", 3, "Ração")

// pet.alimentar()
// pet.emitirsom()
// console.log("")
// meuCachorro.alimentar
// meuCachorro.emitirsom

// console.log("-------------------------------------------------------------------------------------")
// //encapsulamento

// class Petizinho {
//     constructor(nome,idade,tipo){
//         this.nome = nome
//         this.idade = idade 
//         this.tipo = tipo
//     }

//     getNome() {
//         return this.nome
//     }

//     setNome(novoNome){
//         this.nome = novoNome
//     }
// }
 
// const novoPetzinho = new Petizinho("bob",3, "cachorro")

// console.log(novoPetzinho.getNome())
// novoPetzinho.setNome("Rex")
// console.log(novoPetzinho.getNome()
// )

console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}



    

