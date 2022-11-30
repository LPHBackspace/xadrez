// Torre branca

function torre_b1_mostrar_jogadas(){
    if (ycords_torre_b_1 < 7){
    btn_torre_b_1_andar1.style.display = "block";
    } if (ycords_torre_b_1 < 6){
    btn_torre_b_1_andar2.style.display = "block";
    } if (ycords_torre_b_1 < 5){
    btn_torre_b_1_andar3.style.display = "block";
    } if (ycords_torre_b_1 < 4){
    btn_torre_b_1_andar4.style.display = "block";
    } if(ycords_torre_b_1 < 3){
    btn_torre_b_1_andar5.style.display = "block";
    } if (ycords_torre_b_1 < 2){
    btn_torre_b_1_andar6.style.display = "block";
    } if(ycords_torre_b_1 < 1){
    btn_torre_b_1_andar7.style.display = "block";
    }

    if (xcords_torre_b_1 < 7){
    btn_torre_b_1_andar_lado1.style.display = "block";
    } if (xcords_torre_b_1 < 6){
    btn_torre_b_1_andar_lado2.style.display = "block";
    } if (xcords_torre_b_1 < 5){
    btn_torre_b_1_andar_lado3.style.display = "block";
    } if (xcords_torre_b_1 < 4){
    btn_torre_b_1_andar_lado4.style.display = "block";
    } if (xcords_torre_b_1 < 3){
    btn_torre_b_1_andar_lado5.style.display = "block";
    } if (xcords_torre_b_1 < 2){
    btn_torre_b_1_andar_lado6.style.display = "block";
    } if (xcords_torre_b_1 < 1){
    btn_torre_b_1_andar_lado7.style.display = "block";
    }
}

function limpar_casas(){
    btn_torre_b_1_andar1.style.display = "none";
    btn_torre_b_1_andar2.style.display = "none";
    btn_torre_b_1_andar3.style.display = "none";
    btn_torre_b_1_andar4.style.display = "none";
    btn_torre_b_1_andar5.style.display = "none";
    btn_torre_b_1_andar6.style.display = "none";
    btn_torre_b_1_andar7.style.display = "none";

    btn_torre_b_1_andar_lado1.style.display = "none";
    btn_torre_b_1_andar_lado2.style.display = "none";
    btn_torre_b_1_andar_lado3.style.display = "none";
    btn_torre_b_1_andar_lado4.style.display = "none";
    btn_torre_b_1_andar_lado5.style.display = "none";
    btn_torre_b_1_andar_lado6.style.display = "none";
    btn_torre_b_1_andar_lado7.style.display = "none";
}



// torres brancas configs
btn_torre_b_1.onclick = () =>{
    torre_b1_mostrar_jogadas();

}
btn_torre_b_1_andar1.onclick = () =>{
    ycords_torre_b_1 += 1;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar2.onclick = () =>{
    ycords_torre_b_1 += 2;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar3.onclick = () =>{
    ycords_torre_b_1 += 3;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar4.onclick = () =>{
    ycords_torre_b_1 += 4;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar5.onclick = () =>{
    ycords_torre_b_1 += 5;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar6.onclick = () =>{
    ycords_torre_b_1 += 6;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar7.onclick = () =>{
    ycords_torre_b_1 += 7;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_casas();
}


btn_torre_b_1_andar_lado1.onclick = () =>{
    xcords_torre_b_1 += 1;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado2.onclick = () =>{
    xcords_torre_b_1 += 2;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado3.onclick = () =>{
    xcords_torre_b_1 += 3;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado4.onclick = () =>{
    xcords_torre_b_1 += 4;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado5.onclick = () =>{
    xcords_torre_b_1 += 5;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado6.onclick = () =>{
    xcords_torre_b_1 += 6;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}
btn_torre_b_1_andar_lado7.onclick = () =>{
    xcords_torre_b_1 += 7;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_casas();
}