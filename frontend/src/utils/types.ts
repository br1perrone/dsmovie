export type SortMovie = 'id' | 'title' | 'score' | 'count';

/** tipo para filme */
export type Movie = {
    /** identificador */
    id: number;

    /** título do filme */
    title: string;

    /** média dos votos recebidos */
    score: number;

    /** contagem de votos recebidos */
    count: number;

    /** caminho da imagem */
    image: string;
}

/** tipo para página */
export type MoviePage = {
    /** lista de filmes dentro do critério de busca */
    content: Movie[];

    /** se esta é a última página */
    last: boolean;

    /** número total de páginas para o critério de busca */
    totalPages: number;

    /** total de filmes */
    totalElements: number;

    /** quantos filmes trará na página */
    size: number;

    /** número da página (-1) */
    number: number;

    /** se esta é a primeira página */
    first: boolean;

    /** número de elementos */
    numberOfElements: number;

    /** se esta página está vazia */
    empty: boolean;
}