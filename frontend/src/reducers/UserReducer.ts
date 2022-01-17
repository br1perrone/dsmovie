import { ActionType } from "utils/types";

let default_state = localStorage.getItem('user') || '{}';
const user_json = JSON.parse(default_state);

const default_email = '';

export type UserType =  {
    email: string;
}

export type UserActionType = ActionType & {
    payload?: UserType;
}

export const userInitialState :UserType = {
    email: user_json?.email || default_email,
}

export const userReducer :React.Reducer<UserType, UserActionType> = (state = userInitialState, {type = 'RESET_USER', payload} :UserActionType) :UserType => {
    switch(type) {
        case 'SET_EMAIL':
            return {...state, email: payload!.email};

        case 'SAVE_USER':
            localStorage.setItem('user', JSON.stringify(payload));
            return state;
        case 'RELOAD_USER':
            {
                let default_state = localStorage.getItem('user') || '{}';
                const user_json = JSON.parse(default_state);
                
                return user_json;
            }

        case 'RESET_USER':
            return userInitialState;
        default:
            return state;
    }
}