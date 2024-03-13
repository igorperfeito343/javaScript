// var data1 = new Date();
// console.log(data1);

// var data2 = new Date("2005=05-12");
// console.log(data2);

// var data3 = new Date("2008=03-16");
// console.log(`data${data3}`);
// console.log(`ano: ${data3.getFullYear()}`);
// console.log(`mes: ${data3.getMonth() + 1}`);
// console.log(`dia: ${data3.getDate()}`);

// const mes = [
//   "janeiro",
//   "fevereiro",
//   " maio",
//   " abril",
//   "Março",
//   "junho",
//   "julho",
//   "agosto",
//   "setembro",
//   " outubro",
//   "novembro",
//   "dezembro",
// ];
// console.log(`retornando o mês por escrito!`);
// console.log(`mes: ${mes[data3.getMonth()]}`);

// const dias = [
//   "domingo",
//   "segunda",
//   "terça",
//   "quarta",
//   "quinta",
//   "sexta",
//   "sabado",
//   "domingo",
// ];
// console.log(`dias da semana: ${dias[data3.getDate()]}`);


function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

// Exemplo de uso:
var dataNascimento = '2007-04-24'; // Formato: 'YYYY-MM-DD'
var idade = calcularIdade(dataNascimento);
console.log("Sua idade é: " + idade + " anos.");
