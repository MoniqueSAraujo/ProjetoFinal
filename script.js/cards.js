function selecionarImagem(element) {
    // Encontra o contêiner pai do elemento clicado
    var card = element.closest('.secao4-div-card');

    // Toggle class 'selecionado' no contêiner do card
    if (card) {
        card.classList.toggle('selecionado');
    }
}