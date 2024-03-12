class Aluno {
  constructor(nome, dataNascimento, matricula, curso) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.matricula = matricula;
    this.curso = curso;
  }

  calcularIdade() {
    return 2024 - this.dataNascimento;
  }

  apresentar() {
    const idade = this.calcularIdade();
    return `Olá, meu nome é ${this.nome}, tenho ${idade} anos, sou aluno do curso de ${this.curso} e minha matrícula é ${this.matricula}.`;
  }
}

const aluno1 = new Aluno("igor", 2007 ,"4168", "Tecnico de Informatica");
console.log(aluno1.apresentar());
