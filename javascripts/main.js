var jogador_um = {
  nome: "teste1",
  vida_total: 100,
  arma: {
    dano: 4,
    hit_chance: 10,
    critical_chance: 10
  },
  colete: {
    protecao: 4,
    peso: 10,
    hit_chance: 10
  }
};
var jogador_dois = {
  nome: "teste2",
  vida_total: 100,
  arma: {
    dano: 4,
    hit_chance: 10,
    critical_chance: 10
  },
  colete: {
    protecao: 4,
    peso: 10,
    hit_chance: 10
  }
};

function show(jogador_um, jogador_dois) {
  console.log(jogador_um);
  console.log(jogador_dois);
}

function changeName(jogador) {
  if (jogador = jogador_um) {
    var jogador_um_nome = document.getElementById('jogador_um_nome');
    jogador.nome = jogador_um_nome.value;

  } if (jogador = jogador_dois) {
    var jogador_dois_nome = document.getElementById('jogador_dois_nome');
    jogador.nome = jogador_dois_nome.value;
  }
}
