let N = parseInt(gets());
let jogador1, jogador2;

for (let i = 0; i < N; i++) {
    jogador1 = (gets().toUpperCase()).trim();
    jogador2 = (gets().toUpperCase()).trim();

    if(jogador1 === "ATAQUE" && jogador2 === "ATAQUE"){
        print("Aniquilacao mutua");
    }else if (jogador1 === "PAPEL" && jogador2 === "PAPEL"){
          print("Ambos venceram");
    }else if (jogador1 === "ATAQUE" && jogador2 === "PEDRA"){ 
      print("Jogador 1 venceu");
    }else if (jogador1 === "PEDRA" && jogador2 === "ATAQUE"){
      print("Jogador 2 venceu");
    }else if (jogador1 === "PEDRA" && jogador2 === "PAPEL"){
       print("Jogador 1 venceu");
    }else if (jogador1 === "PAPEL" && jogador2 === "PEDRA"){
      print("Jogador 2 venceu");
    }else if (jogador1 === "ATAQUE" && jogador2 === "PAPEL"){
      print("Jogador 1 venceu");
    }else if (jogador1 === "PAPEL" && jogador2 === "ATAQUE"){
      print("Jogador 2 venceu");
    }else {
      print("Sem ganhador");
    }
  }