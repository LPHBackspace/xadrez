
function limpar_peoes(){
    btn_peao_b_1_andar1.style.display = "none";
    btn_peao_b_1_andar2.style.display = "none";
    btn_peao_b_2_andar1.style.display = "none";
    btn_peao_b_2_andar2.style.display = "none";
    btn_peao_b_3_andar1.style.display = "none";
    btn_peao_b_3_andar2.style.display = "none";
    btn_peao_b_4_andar1.style.display = "none";
    btn_peao_b_4_andar2.style.display = "none";
    btn_peao_b_5_andar1.style.display = "none";
    btn_peao_b_5_andar2.style.display = "none";
    btn_peao_b_6_andar1.style.display = "none";
    btn_peao_b_6_andar2.style.display = "none";
    btn_peao_b_7_andar1.style.display = "none";
    btn_peao_b_7_andar2.style.display = "none";
    btn_peao_b_8_andar1.style.display = "none";
    btn_peao_b_8_andar2.style.display = "none";
}

// peões brancos configs
btn_peao_b_1.onclick = () =>{
    btn_peao_b_1_andar1.style.display = "block";
    if (jogadas_peao_b_1 < 1){
        btn_peao_b_1_andar2.style.display = "block";
    }
}
btn_peao_b_1_andar1.onclick = () =>{
    ycords_peao_b_1 += 1;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
    
    
    jogadas_peao_b_1 += 1;
    limpar_peoes();
}
btn_peao_b_1_andar2.onclick = () =>{
    ycords_peao_b_1 += 2;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
    
    jogadas_peao_b_1 += 1;
    limpar_peoes();
}


btn_peao_b_2.onclick = () =>{
    btn_peao_b_2_andar1.style.display = "block";
    if (jogadas_peao_b_2 < 1){
        btn_peao_b_2_andar2.style.display = "block";
    }
}
btn_peao_b_2_andar1.onclick = () =>{
    ycords_peao_b_2 += 1;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
    
    jogadas_peao_b_2 += 1;
    limpar_peoes();
}
btn_peao_b_2_andar2.onclick = () =>{
    ycords_peao_b_2 += 2;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
    
    jogadas_peao_b_2 += 1;
    limpar_peoes();
}


btn_peao_b_3.onclick = () =>{
    btn_peao_b_3_andar1.style.display = "block";
    if (jogadas_peao_b_3 < 1){
        btn_peao_b_3_andar2.style.display = "block";
    }
}
btn_peao_b_3_andar1.onclick = () =>{
    ycords_peao_b_3 += 1;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
    
    jogadas_peao_b_3 += 1;
    limpar_peoes();
}
btn_peao_b_3_andar2.onclick = () =>{
    ycords_peao_b_3 += 2;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
    
    jogadas_peao_b_3 += 1;
    limpar_peoes();
}


btn_peao_b_4.onclick = () =>{
    btn_peao_b_4_andar1.style.display = "block";
    if (jogadas_peao_b_4 < 1){
        btn_peao_b_4_andar2.style.display = "block";
    }
}
btn_peao_b_4_andar1.onclick = () =>{
    ycords_peao_b_4 += 1;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
    
    jogadas_peao_b_4 += 1;
    limpar_peoes();
}
btn_peao_b_4_andar2.onclick = () =>{
    ycords_peao_b_4 += 2;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
    
    jogadas_peao_b_4 += 1;
    limpar_peoes();
}


btn_peao_b_5.onclick = () =>{
    btn_peao_b_5_andar1.style.display = "block";
    if (jogadas_peao_b_5 < 1){
        btn_peao_b_5_andar2.style.display = "block";
    }
}
btn_peao_b_5_andar1.onclick = () =>{
    ycords_peao_b_5 += 1;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
   
    jogadas_peao_b_5 += 1;
    limpar_peoes();
}
btn_peao_b_5_andar2.onclick = () =>{
    ycords_peao_b_5 += 2;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
    
    jogadas_peao_b_5 += 1;
    limpar_peoes();
}


btn_peao_b_6.onclick = () =>{
    btn_peao_b_6_andar1.style.display = "block";
    if (jogadas_peao_b_6 < 1){
        btn_peao_b_6_andar2.style.display = "block";
    }
}
btn_peao_b_6_andar1.onclick = () =>{
    ycords_peao_b_6 += 1;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
    
    jogadas_peao_b_6 += 1;
    limpar_peoes();
}
btn_peao_b_6_andar2.onclick = () =>{
    ycords_peao_b_6 += 2;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
    
    jogadas_peao_b_6 += 1;
    limpar_peoes();
}


btn_peao_b_7.onclick = () =>{
    btn_peao_b_7_andar1.style.display = "block";
    if (jogadas_peao_b_7 < 1){
        btn_peao_b_7_andar2.style.display = "block";
    }
}
btn_peao_b_7_andar1.onclick = () =>{
    ycords_peao_b_7 += 1;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
    
    jogadas_peao_b_7 += 1;
    limpar_peoes();
}
btn_peao_b_7_andar2.onclick = () =>{
    ycords_peao_b_7 += 2;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
    
    jogadas_peao_b_7 += 1;
    limpar_peoes();
}


btn_peao_b_8.onclick = () =>{
    btn_peao_b_8_andar1.style.display = "block";
    if (jogadas_peao_b_8 < 1){
        btn_peao_b_8_andar2.style.display = "block";
    }
}
btn_peao_b_8_andar1.onclick = () =>{
    ycords_peao_b_8 += 1;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
    
    jogadas_peao_b_8 += 1;
    limpar_peoes();
}
btn_peao_b_8_andar2.onclick = () =>{
    ycords_peao_b_8 += 2;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
    
    jogadas_peao_b_8 += 1;
    limpar_peoes();
}


