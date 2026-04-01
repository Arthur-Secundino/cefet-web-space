// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let listaBotoes = document.querySelectorAll(".botao-expandir-retrair");
for(let botaoEl of listaBotoes){
    botaoEl.addEventListener("click", function (evento){
        let paragrafoEl = evento.currentTarget.parentNode;
        paragrafoEl.classList.toggle("expandido");

        if(botaoEl.innerHTML === "+"){
            botaoEl.innerHTML = "-";
        }
        else{
            botaoEl.innerHTML = "+";
        }
    });
}