let SETA_ESQUERDA = 37; 
let SETA_DIREITA = 39; 
let SETA_CIMA = 38; 
let SETA_BAIXO = 40; 
let ESPACO = 32; 

function Teclado(elemento){ 

    this.elemento= elemento; 
    this.pressionadas = []; 
    this.disparadas = []; 
    this.funcoesDisparo = []; 

    let teclado = this; 

    elemento.addEventListener('keydown', function(evento){ 

        let tecla = evento.keyCode; 
        teclado.pressionadas[tecla] = true; 

    if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){ 

        teclado.disparadas[tecla] = true; 
        teclado.funcoesDisparo[tecla] (); 

    } 

}); 

elemento.addEventListener('keyup', function(evento){ 

    teclado.pressionadas[evento.keyCode] = false; 
    teclado.disparadas[evento.keyCode] = false; 

}); 

} 

Teclado.prototype = { 

    pressionada: function(tecla){ 
        return this.pressionadas[tecla]; 

    }, 

    disparou: function(tecla, callback){ 
        this.funcoesDisparo[tecla] = callback; 

    } 

} 