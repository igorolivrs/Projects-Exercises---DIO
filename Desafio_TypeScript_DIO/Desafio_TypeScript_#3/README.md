# Desafio 3

### O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
<br>
let botaoAtualizar = document.getElementById('atualizar-saldo');<br>
let botaoLimpar = document.getElementById('limpar-saldo');<br>
let soma = document.getElementById('soma');<br>
let campoSaldo = document.getElementById('campo-saldo');<br>

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {<br>
    campoSaldo.innerHTML += soma;<br>
}<br>

function limparSaldo() {<br>
    campoSaldo.innerHTML = '';<br>
}<br>

botaoAtualizar.addEventListener('click', function () {<br>
    somarAoSaldo(soma.value);<br>
});<br>

botaoLimpar.addEventListener('click', function () {<br>
    limparSaldo();<br>
});
