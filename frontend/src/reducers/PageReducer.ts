import { ActionType, Movie } from "utils/types";

const default_content :Movie[]      = [];   // Movie[];
const default_last                  = true; // boolean;
const default_totalPages            = 0;    // number;
const default_totalElements         = 0;    // number;
const default_size                  = 12;   // number;
const default_number                = 0;    // number;
const default_first                 = true; // boolean;
const default_numberOfElements      = 0;    // number;
const default_empty                 = true; // boolean;

export type PageType = {
    content             : Movie[];
    last                : boolean;
    totalPages          : number;
    totalElements       : number;
    size                : number;
    number              : number;
    first               : boolean;
    numberOfElements    : number;
    empty               : boolean;
}

export type PageActionType = ActionType & {
    payload?: PageType;
}

export const pageInitialState :PageType = {
    content             : default_content,
    last                : default_last,
    totalPages          : default_totalPages,
    totalElements       : default_totalElements,
    size                : default_size,
    number              : default_number,
    first               : default_first,
    numberOfElements    : default_numberOfElements,
    empty               : default_empty,
}

export const pageReducer :React.Reducer<PageType, PageActionType> = (state = pageInitialState, {type = 'RESET_PAGE', payload} :PageActionType) :PageType => {
    switch(type) {
        case 'SET_PAGE':
            return payload!;
        case 'UPDATE_CONTENT':
            const movie = payload!.content[0];
            const i = state.content.findIndex((m=>m.id === movie.id));
            const newState = state;
            newState.content[i] = movie;
            console.log('Reducer.Page.UPDATE_CONTENT', {movie, i, newState} );
            return state;
        case 'SET_CONTENT':
            return {...state, content: payload!.content};

        case 'SET_NUMBER':
            return {...state, number: payload!.number, content: []};
    
        case 'RESET_PAGE': return pageInitialState;
        default: return state;
    }
}