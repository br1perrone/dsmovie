Algumas alterações que fiz no projeto original:

# Front-end

## Rotas

Troquei a rota individual de cada filme de ``/form/1`` para ``/movie/1``

## v2
- [ ] UX/UI
    - [x] componente ``Navbar``;
        - [x] modo dark;
        - [x] botão para seleção de Dark/Light mode;
        - [ ] botão para configurações;
        - [ ] botão para busca;
        - [ ] botão para notificações;
    - [ ] modal ``Config``
        - [ ] ordenação padrão (default: ``id``; select: ``id``, ``name``, ``score``);
        - [ ] itens por página padrão (default: ``12``; select: ``4``, ``8``, ``12``, ``16``, ``20``);
        - [ ] ações do modal;
            - [ ] reset dos valores;
            - [ ] lista de Minhas Avaliações, que fará a carga temporária dos filmes que foram avaliados pelo usuário salvo;
    - [ ] modal ``Search``;
        - [ ] campo para pesquisar um filme (quando não encontrar o filme, o backend deverá fazer uma chamado à API externa para buscar o novo filme e adicionar ao banco de dados);
    - [ ] tela ``List``;
        - [x] componente ``Pagination``;
            - [x] modo dark;
        - [ ] componente ``MovieCard``;
            - [x] modo dark;
            - [x] borda para indicar quando for avaliado;
            - [ ] componente ``Stars``;
                - [ ] modo dark;
                - [ ] destacar a nota que o usuário salvo deu;
    - [x] tela ``Movie``;
        - [x] modo dark;
        - [x] abrir já com o email do usuário salvo;
- [ ] aplicar contextApi;
    - [x] reducer user;
        - [x] salvar/recuperar da localStorage o e-mail do usuário;
    - [x] reducer theme;
        - [x] para modo ``dark`` ou ``light``;
    - [x] reducer session;
        - [x] para guardar quantos itens por página;
        - [x] para guardar ordem dos itens;
        - [x] guardar id do filme que foi avaliado;
        - [ ] notificações no front-end ou back-end que serão apresentadas para o usuário;
- [x] aplicar theme;
    - [x] criar :root css para dark-mode;
- [x] ajustar voltar da avaliação do filme para a página de origem;
    - [x] destacar o filme que foi avaliado;
    - [x] atualizar os dados do filme que foi avaliado com os dados já retornados do back-end;
- [ ] feedbacks de loading dos dados e erros na tentativa de loading;
    - [ ] fakecard, fakelist para;
- [ ] salvar avaliações que não foram enviadas por falta de conexão para envio posterior;

# Back-end

O pacote mudei de ``com.devsuperior.dsmovie`` para ``com.br1perrone.dsmovie``

Na classe ``com.br1perrone.dsmovie.services.ScoreService.java`` alterei utilizei uma variável do tipo ``int`` para armazenar o contador de Scores do movie.

## v2
- [ ] Classes
    - [ ] ``services.UserService.java``
    - [ ] ``dto.UserScoresDTO.java``
    - [ ] ``entities.java``
- [ ] Rotas
    - [ ] METHOD: GET
        - [ ] ``/`` que retornará uma mensagem dizendo dados sobre a API;
        - [ ] ``/users`` que retornará a lista de Scores feitas por aquele usuário, como uma maneira de listar os filmes 'seguidos' por ele;
    - [ ] METHOD: PUT
        - [ ] ``/movies/search`` que fará busca `q` de um filme, retornando o mesmo;