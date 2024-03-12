const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} ganhou!`);
      return jogadorAtual;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[0][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[0][i]} ganhou!`);
      return jogadorAtual;
    }
  }

  if (
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[0][0] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} ganhou!`);
    return jogadorAtual;
  }

  if (
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[0][2] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} ganhou!`);
    return jogadorAtual;
  }

  if (!tabuleiro.some((linha) => linha.includes(" "))) {
    console.log(`O jogo empatou!`);
    return "Empate";
  }

  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual);
  console.table(tabuleiro);
  vencedor = verificaVencedor();
  if (!vencedor) {
    jogar(jogadorAtual);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
  }
}
