function aceitarAtividade(id) {
    pontosAtividade = parseInt(id)
    pontuacaoAtual = localStorage.getItem('pontuação')
    novaPontuacao = pontuacaoAtual != null ? parseInt(pontuacaoAtual) + parseInt(pontosAtividade) : pontuacaoAtual = pontosAtividade
    localStorage.setItem('pontuação', novaPontuacao)
    $('#modalExemplo').modal('hide');
}
