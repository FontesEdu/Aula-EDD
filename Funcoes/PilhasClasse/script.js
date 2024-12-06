class Pilha{
    constructor(){
        this.pilha = []
    }

    push(valor){
        this.pilha.push(valor);
    }
    
    pop(){
        this.pilha.pop();
    }
    isEmpty(){
        return this.size() === 0;
    }
    
    peek(){
        return this.pilha[this.size()-1] ;
    }
    
    size(){
        return this.pilha.length;
    }

}

const p = new Pilha();

function mostrarResultado() {
    document.querySelector("#resultado").innerHTML = "Pilha: " + p.pilha;
}

function mostrarResultadoPeek() {
    let topo = p.peek();
    document.querySelector("#resultadoPeek").innerHTML = "Topo: " + topo;
}

function mostrarResultadoSize(){
    let tamanho = p.size()
    document.querySelector("#resultadoSize").innerHTML = "Tamanho: " + tamanho;
}

function mostrarResultadoIsEmpty(){
    valorDaFuncao = p.isEmpty();
    
    if(valor === true) {
        valorDaFuncao = "Está vazio";
    document.querySelector("#resultadoIsEmpty").innerHTML = valorDaFuncao;
    } else {
        valorDaFuncao = "Não está vazio";
        document.querySelector("#resultadoIsEmpty").innerHTML = valorDaFuncao;
    }
    
}


function clickPush(){
    valor = document.getElementById("input").value;
    if(valor){
    p.push(valor);
    console.log(p.pilha);
    mostrarResultado();
    }
    
}

function clickPop(){
    p.pop();
    console.log(p.pilha);
    mostrarResultado();
    
}

function clickPeek(){
    p.peek();
    mostrarResultadoPeek();
    

}

function clickSize(){
    p.size();
    mostrarResultadoSize();

}

function clickIsEmpty(){
    p.isEmpty();
    mostrarResultadoIsEmpty();
} 