import { ActionType, SortMovie } from "utils/types";

const default_sort :SortMovie           = 'id'; // SortMovie;
const default_size                      = 12;   // number;

export type SessionType = {
    sort            : SortMovie;
    size            : number;
    updatedMovieId? : string;
}

export type SessionActionType = ActionType & {
    payload?: SessionType;
}

export const sessionInitialState: SessionType = {
    sort            : default_sort,
    size            : default_size,
}

export const sessionReducer :React.Reducer<SessionType, SessionActionType> = (state = sessionInitialState, { type = 'RESET_SESSION', payload }: SessionActionType) :SessionType => {
    switch (type) {
        case 'SET_SORT':
            return {...state, sort: payload!.sort};
        case 'SET_SIZE':
            return {...state, size: payload!.size};
        case 'SET_UPDATED_MOVIE_ID':
            return {...state, updatedMovieId: payload!.updatedMovieId};

        case 'RESET_SESSION': return sessionInitialState;
        default: return state;
    }
}