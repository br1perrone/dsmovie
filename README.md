Algumas alterações que fiz no projeto original:

# Front-end

## Rotas

Troquei a rota individual de cada filme de ``/form/1`` para ``/movie/1``

## v2

### Telas

<img width="33%" alt="V2 - tela de Listagem" src="v2_20220118_203005.png" />
:---:Tela de Listagem (Light Mode) com Switch para seleção de tema
<img width="33%" alt="V2 - tela de Avaliação" src="v2_20220118_203041.png" />
:---:Tela de Avaliação (Light Mode)
<img width="33%" alt="V2 - retorno da Avaliação para a tela de Listagem" src="v2_20220118_203105.png" />
:---:Retorno da Avaliação para a tela de Listagem (Light Mode) com destaque no filme avaliado e retornando para a página do mesmo

<img width="33%" alt="V2 - dark mode - tela de Listagem" src="v2_20220118_203452.png" />
:---:Tela de Listagem (Dark Mode) com Switch para seleção de tema
<img width="33%" alt="V2 - dark mode - tela de Avaliação" src="v2_20220118_2035405.png" />
:---:Retorno da Avaliação para a tela de Listagem (Dark Mode) com destaque no filme avaliado e retornando para a página do mesmo
<img width="33%" alt="V2 - dark mode - retorno da Avaliação para a tela de Listagem" src="v2_20220118_2035423.png" />
:---:Retorno da Avaliação para a tela de Listagem (Dark Mode) com destaque no filme avaliado e retornando para a página do mesmo

``imagens capturadas em 18/01/2022``

### Ideias & Planejamentos

- [ ] UX/UI
    - [ ] ações
        - [ ] @ Minhas Avaliações - fará a carga temporária dos filmes que foram avaliados pelo usuário salvo
        - [ ] @ Modo dark - fará a aplicação ficar com a interface em tema dark
        - [ ] @ Modo light - fará a aplicação ficar com a interface em tema light
        - [ ] @ Toast - cria uma nova notificação do tipo toast
    - [x] componente ``Navbar``
        - [x] botão para alternar entra @ Modo light @ Modo dark
        - [x] botão para seleção de Dark/Light mode
        - [ ] botão para configurações
        - [ ] botão para busca
        - [ ] botão para mostrar notificações
        - [ ] botão de informação (difere para telas ``List`` e ``Movie``)
    - [ ] componente ``Toasts``
        - [ ] componente ``Toast``
            - [ ] modo dark
            - [ ] ações
                - [ ] abrir filme para avaliar
    - [ ] modal ``Config``
        - [ ] ordenação padrão (default: ``id``; select: ``id``, ``name``, ``score``)
        - [ ] itens por página padrão (default: ``12``; select: ``4``, ``8``, ``12``, ``16``, ``20``)
        - [ ] ações do modal
            - [ ] reset dos valores
            - [ ] @ Minhas Avaliações
    - [ ] modal ``Search``
        - [ ] campo para pesquisar um filme (quando não encontrar o filme, o backend deverá fazer uma chamado à API externa para buscar o novo filme e adicionar ao banco de dados)
    - [ ] tela ``List``
        - [x] componente ``Pagination``
            - [x] modo dark
        - [ ] componente ``MovieCard``
            - [x] modo dark
            - [x] borda para indicar quando for avaliado
            - [ ] componente ``Stars``
                - [ ] modo dark
                - [ ] destacar a nota que o usuário salvo deu
        - [ ] botão de informação
            - [ ] modal ``ListInfo``
                - [ ] modo dark
                - [ ] quantos filmes tem no BD
                - [ ] quantas avaliações usuário já deu
                - [ ] versão do aplicativo
                - [ ] versão do servidor
    - [x] tela ``Movie``
        - [x] modo dark
        - [x] abrir já com o email do usuário salvo
        - [ ] botão de informação
            - [ ] modal ``ListInfo``
                - [ ] modo dark
                - [ ] emails de quem avaliou (sem o domain)
                - [ ] quantas avaliações usuário já deu
                - [ ] nota dada anteriormente
                - [ ] versão do aplicativo
                - [ ] versão do servidor

- [ ] aplicar contextApi
    - [x] reducer user
        - [x] salvar/recuperar da localStorage o e-mail do usuário
    - [x] reducer theme
        - [x] para modo ``dark`` ou ``light``
    - [x] reducer session
        - [x] para guardar quantos itens por página
        - [x] para guardar ordem dos itens
        - [x] guardar id do filme que foi avaliado
    - [ ] reducer notifications
        - [ ] mensgems que virão do back-end ou da UI/UX que serão apresentadas para o usuário
- [x] aplicar theme
    - [x] criar :root css para dark-mode
- [x] ajustar voltar da avaliação do filme para a página de origem
    - [x] destacar o filme que foi avaliado
    - [x] atualizar os dados do filme que foi avaliado com os dados já retornados do back-end
- [ ] feedbacks de loading dos dados e erros na tentativa de loading
    - [ ] fakecard, fakelist para
- [ ] salvar avaliações que não foram enviadas por falta de conexão para envio posterior


# Back-end

O pacote mudei de ``com.devsuperior.dsmovie`` para ``com.br1perrone.dsmovie``

Na classe ``com.br1perrone.dsmovie.services.ScoreService.java`` alterei utilizei uma variável do tipo ``int`` para armazenar o contador de Scores do movie.

## v2

### Ideias & Planejamento
- [ ] Classes
    - [ ] ``services.UserService.java``
    - [ ] ``dto.UserScoresDTO.java``
    - [ ] ``entities.java``
- [ ] Rotas
    - [ ] METHOD: GET
        - [ ] ``/`` que retornará uma mensagem dizendo dados sobre a API
        - [ ] ``/users`` que retornará a lista de Scores feitas por aquele usuário, como uma maneira de listar os filmes 'seguidos' por ele
    - [ ] METHOD: PUT
        - [ ] ``/movies/search`` que fará busca `q` de um filme, retornando o mesmo