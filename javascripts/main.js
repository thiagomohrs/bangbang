var jogador_um = {
  nome: "teste1",
  vida_total: 100,
  arma: {
    dano: 0,
    hit_chance: 0,
    critical_chance: 0
  },
  colete: {
    protecao: 0,
    peso: 0,
    hit_chance: 0
  }
};
var jogador_dois = {
  nome: "teste2",
  vida_total: 100,
  arma: {
    dano: 0,
    hit_chance: 0,
    critical_chance: 0
  },
  colete: {
    protecao: 0,
    peso: 0,
    hit_chance: 0
  }
};
var armas = {
  arma1: {
    dano: 1,
    hit_chance: 1,
    critical_chance: 1
  },
  arma2: {
    dano: 2,
    hit_chance: 2,
    critical_chance: 2
  },
  arma3: {
    dano: 3,
    hit_chance: 3,
    critical_chance: 3
  },
  arma4: {
    dano: 4,
    hit_chance: 4,
    critical_chance: 4
  }
};

var coletes = {
  colete1: {
    protecao: 1,
    peso: 1,
    hit_chance: 1
  },
  colete2: {
    protecao: 2,
    peso: 2,
    hit_chance: 2
  },
  colete3: {
    protecao: 3,
    peso: 3,
    hit_chance: 3
  },
  colete4: {
    protecao: 4,
    peso: 4,
    hit_chance: 4
  }
};

function show(jogador_um, jogador_dois) {
  console.log(jogador_um);
  console.log(jogador_dois);
}

function changeName(jogador) {
  if (jogador === jogador_um) {
    var jogador_um_nome = document.getElementById('jogador_um_nome');
    jogador.nome = jogador_um_nome.value;
    console.log(jogador_um);

  }
  if (jogador === jogador_dois) {
    var jogador_dois_nome = document.getElementById('jogador_dois_nome');
    jogador.nome = jogador_dois_nome.value;
    console.log(jogador_dois);
  }
}

function changeArmaAndColete(jogador) {
  if (jogador === jogador_um) {
    var arma_jogador_um = document.getElementsByName("arma_jogador_um");
    for (var i = 0; i < arma_jogador_um.length; i++) {
      if (arma_jogador_um[i].checked) {
        console.log("Escolheu: " + arma_jogador_um[i].value);
        // jogador_um.arma.dano = armas.arma4.dano;
        // jogador_um.arma.hit_chance = armas.arma4.hit_chance;
        // jogador_um.arma.critical_chance = armas.arma4.critical_chance;
        console.log(jogador_um.arma);
      }
    }
    var colete_jogador_um = document.getElementsByName("colete_jogador_um");
    for (var i = 0; i < colete_jogador_um.length; i++) {
      if (colete_jogador_um[i].checked) {
        console.log("Escolheu: " + colete_jogador_um[i].value);

        console.log(jogador_um.colete);
      }
    }
  }
  if (jogador === jogador_dois) {
    var arma_jogador_dois = document.getElementsByName("arma_jogador_dois");
    for (var i = 0; i < arma_jogador_dois.length; i++) {
      if (arma_jogador_dois[i].checked) {
        console.log("Escolheu: " + arma_jogador_dois[i].value);

        console.log(jogador_dois.arma);
      }
    }
    var colete_jogador_dois = document.getElementsByName("colete_jogador_dois");
    for (var i = 0; i < colete_jogador_dois.length; i++) {
      if (colete_jogador_dois[i].checked) {
        console.log("Escolheu: " + colete_jogador_dois[i].value);

        console.log(jogador_dois.colete);
      }
    }
  }
};
function get(object, param) {
    var level = param.split("."), value = object;
    for (var i in level)
      value = value[level[i]];
    return value;
}
function set(object, param, value) {
  var levels = param.split('.');
  var lastLevel = levels.pop();
  get(object, levels.join('.'))[lastLevel] = value;
}
function start() {

}
