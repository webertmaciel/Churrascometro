// carne - 400gr por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + 6horas - 2000ml
// refreigerante/agua - 1000ml por pessoa + 6horas 1500ml
// criancas valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p> ${qdtTotalCarne}g de Carne </p>`

}
function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}