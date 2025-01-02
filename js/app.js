let jogosAlugados = 0; 

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogoClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Tem certeza que deseja devolver o jogo: ${nomeDoJogo.textContent}`)){
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.innerHTML = 'Alugar'
        jogosAlugados--;
    }}
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        jogosAlugados++;
    }
    contarEexibirAlugados()
}

document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEexibirAlugados()
});

function contarEexibirAlugados(){
    console.log(`Jogos alugados:${jogosAlugados}`)
}
