let display = document.getElementById('display');
let valorAtual = '';
let operador = null;
let valorAnterior = '';

function adicionarNumero(num) {
    valorAtual += num;
    display.value = valorAtual;
}

function adicionarOperador(op) {
    if (valorAtual === '') return;
    if (operador !== null) calcular();
    
    operador = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function calcular() {
    if (operador === null || valorAtual === '') return;
    
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    
    switch(operador) {
        case '+': resultado = anterior + atual; break;
        case '-': resultado = anterior - atual; break;
        case '*': resultado = anterior * atual; break;
        case '/': resultado = anterior / atual; break;
    }
    
    display.value = resultado;
    valorAtual = resultado.toString();
    operador = null;
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = null;
    display.value = '';
}

function apagar() {
    valorAtual = valorAtual.slice(0, -1);
    display.value = valorAtual;
}
