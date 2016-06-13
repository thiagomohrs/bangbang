var jogador_um = {
  id: 1,
  nome: "Jogador 1",
  vida_total: 100,
  arma: {
    id: 0,
    dano: 0,
    hit_chance: 0,
    critical_chance: 0,
    municao_max: 0,
  },
  colete: {
    id: 0,
    protecao: 0,
    peso: 0,
    hit_chance: 0
  }
};
var jogador_dois = {
  id: 2,
  nome: "Jogador 2",
  vida_total: 100,
  arma: {
    id: 0,
    dano: 0,
    hit_chance: 0,
    critical_chance: 0,
    municao_max: 0
  },
  colete: {
    id: 0,
    protecao: 0,
    peso: 0,
    hit_chance: 0
  }
};
var armas = {
  arma1: {
    id: 1,
    dano: 1,
    hit_chance: 1,
    critical_chance: 1,
    municao_max: 1
  },
  arma2: {
    id: 2,
    dano: 2,
    hit_chance: 2,
    critical_chance: 2,
    municao_max: 2
  },
  arma3: {
    id: 3,
    dano: 3,
    hit_chance: 3,
    critical_chance: 3,
    municao_max: 3
  },
  arma4: {
    id: 4,
    dano: 4,
    hit_chance: 4,
    critical_chance: 4,
    municao_max: 4
  }
};

var coletes = {
  colete1: {
    id: 1,
    protecao: 1,
    peso: 1,
    hit_chance: 1
  },
  colete2: {
    id: 2,
    protecao: 2,
    peso: 2,
    hit_chance: 2
  },
  colete3: {
    id: 3,
    protecao: 3,
    peso: 3,
    hit_chance: 3
  },
  colete4: {
    id: 4,
    protecao: 4,
    peso: 4,
    hit_chance: 4
  }
};

var desenvolvimento = false;

var jogador_um_pronto = false;
var jogador_dois_pronto = false;

function hideOnDesenvolvimento(item) {
  if (desenvolvimento === true) {
    document.getElementById(item).style.visibility = "visible";
  } else {
    document.getElementById(item).style.visibility = "hidden";
  }
}

function hide(item) {
  document.getElementById(item).style.visibility = "hidden";
}

function hideDisplay(item) {
  document.getElementById(item).style.display = "none";
}

function visible(item) {
  document.getElementById(item).style.visibility = "visible";
}


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
        if (i === 3) {
          jogador_um.arma = armas.arma4;
        } else {
          if (i === 2) {
            jogador_um.arma = armas.arma3;
          } else {

            if (i === 1) {
              jogador_um.arma = armas.arma2;

            } else {
              jogador_um.arma = armas.arma1;
            }
          }
        }
        console.log(jogador_um.arma);
      }
    }
    var colete_jogador_um = document.getElementsByName("colete_jogador_um");
    for (var i = 0; i < colete_jogador_um.length; i++) {
      if (colete_jogador_um[i].checked) {
        console.log("Escolheu: " + colete_jogador_um[i].value);
        if (i === 3) {
          jogador_um.colete = coletes.colete4;
        } else {
          if (i === 2) {
            jogador_um.colete = coletes.colete3;
          } else {

            if (i === 1) {
              jogador_um.colete = coletes.colete2;

            } else {
              jogador_um.colete = coletes.colete1;
            }
          }
        }
        console.log(jogador_um.colete);
      }
    }
    mudarEstado("jogador_um");
  }
  if (jogador === jogador_dois) {
    var arma_jogador_dois = document.getElementsByName("arma_jogador_dois");
    for (var i = 0; i < arma_jogador_dois.length; i++) {
      if (arma_jogador_dois[i].checked) {
        console.log("Escolheu: " + arma_jogador_dois[i].value);
        if (i === 3) {
          jogador_dois.arma = armas.arma4;
        } else {
          if (i === 2) {
            jogador_dois.arma = armas.arma3;
          } else {

            if (i === 1) {
              jogador_dois.arma = armas.arma2;

            } else {
              jogador_dois.arma = armas.arma1;
            }
          }
        }
        console.log(jogador_dois.arma);
      }
    }
    var colete_jogador_dois = document.getElementsByName("colete_jogador_dois");
    for (var i = 0; i < colete_jogador_dois.length; i++) {
      if (colete_jogador_dois[i].checked) {
        console.log("Escolheu: " + colete_jogador_dois[i].value);
        if (i === 3) {
          jogador_dois.colete = coletes.colete4;
        } else {
          if (i === 2) {
            jogador_dois.colete = coletes.colete3;
          } else {

            if (i === 1) {
              jogador_dois.colete = coletes.colete2;

            } else {
              jogador_dois.colete = coletes.colete1;
            }
          }
        }
        console.log(jogador_dois.colete);
      }
    }
    mudarEstado("jogador_dois");
  }
};

function mudarEstado(jogador) {
  if (jogador === "jogador_um") {
    if (jogador_um_pronto === true) {
      jogador_um_pronto = false;
      document.getElementById("jogador_um_button_ready").innerHTML = "Not Ready";
      document.getElementById("jogador_um_button_ready").className = "btn btn-danger";
    } else {
      jogador_um_pronto = true;
      document.getElementById("jogador_um_button_ready").innerHTML = "Ready";
      document.getElementById("jogador_um_button_ready").className = "btn btn-success";
    }
  } else {
    if (jogador === "jogador_dois") {
      if (jogador_dois_pronto === true) {
        jogador_dois_pronto = false;
        document.getElementById("jogador_dois_button_ready").innerHTML = "Not Ready";
        document.getElementById("jogador_dois_button_ready").className = "btn btn-danger";
      } else {
        jogador_dois_pronto = true;
        document.getElementById("jogador_dois_button_ready").innerHTML = "Ready";
        document.getElementById("jogador_dois_button_ready").className = "btn btn-success";
      }
    }
  }
}

function start() {
  console.log("um " + jogador_um_pronto);
  console.log("dois " + jogador_dois_pronto);
  if (jogador_um_pronto === true) {
    if (jogador_dois_pronto === true) {
      hideDisplay("div_escolha_nome_arma_colete");
      hideDisplay("button_show");
      visible("div_jogo");
      console.log("jogo começou");
      document.getElementById("nome_jogador_um").innerHTML = jogador_um.nome;
      document.getElementById("nome_jogador_dois").innerHTML = jogador_dois.nome;
      jogador_um.vida_atual = 100;
      jogador_dois.vida_total = 100;
      jogador_um.municao_atual = 0;
      jogador_dois.municao_atual = 0;
      document.getElementById("vida_atual/total_jogador_um").innerHTML = jogador_um.vida_atual + "/" + jogador_um.vida_total;
      document.getElementById("vida_atual/total_jogador_dois").innerHTML = jogador_dois.vida_atual + "/" + jogador_dois.vida_total;
      document.getElementById("municao_atual/total_jogador_um").innerHTML = jogador_um.municao_atual + "/" + jogador_um.arma.municao_max;
      document.getElementById("municao_atual/total_jogador_dois").innerHTML = jogador_dois.municao_atual + "/" + jogador_dois.arma.municao_max;
    } else {
      document.getElementById("feedback").innerHTML = "Jogador dois não está pronto";
      console.log("jogador dois não está pronto");
    }
  } else {
    if (jogador_dois_pronto === false) {
      document.getElementById("feedback").innerHTML = "Jogadores não estão prontos";
      console.log("jogadores não estão prontos");
    } else {
      document.getElementById("feedback").innerHTML = "Jogador um não está pronto";
      console.log("jogador um não está pronto");
    }
  }
}

function atirar(jogador) {
  if (jogador.municao_atual > 0) {
    jogador.municao_atual--;
    console.log("Jogador: " + jogador.nome + "\nMunição atual: " + jogador.municao_atual + "\nMunição Max: " + jogador.arma.municao_max);
    document.getElementById("municao_atual/total_jogador_um").innerHTML = jogador_um.municao_atual + "/" + jogador_um.arma.municao_max;
    document.getElementById("municao_atual/total_jogador_dois").innerHTML = jogador_dois.municao_atual + "/" + jogador_dois.arma.municao_max;
  } else {
    alert("arma se munição");
  }

  if (jogador.municao_atual === 0) {
    if (jogador.id === 1) {
      document.getElementById("button_atirar_jogador_um").className = "btn btn-danger";
    } else {
      document.getElementById("button_atirar_jogador_dois").className = "btn btn-danger";
    }
  } else {
    if (jogador.id === 1) {
      document.getElementById("button_atirar_jogador_um").className = "btn";
    } else {
      document.getElementById("button_atirar_jogador_dois").className = "btn";
    }
  }
}

function recarregar(jogador) {
  if (jogador.municao_atual < jogador.arma.municao_max) {
    jogador.municao_atual++;
    console.log("Jogador: " + jogador.nome + "\nMunição atual: " + jogador.municao_atual + "\nMunição Max: " + jogador.arma.municao_max);
    document.getElementById("municao_atual/total_jogador_um").innerHTML = jogador_um.municao_atual + "/" + jogador_um.arma.municao_max;
    document.getElementById("municao_atual/total_jogador_dois").innerHTML = jogador_dois.municao_atual + "/" + jogador_dois.arma.municao_max;
  } else {
    alert("arma totalmente carregada");
  }
  if (jogador.municao_atual === 0) {
    if (jogador.id === 1) {
      document.getElementById("button_atirar_jogador_um").className = "btn btn-danger";
    } else {
      document.getElementById("button_atirar_jogador_dois").className = "btn btn-danger";
    }
  } else {
    if (jogador.id === 1) {
      document.getElementById("button_atirar_jogador_um").className = "btn";
    } else {
      document.getElementById("button_atirar_jogador_dois").className = "btn";
    }
  }
}

function esquivar(jogador) {

}
