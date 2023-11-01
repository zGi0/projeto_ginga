const botao_passar = document.getElementById("botao_passar");
const botao_voltar = document.getElementById("botao_voltar");
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
    if (index_box == 22){
        botao_passar.disabled = true;
    }else{
        botao_passar.disabled = false;
    }
}