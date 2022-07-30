var n1 = "0";
var operacao = null;
var n2 = "";
var clicadoEmIgual = false;

function incluirDigito(digito) {
  if (n2 && operacao && clicadoEmIgual) {
    clicadoEmIgual = false;
    limpar();
    n1 = digito;
    mostarNoDisplay(n1);
    return;
  }

  if (operacao !== null) {
    n2 += digito;
    mostarNoDisplay(n2);
  } else {
    if (n1 === "0") {
      n1 = digito;
    } else {
      n1 += digito;
    }
    mostarNoDisplay(n1);
  }
}

function iniciarCalculo(sinal) {
  if (clicadoEmIgual) {
    clicadoEmIgual = false;
    n2 = "";
  }
  if (operacao === null || n2 === "") {
    operacao = sinal;
  } else {
    // ja tem n1, operação e n2
    var resultado = calcular();
    n1 = resultado;
    operacao = sinal;
    n2 = "";
    mostarNoDisplay(n1);
  }
}

function incluirPonto() {
  if (operacao && n2 === "") {
    n2 += "0.";
  } else if (operacao && n2) {
    n2 += ".";
  } else {
    n1 += ".";
  }
}

function calcular() {
  var nCaldulado = 0;
  var _n1 = parseFloat(n1);
  var _n2 = parseFloat(n2);
  switch (operacao) {
    case "+":
      nCaldulado = _n1 + _n2;
      break;
    case "-":
      nCaldulado = _n1 - _n2;
      break;
    case "*":
      nCaldulado = _n1 * _n2;
      break;
    case "/":
      nCaldulado = _n1 / _n2;
      break;
  }

  return nCaldulado;
}

function obterPorcento() {
  if (!n2) {
    limpar();
    mostarNoDisplay(n1);
  } else {
    if (operacao === "+" || operacao === "-") {
      var porcento = (n1 * n2) / 100;
    } else {
      var porcento = n2 / 100;
    }
    n2 = porcento;
    mostarNoDisplay(n2);
  }
}

function finalizarCalculo() {
  clicadoEmIgual = true;
  var resultado = calcular();
  n1 = resultado;
  mostarNoDisplay(n1);
}

function limpar() {
  n1 = "0";
  operacao = null;
  n2 = "";
  mostarNoDisplay(n1);
}

function mostarNoDisplay(digito) {
  document.querySelector("#display").innerHTML = digito;
}
