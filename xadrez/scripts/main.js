// casas do tabuleiro

// horizontais
const a1 = document.getElementById('a1').getBoundingClientRect();
const b1 = document.getElementById('b1').getBoundingClientRect();
const c1 = document.getElementById('c1').getBoundingClientRect();
const d1 = document.getElementById('d1').getBoundingClientRect();
const e1 = document.getElementById('e1').getBoundingClientRect();
const f1 = document.getElementById('f1').getBoundingClientRect();
const g1 = document.getElementById('g1').getBoundingClientRect();
const h1 = document.getElementById('h1').getBoundingClientRect();

// verticais
const a2 = document.getElementById('a2').getBoundingClientRect();
const a3 = document.getElementById('a3').getBoundingClientRect();
const a4 = document.getElementById('a4').getBoundingClientRect();
const a5 = document.getElementById('a5').getBoundingClientRect();
const a6 = document.getElementById('a6').getBoundingClientRect();
const a7 = document.getElementById('a7').getBoundingClientRect();
const a8 = document.getElementById('a8').getBoundingClientRect();

// armazenar as posições x e y dentro de um array
var posicoes_x = [a1.x, b1.x, c1.x, d1.x, e1.x, f1.x, g1.x, h1.x];
var posicoes_y = [a1.y, a2.y, a3.y, a4.y, a5.y, a6.y, a7.y, a8.y];

// peças pretas
const rei_p = document.getElementById('rei_p');
const rainha_p = document.getElementById('rainha_p');

const torre_p_1 = document.getElementById('torre_p_1');
const torre_p_2 = document.getElementById('torre_p_2');
const cavalo_p_1 = document.getElementById('cavalo_p_1');
const cavalo_p_2 = document.getElementById('cavalo_p_2');
const bispo_p_1 = document.getElementById('bispo_p_1');
const bispo_p_2 = document.getElementById('bispo_p_2');

const peao_p_1 = document.getElementById('peao_p_1');
const peao_p_2 = document.getElementById('peao_p_2');
const peao_p_3 = document.getElementById('peao_p_3');
const peao_p_4 = document.getElementById('peao_p_4');
const peao_p_5 = document.getElementById('peao_p_5');
const peao_p_6 = document.getElementById('peao_p_6');
const peao_p_7 = document.getElementById('peao_p_7');
const peao_p_8 = document.getElementById('peao_p_8');

// peças brancas
const rei_b = document.getElementById('rei_b');
const rainha_b = document.getElementById('rainha_b');

const torre_b_1 = document.getElementById('torre_b_1');
const torre_b_2 = document.getElementById('torre_b_2');
const cavalo_b_1 = document.getElementById('cavalo_b_1');
const cavalo_b_2 = document.getElementById('cavalo_b_2');
const bispo_b_1 = document.getElementById('bispo_b_1');
const bispo_b_2 = document.getElementById('bispo_b_2');

const peao_b_1 = document.getElementById('peao_b_1');
const peao_b_2 = document.getElementById('peao_b_2');
const peao_b_3 = document.getElementById('peao_b_3');
const peao_b_4 = document.getElementById('peao_b_4');
const peao_b_5 = document.getElementById('peao_b_5');
const peao_b_6 = document.getElementById('peao_b_6');
const peao_b_7 = document.getElementById('peao_b_7');
const peao_b_8 = document.getElementById('peao_b_8');


// entrada do botão reset
const resetar = document.querySelector('#andar');

// entradas peças pretas
const btn_rei_p = document.getElementById('btn_rei_p');
const btn_rainha_p = document.getElementById('btn_rainha_p');

const btn_torre_p_1 = document.getElementById('btn_torre_p_1');
const btn_orre_p_2 = document.getElementById('btn_torre_p_2');
const btn_cavalo_p_1 = document.getElementById('btn_cavalo_p_1');
const btn_cavalo_p_2 = document.getElementById('btn_cavalo_p_2');
const btn_bispo_p_1 = document.getElementById('btn_bispo_p_1');
const btn_bispo_p_2 = document.getElementById('btn_bispo_p_2');

const btn_peao_p_1 = document.getElementById('btn_peao_p_1');
const btn_peao_p_2 = document.getElementById('btn_peao_p_2');
const btn_peao_p_3 = document.getElementById('btn_peao_p_3');
const btn_peao_p_4 = document.getElementById('btn_peao_p_4');
const btn_peao_p_5 = document.getElementById('btn_peao_p_5');
const btn_peao_p_6 = document.getElementById('btn_peao_p_6');
const btn_peao_p_7 = document.getElementById('btn_peao_p_7');
const btn_peao_p_8 = document.getElementById('btn_peao_p_8');


// entradas peças brancas
const btn_rei_b = document.getElementById('btn_rei_b');
const btn_rainha_b = document.getElementById('btn_rainha_b');

const btn_torre_b_1 = document.getElementById('btn_torre_b_1');
const btn_orre_b_2 = document.getElementById('btn_torre_b_2');
const btn_cavalo_b_1 = document.getElementById('btn_cavalo_b_1');
const btn_cavalo_b_2 = document.getElementById('btn_cavalo_b_2');
const btn_bispo_b_1 = document.getElementById('btn_bispo_b_1');
const btn_bispo_b_2 = document.getElementById('btn_bispo_b_2');

const btn_peao_b_1 = document.getElementById('btn_peao_b_1');
const btn_peao_b_2 = document.getElementById('btn_peao_b_2');
const btn_peao_b_3 = document.getElementById('btn_peao_b_3');
const btn_peao_b_4 = document.getElementById('btn_peao_b_4');
const btn_peao_b_5 = document.getElementById('btn_peao_b_5');
const btn_peao_b_6 = document.getElementById('btn_peao_b_6');
const btn_peao_b_7 = document.getElementById('btn_peao_b_7');
const btn_peao_b_8 = document.getElementById('btn_peao_b_8');

// inputs jogadas peões brancos
const btn_peao_b_1_andar1 = document.getElementById('btn_peao_b_1_andar1');
const btn_peao_b_1_andar2 = document.getElementById('btn_peao_b_1_andar2');

const btn_peao_b_2_andar1 = document.getElementById('btn_peao_b_2_andar1');
const btn_peao_b_2_andar2 = document.getElementById('btn_peao_b_2_andar2');

const btn_peao_b_3_andar1 = document.getElementById('btn_peao_b_3_andar1');
const btn_peao_b_3_andar2 = document.getElementById('btn_peao_b_3_andar2');

const btn_peao_b_4_andar1 = document.getElementById('btn_peao_b_4_andar1');
const btn_peao_b_4_andar2 = document.getElementById('btn_peao_b_4_andar2');

const btn_peao_b_5_andar1 = document.getElementById('btn_peao_b_5_andar1');
const btn_peao_b_5_andar2 = document.getElementById('btn_peao_b_5_andar2');

const btn_peao_b_6_andar1 = document.getElementById('btn_peao_b_6_andar1');
const btn_peao_b_6_andar2 = document.getElementById('btn_peao_b_6_andar2');

const btn_peao_b_7_andar1 = document.getElementById('btn_peao_b_7_andar1');
const btn_peao_b_7_andar2 = document.getElementById('btn_peao_b_7_andar2');

const btn_peao_b_8_andar1 = document.getElementById('btn_peao_b_8_andar1');
const btn_peao_b_8_andar2 = document.getElementById('btn_peao_b_8_andar2');

// jogadas torres brancas
const btn_torre_b_1_andar1 = document.getElementById('btn_torre_b_1_andar1');
const btn_torre_b_1_andar2 = document.getElementById('btn_torre_b_1_andar2');
const btn_torre_b_1_andar3 = document.getElementById('btn_torre_b_1_andar3');
const btn_torre_b_1_andar4 = document.getElementById('btn_torre_b_1_andar4');
const btn_torre_b_1_andar5 = document.getElementById('btn_torre_b_1_andar5');
const btn_torre_b_1_andar6 = document.getElementById('btn_torre_b_1_andar6');
const btn_torre_b_1_andar7 = document.getElementById('btn_torre_b_1_andar7');

const btn_torre_b_1_andar_lado1 = document.getElementById('btn_torre_b_1_andar_lado1');
const btn_torre_b_1_andar_lado2 = document.getElementById('btn_torre_b_1_andar_lado2');
const btn_torre_b_1_andar_lado3 = document.getElementById('btn_torre_b_1_andar_lado3');
const btn_torre_b_1_andar_lado4 = document.getElementById('btn_torre_b_1_andar_lado4');
const btn_torre_b_1_andar_lado5 = document.getElementById('btn_torre_b_1_andar_lado5');
const btn_torre_b_1_andar_lado6 = document.getElementById('btn_torre_b_1_andar_lado6');
const btn_torre_b_1_andar_lado7 = document.getElementById('btn_torre_b_1_andar_lado7');



resetar.onclick = () =>{
    
    // Resetar peças pretas
    torre_p_1.style.left = posicoes_x[0] + "px";
    torre_p_1.style.top = posicoes_y[7] + "px";

    cavalo_p_1.style.left = posicoes_x[1] + "px";
    cavalo_p_1.style.top = posicoes_y[7] + "px";

    bispo_p_1.style.left = posicoes_x[2] + "px";
    bispo_p_1.style.top = posicoes_y[7] + "px";

    rainha_p.style.left = posicoes_x[3] + "px";
    rainha_p.style.top = posicoes_y[7] + "px";

    rei_p.style.left = posicoes_x[4] + "px";
    rei_p.style.top = posicoes_y[7] + "px";

    bispo_p_2.style.left = posicoes_x[5] + "px";
    bispo_p_2.style.top = posicoes_y[7] + "px";

    cavalo_p_2.style.left = posicoes_x[6] + "px";
    cavalo_p_2.style.top = posicoes_y[7] + "px";

    torre_p_2.style.left = posicoes_x[7] + "px";
    torre_p_2.style.top = posicoes_y[7] + "px";

    peao_p_1.style.left = posicoes_x[0] + "px";
    peao_p_1.style.top = posicoes_y[6] + "px";
    peao_p_2.style.left = posicoes_x[1] + "px";
    peao_p_2.style.top = posicoes_y[6] + "px";
    peao_p_3.style.left = posicoes_x[2] + "px";
    peao_p_3.style.top = posicoes_y[6] + "px";
    peao_p_4.style.left = posicoes_x[3] + "px";
    peao_p_4.style.top = posicoes_y[6] + "px";
    peao_p_5.style.left = posicoes_x[4] + "px";
    peao_p_5.style.top = posicoes_y[6] + "px";
    peao_p_6.style.left = posicoes_x[5] + "px";
    peao_p_6.style.top = posicoes_y[6] + "px";
    peao_p_7.style.left = posicoes_x[6] + "px";
    peao_p_7.style.top = posicoes_y[6] + "px";
    peao_p_8.style.left = posicoes_x[7] + "px";
    peao_p_8.style.top = posicoes_y[6] + "px";


    // resetar peças brancas
    torre_b_1.style.left = posicoes_x[0] + "px";
    torre_b_1.style.top = posicoes_y[0] + "px";

    cavalo_b_1.style.left = posicoes_x[1] + "px";
    cavalo_b_1.style.top = posicoes_y[0] + "px";

    bispo_b_1.style.left = posicoes_x[2] + "px";
    bispo_b_1.style.top = posicoes_y[0] + "px";

    rainha_b.style.left = posicoes_x[3] + "px";
    rainha_b.style.top = posicoes_y[0] + "px";

    rei_b.style.left = posicoes_x[4] + "px";
    rei_b.style.top = posicoes_y[0] + "px";

    bispo_b_2.style.left = posicoes_x[5] + "px";
    bispo_b_2.style.top = posicoes_y[0] + "px";

    cavalo_b_2.style.left = posicoes_x[6] + "px";
    cavalo_b_2.style.top = posicoes_y[0] + "px";

    torre_b_2.style.left = posicoes_x[7] + "px";
    torre_b_2.style.top = posicoes_y[0] + "px";

    peao_b_1.style.left = posicoes_x[0] + "px";
    peao_b_1.style.top = posicoes_y[1] + "px";
    peao_b_2.style.left = posicoes_x[1] + "px";
    peao_b_2.style.top = posicoes_y[1] + "px";
    peao_b_3.style.left = posicoes_x[2] + "px";
    peao_b_3.style.top = posicoes_y[1] + "px";
    peao_b_4.style.left = posicoes_x[3] + "px";
    peao_b_4.style.top = posicoes_y[1] + "px";
    peao_b_5.style.left = posicoes_x[4] + "px";
    peao_b_5.style.top = posicoes_y[1] + "px";
    peao_b_6.style.left = posicoes_x[5] + "px";
    peao_b_6.style.top = posicoes_y[1] + "px";
    peao_b_7.style.left = posicoes_x[6] + "px";
    peao_b_7.style.top = posicoes_y[1] + "px";
    peao_b_8.style.left = posicoes_x[7] + "px";
    peao_b_8.style.top = posicoes_y[1] + "px";

    
    ycords_peao_p_1 = 6;
    ycords_peao_p_2 = 6;
    ycords_peao_p_3 = 6;
    ycords_peao_p_4 = 6;
    ycords_peao_p_5 = 6;
    ycords_peao_p_6 = 6;
    ycords_peao_p_7 = 6;
    ycords_peao_p_8 = 6;

    ycords_torre_b_1 = 0;
    xcords_torre_b_1 = 0;

    ycords_peao_b_1 = 1;
    ycords_peao_b_2 = 1;
    ycords_peao_b_3 = 1;
    ycords_peao_b_4 = 1;
    ycords_peao_b_5 = 1;
    ycords_peao_b_6 = 1;
    ycords_peao_b_7 = 1;
    ycords_peao_b_8 = 1;


    // contar jogadas do peão branco
    jogadas_peao_b_1 = 0;
    jogadas_peao_b_2 = 0;
    jogadas_peao_b_3= 0;
    jogadas_peao_b_4 = 0;
    jogadas_peao_b_5 = 0;
    jogadas_peao_b_6 = 0;
    jogadas_peao_b_7 = 0;
    jogadas_peao_b_8 = 0;
}