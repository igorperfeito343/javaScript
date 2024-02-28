
var votar = 17;

if (votar >= 16) console.log(`a pessoa pode votar`);

if (votar < 16) console.log(`a pessoa não pode votar`);

console.log("------------------------------------------------------------------")
function verificarVoto(idade) {
    switch (true) {
        case idade < 16:
            return "Você é muito jovem para votar.";
        case idade >= 16 && idade < 18:
            return "Você pode votar, mas é opcional.";
        case idade >= 18 && idade < 70:
            return "Você tem idade suficiente para votar.";
        case idade >= 70:
            return "Você pode votar, mas é opcional.";
        default:
            return "Idade inválida.";
    }
}

// Exemplo de uso:
console.log(verificarVoto(15)); // Saída: "Você é muito jovem para votar."
console.log(verificarVoto(16)); // Saída: "Você pode votar, mas é opcional."
console.log(verificarVoto(25)); // Saída: "Você tem idade suficiente para votar."
console.log(verificarVoto(80)); // Saída: "Você pode votar, mas é opcional."


