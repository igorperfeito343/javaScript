function saudaçao(nome) {
  console.log(`ola ${nome},seja vem - vindo`);
}
saudaçao("igor");
saudaçao("naruto");
saudaçao("goku");

function somar(valor1, valor2) {
  return valor1 + valor2;
}
console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);


var v1 = 9
var v2 = 6

console.log(`v1 + v2 ${somar(v1,v2)}`)

function desconto(valorvenda,desc) {
    return (valorvenda * desc) / 100

}

var totalpedido = 300
var totaldesconto = desconto(totalpedido,5)

console.log(`total do pedido R$ ${totalpedido}`)
console.log(`total do desconto R$ ${totaldesconto}`)
console.log(`valor final da venda R$ ${totalpedido-totaldesconto}`)

function apresentapessoa (nome,idade,cidade) {
    console.log(`apresento a vocês: ${nome}, que tem ${idade} e mora em ${cidade}`)

}

apresentapessoa ("igor",35,"jau")


