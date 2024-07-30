document.addEventListener('DOMContentLoaded', () => {
    const conteudo = document.getElementById('conteudo');
    const opcoes = document.getElementById('opcoes');
  
    const historia = {
      1: {
        texto: `Capítulo 1: A Jornada Começa
        Alex estava em uma pequena vila à beira de uma grande floresta. Seu coração estava acelerado com a expectativa de uma nova aventura. Ele ouvira rumores sobre um antigo artefato escondido nas profundezas da floresta, e decidiu que era hora de descobrir se esses rumores eram verdadeiros. Com uma mochila cheia de provisões e um mapa antigo em mãos, Alex partiu para a floresta.`,
        opcoes: [
          { texto: "Ir para a floresta", proximoCapitulo: 2 },
          { texto: "Ficar na vila", proximoCapitulo: 3 }
        ]
      },
      2: {
        texto: `Capítulo 2: O Encontro com o Guardião
        Enquanto explorava a floresta, Alex se deparou com um imenso lago. No meio do lago, em uma pequena ilha, estava uma enorme pedra com símbolos antigos. Alex se aproximou para investigar, mas foi interrompido por uma figura misteriosa: o Guardião da Ilha. O Guardião revelou que o caminho adiante estava bloqueado por uma série de enigmas e desafios que Alex teria que superar para continuar sua busca.`,
        opcoes: [
          { texto: "Aceitar o desafio", proximoCapitulo: 4 },
          { texto: "Voltar para a vila", proximoCapitulo: 3 }
        ]
      },
      3: {
        texto: `Capítulo 3: De Volta à Vila
        Alex decidiu voltar para a vila. Ele sabia que precisaria de mais informações e talvez de ajuda para enfrentar os desafios que estavam por vir. Ele começou a conversar com os anciãos da vila e descobriu mais sobre o artefato.`,
        opcoes: [
          { texto: "Tentar novamente", proximoCapitulo: 1 }
        ]
      },
      4: {
        texto: `Capítulo 4: O Desafio dos Enigmas
        O Guardião apresentou a Alex uma série de enigmas complexos. Alex usou toda sua inteligência e criatividade para resolver cada um dos enigmas, ganhando a confiança do Guardião.`,
        opcoes: [
          { texto: "Continuar a jornada", proximoCapitulo: 5 }
        ]
      },
      5: {
        texto: `Capítulo 5: O Labirinto Escuro
        Após superar os desafios do Guardião, Alex seguiu adiante e encontrou um labirinto sombrio. As paredes eram cobertas de musgo e a escuridão parecia engolir qualquer luz. Alex usou uma tocha para iluminar seu caminho e, com grande esforço, conseguiu encontrar a saída do labirinto.`,
        opcoes: [
          { texto: "Abrir o baú", proximoCapitulo: 6 }
        ]
      },
      6: {
        texto: `Capítulo 6: O Enigma do Baú
        Dentro do baú, Alex encontrou uma chave dourada e uma pista para a próxima etapa de sua jornada. A pista o levou a uma caverna escondida nas montanhas. Ao entrar na caverna, ele descobriu uma série de armadilhas e obstáculos que precisavam ser evitados para alcançar o próximo objetivo.`,
        opcoes: [
          { texto: "Prosseguir com cuidado", proximoCapitulo: 7 }
        ]
      },
      7: {
        texto: `Capítulo 7: A Montanha do Dragão
        A pista final levou Alex a uma montanha coberta de neve. No topo da montanha, ele encontrou uma caverna onde, segundo os rumores, um dragão guardava um tesouro valioso. Alex, com coragem, entrou na caverna e encontrou o dragão.`,
        opcoes: [
          { texto: "Enfrentar o dragão", proximoCapitulo: 8 }
        ]
      },
      8: {
        texto: `Capítulo 8: Um Final Feliz
        Com a vila prosperando e a festa terminando, Alex sentiu uma profunda satisfação. Ele sabia que havia cumprido sua missão e que sua jornada havia chegado ao fim com um final feliz.`,
        opcoes: []
      }
    };
  
    let capituloAtual = 1;
  
    function atualizarConteudo() {
      conteudo.innerText = historia[capituloAtual].texto;
      opcoes.innerHTML = '';
      historia[capituloAtual].opcoes.forEach(opcao => {
        const button = document.createElement('button');
        button.innerText = opcao.texto;
        button.addEventListener('click', () => {
          capituloAtual = opcao.proximoCapitulo;
          atualizarConteudo();
        });
        opcoes.appendChild(button);
      });
    }
  
    atualizarConteudo();
  
    document.addEventListener('keydown', (event) => {
      const opcoesAtuais = historia[capituloAtual].opcoes;
      if (event.key === 'ArrowRight' && opcoesAtuais.length > 0) {
        capituloAtual = opcoesAtuais[0].proximoCapitulo;
        atualizarConteudo();
      } else if (event.key === 'ArrowLeft' && opcoesAtuais.length > 1) {
        capituloAtual = opcoesAtuais[1].proximoCapitulo;
        atualizarConteudo();
      }
    });
  });
  