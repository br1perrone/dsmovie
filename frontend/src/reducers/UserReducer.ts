import { ActionType } from "utils/types";

let local_user = localStorage.getItem('user');
local_user = (local_user === undefined) ? '{}' : local_user;
const user_json = JSON.parse(local_user!);

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
    console.info('Reducer', {state, type, payload});
    switch(type) {
        case 'SET_EMAIL':
            return {...state, email: payload!.email};

        case 'SAVE_USER':
            localStorage.setItem('user', JSON.stringify(state));
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