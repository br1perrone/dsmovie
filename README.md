Algumas alterações que fiz no projeto original:

# Front-end

## Rotas

Troquei a rota individual de cada filme de ``/form/1`` para ``/movie/1``

## v2
[ ] aplicar contextApi
    [ ] reducer user, para salvar na localStorage o e-mail do usuário
    [ ] reducer theme, para controlar o tema ``dark`` ou ``light``
    [ ] reducer session, para guardar notificações no front-end ou back-end que serão apresentadas para o usuário
[ ] aplicar theme
    [ ] criar :root css para dark-mode
[ ] ajustar voltar da avaliação do filme para a página de origem
    [ ] destacar o filme que foi avaliado
    [ ] atualizar os dados do filme que foi avaliado com os dados já retornados do back-end
[ ] feedbacks de loading dos dados e erros na tentativa de loading
[ ] salvar avaliações que não foram enviadas por falta de conexão para envio posterior

# Back-end

O pacote mudei de ``com.devsuperior.dsmovie`` para ``com.br1perrone.dsmovie``

Na classe ``com.br1perrone.dsmovie.services.ScoreService.java`` alterei utilizei uma variável do tipo ``int`` para armazenar o contador de Scores do movie.

## v2
[ ] criar rota ``/users`` que retornará a lista de Scores feitas por aquele usuário, como uma maneira de listar os filmes 'seguidos' por ele;
