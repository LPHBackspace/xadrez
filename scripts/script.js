// casas do tabuleiro
const a8 = document.getElementById('a8').getBoundingClientRect();
const b8 = document.getElementById('b8').getBoundingClientRect(); 
const c8 = document.getElementById('c8').getBoundingClientRect(); 
const d8 = document.getElementById('d8').getBoundingClientRect(); 
const e8 = document.getElementById('e8').getBoundingClientRect(); 
const f8 = document.getElementById('f8').getBoundingClientRect(); 
const g8 = document.getElementById('g8').getBoundingClientRect(); 
const h8 = document.getElementById('h8').getBoundingClientRect();

const a7 = document.getElementById('a7').getBoundingClientRect(); 
const b7 = document.getElementById('b7').getBoundingClientRect(); 
const c7 = document.getElementById('c7').getBoundingClientRect(); 
const d7 = document.getElementById('d7').getBoundingClientRect(); 
const e7 = document.getElementById('e7').getBoundingClientRect(); 
const f7 = document.getElementById('f7').getBoundingClientRect(); 
const g7 = document.getElementById('g7').getBoundingClientRect(); 
const h7 = document.getElementById('h7').getBoundingClientRect(); 

const a6 = document.getElementById('a6').getBoundingClientRect();
const b6 = document.getElementById('b6').getBoundingClientRect();
const c6 = document.getElementById('c6').getBoundingClientRect();
const d6 = document.getElementById('d6').getBoundingClientRect();
const e6 = document.getElementById('e6').getBoundingClientRect();
const f6 = document.getElementById('f6').getBoundingClientRect();
const g6 = document.getElementById('g6').getBoundingClientRect();
const h6 = document.getElementById('h6').getBoundingClientRect();

const a5 = document.getElementById('a5').getBoundingClientRect();
const b5 = document.getElementById('b5').getBoundingClientRect();
const c5 = document.getElementById('c5').getBoundingClientRect();
const d5 = document.getElementById('d5').getBoundingClientRect();
const e5 = document.getElementById('e5').getBoundingClientRect();
const f5 = document.getElementById('f5').getBoundingClientRect();
const g5 = document.getElementById('g5').getBoundingClientRect();
const h5 = document.getElementById('h5').getBoundingClientRect();

const a4 = document.getElementById('a4').getBoundingClientRect();
const b4 = document.getElementById('b4').getBoundingClientRect();
const c4 = document.getElementById('c4').getBoundingClientRect();
const d4 = document.getElementById('d4').getBoundingClientRect();
const e4 = document.getElementById('e4').getBoundingClientRect();
const f4 = document.getElementById('f4').getBoundingClientRect();
const g4 = document.getElementById('g4').getBoundingClientRect();
const h4 = document.getElementById('h4').getBoundingClientRect();

const a3 = document.getElementById('a3').getBoundingClientRect();
const b3 = document.getElementById('b3').getBoundingClientRect();
const c3 = document.getElementById('c3').getBoundingClientRect();
const d3 = document.getElementById('d3').getBoundingClientRect();
const e3 = document.getElementById('e3').getBoundingClientRect();
const f3 = document.getElementById('f3').getBoundingClientRect();
const g3 = document.getElementById('g3').getBoundingClientRect();
const h3 = document.getElementById('h3').getBoundingClientRect();

const a2 = document.getElementById('a2').getBoundingClientRect();
const b2 = document.getElementById('b2').getBoundingClientRect();
const c2 = document.getElementById('c2').getBoundingClientRect();
const d2 = document.getElementById('d2').getBoundingClientRect();
const e2 = document.getElementById('e2').getBoundingClientRect();
const f2 = document.getElementById('f2').getBoundingClientRect();
const g2 = document.getElementById('g2').getBoundingClientRect();
const h2 = document.getElementById('h2').getBoundingClientRect();

const a1 = document.getElementById('a1').getBoundingClientRect();
const b1 = document.getElementById('b1').getBoundingClientRect();
const c1 = document.getElementById('c1').getBoundingClientRect();
const d1 = document.getElementById('d1').getBoundingClientRect();
const e1 = document.getElementById('e1').getBoundingClientRect();
const f1 = document.getElementById('f1').getBoundingClientRect();
const g1 = document.getElementById('g1').getBoundingClientRect();
const h1 = document.getElementById('h1').getBoundingClientRect();


// armazenar as posições x e y dentro de um array
var posicoes_x = [a1.x, b1.x, c1.x, d1.x, e1.x, f1.x, h1.x, a2.x, b2.x, c2.x, d2.x, e2.x, f2.x, h2.x, a3.x, b3.x, c3.x, d3.x, e3.x, f3.x, h3.x, a4.x, b4.x, c4.x, d4.x, e4.x, f4.x, h4.x, a5.x, b5.x, c5.x, d5.x, e5.x, f5.x, h5.x, a6.x, b6.x, c6.x, d6.x, e6.x, f6.x, h6.x, a7.x, b7.x, c7.x, d7.x, e7.x, f7.x, h7.x, a8.x, b8.x, c8.x, d8.x, e8.x, f8.x, h8.x];
var posicoes_y = [a1.y, b1.y, c1.y, d1.y, e1.y, f1.y, h1.y, a2.y, b2.y, c2.y, d2.y, e2.y, f2.y, h2.y, a3.y, b3.y, c3.y, d3.y, e3.y, f3.y, h3.y, a4.y, b4.y, c4.y, d4.y, e4.y, f4.y, h4.y, a5.y, b5.y, c5.y, d5.y, e5.y, f5.y, h5.y, a6.y, b6.y, c6.y, d6.y, e6.y, f6.y, h6.y, a7.y, b7.y, c7.y, d7.y, e7.y, f7.y, h7.y, a8.y, b8.y, c8.y, d8.y, e8.y, f8.y, h8.y];


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

resetar.onclick = () =>{
    
    // Resetar peças pretas
    torre_p_1.style.left = posicoes_x[0] + "px";
    torre_p_1.style.top = a8.y + "px";

    cavalo_p_1.style.left = b8.x + "px";
    cavalo_p_1.style.top = b8.y + "px";

    bispo_p_1.style.left = c8.x + "px";
    bispo_p_1.style.top = c8.y + "px";

    rainha_p.style.left = d8.x + "px";
    rainha_p.style.top = d8.y + "px";

    rei_p.style.left = e8.x + "px";
    rei_p.style.top = e8.y + "px";

    bispo_p_2.style.left = f8.x + "px";
    bispo_p_2.style.top = f8.y + "px";

    cavalo_p_2.style.left = g8.x + "px";
    cavalo_p_2.style.top = g8.y + "px";

    torre_p_2.style.left = h8.x + "px";
    torre_p_2.style.top = h8.y + "px";

    peao_p_1.style.left = a7.x + "px";
    peao_p_1.style.top = a7.y + "px";
    peao_p_2.style.left = b7.x + "px";
    peao_p_2.style.top = b7.y + "px";
    peao_p_3.style.left = c7.x + "px";
    peao_p_3.style.top = c7.y + "px";
    peao_p_4.style.left = d7.x + "px";
    peao_p_4.style.top = d7.y + "px";
    peao_p_5.style.left = e7.x + "px";
    peao_p_5.style.top = e7.y + "px";
    peao_p_6.style.left = f7.x + "px";
    peao_p_6.style.top = f7.y + "px";
    peao_p_7.style.left = g7.x + "px";
    peao_p_7.style.top = g7.y + "px";
    peao_p_8.style.left = h7.x + "px";
    peao_p_8.style.top = h7.y + "px";


    // resetar peças brancas
    torre_b_1.style.left = posicoes_x[0] + "px";
    torre_b_1.style.top = posicoes_y[0] + "px";

    cavalo_b_1.style.left = b1.x + "px";
    cavalo_b_1.style.top = b1.y + "px";

    bispo_b_1.style.left = c1.x + "px";
    bispo_b_1.style.top = c1.y + "px";

    rainha_b.style.left = d1.x + "px";
    rainha_b.style.top = d1.y + "px";

    rei_b.style.left = e1.x + "px";
    rei_b.style.top = e1.y + "px";

    bispo_b_2.style.left = f1.x + "px";
    bispo_b_2.style.top = f1.y + "px";

    cavalo_b_2.style.left = g1.x + "px";
    cavalo_b_2.style.top = g1.y + "px";

    torre_b_2.style.left = h1.x + "px";
    torre_b_2.style.top = h1.y + "px";

    peao_b_1.style.left = a2.x + "px";
    peao_b_1.style.top = a2.y + "px";
    peao_b_2.style.left = b2.x + "px";
    peao_b_2.style.top = b2.y + "px";
    peao_b_3.style.left = c2.x + "px";
    peao_b_3.style.top = c2.y + "px";
    peao_b_4.style.left = d2.x + "px";
    peao_b_4.style.top = d2.y + "px";
    peao_b_5.style.left = e2.x + "px";
    peao_b_5.style.top = e2.y + "px";
    peao_b_6.style.left = f2.x + "px";
    peao_b_6.style.top = f2.y + "px";
    peao_b_7.style.left = g2.x + "px";
    peao_b_7.style.top = g2.y + "px";
    peao_b_8.style.left = h2.x + "px";
    peao_b_8.style.top = h2.y + "px";

}