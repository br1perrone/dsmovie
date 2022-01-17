import { ActionType, MoviePage } from "utils/types";

export type SessionType = {
    page: MoviePage;
}

export type SessionActionType = ActionType & {
    payload?: SessionType;
}

const page = {
    content: [],
    empty: true, last: true, first: true,
    size: 12, number: 0,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0
}

export const sessionInitialState: SessionType = {
    page,
}

export const sessionReducer :React.Reducer<SessionType, SessionActionType> = (state = sessionInitialState, { type = 'RESET_SESSION', payload }: SessionActionType) :SessionType => {
    switch (type) {

        case 'RESET_SESSION': return sessionInitialState;
        default: return state;
    }
}