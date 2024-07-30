const { Heroi, Vilao } = require('./personagens');

function iniciarHistoria() {
  const alex = new Heroi('Alex', 100, 20);
  const draco = new Vilao('Draco', 150, 30);

  console.log(alex.saudar());
  console.log(draco.ameaçar());

  // Função para decidir ações com base na escolha do usuário
  function escolherCaminho(escolha) {
    if (escolha === 'direita') {
      return 'Alex encontra um aliado.';
    } else if (escolha === 'esquerda') {
      return 'Alex enfrenta um inimigo.';
    } else {
      return 'Escolha inválida.';
    }
  }

  console.log(escolherCaminho('direita'));
}

// Exportar a função de inicialização da história
module.exports = { iniciarHistoria };