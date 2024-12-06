pilha = [];

function mostrarResultado() {
    document.querySelector("#resultado").innerHTML = "Pilha: " + pilha;
}

function mostrarResultadoPeek(valor) {
    document.querySelector("#resultadoPeek").innerHTML = "Topo: " + valor;
}

function mostrarResultadoIsEmpty(valor){
    valorDaFuncao = valor;
    
    if(valor === true) {
        valorDaFuncao = "Está vazio";
    document.querySelector("#resultadoIsEmpty").innerHTML = valorDaFuncao;
    } else {
        valorDaFuncao = "Não está vazio";
        document.querySelector("#resultadoIsEmpty").innerHTML = valorDaFuncao;
    }
    
}

function mostrarResultadoSize(valor){
    document.querySelector("#resultadoSize").innerHTML = "Tamanho: " + valor;
}

function clickPush(){
    valor = document.getElementById("input").value;
    if(valor){
    push(valor);
    mostrarResultado();
    console.log(pilha);
    }
    
}

function clickPop(){
    pop();
    mostrarResultado();
    console.log(pilha);

}

function clickPeek(){
    mostrarResultadoPeek(peek());
    peek();
    mostrarResultado();
    console.log(pilha);

}

function clickSize(){
    mostrarResultadoSize(size());
    size();
    mostrarResultado();
    console.log(pilha);

}

function clickIsEmpty(){
    mostrarResultadoIsEmpty(isEmpty());
    isEmpty();
    mostrarResultado();
    console.log(pilha);
} 

function push(valor){
    pilha.push(valor);
}

function pop(){
    pilha.pop();
}
function isEmpty(){
    return size() == 0;
}

function peek(){
    return pilha[pilha.length - 1];
}

function size(){
    return pilha.length;
}