// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcularEl = document.querySelector("#calcular");
botaoCalcularEl.addEventListener("click", function (){

    let constanteEl = document.querySelector("#constante");
    let massa1El = document.querySelector("#massa1");
    let massa2El = document.querySelector("#massa2");
    let distanciaEl = document.querySelector("#distancia");
    let resultadoEl = document.querySelector("#resultado");

    let constante = parseFloat(constanteEl.value);
    let massa1 = parseFloat(massa1El.value);
    let massa2 = parseFloat(massa2El.value);
    let distancia = parseFloat(distanciaEl.value);

    let resultado = constante * massa1 * massa2 / Math.pow(distancia, 2);
    resultadoEl.value = resultado;
});