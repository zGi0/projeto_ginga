const botao_passar = document.getElementById("botao_passar");
const botao_voltar = document.getElementById("botao_voltar");
const botao_finalizar = document.getElementById("finalizar");
var index_box = 1;
var atual_html = document.getElementById("box-"+index_box);

// direcao deve ser ou +1 ou -1, pois é a direção da mudança, aonde -1 é voltar e +1 é avançar
function mudar_pagina(direcao){
    atual_html.style.display = "none";

    index_box += direcao;
    
    atual_html = document.getElementById("box-"+index_box);
    atual_html.style.display = "block";
    
    if (index_box == 1){
        botao_voltar.disabled = true;
        return;
    }else{
        botao_voltar.disabled = false;
    }
    if (index_box == 24){
        botao_passar.disabled = true;
        botao_finalizar.style.display = "block";
    }else{
        botao_passar.disabled = false;
        botao_finalizar.style.display = "none";
    }
}
