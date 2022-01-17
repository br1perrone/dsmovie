import { ActionType } from "utils/types"

const default_origin            = '' // string;
const default_actual            = '' // string;
const default_id                = '' // string;
const default_notification      = '' // string;
const default_warning           = '' // string;

export type NavType = {
    origin          : string;
    actual          : string;
    id              : string;
    notification    : string;
    warning         : string;
}

export type NavActionType = ActionType & {
    payload?: NavType;
}

export const navInitialState: NavType = {
    origin          : default_origin,
    actual          : default_actual,
    id              : default_id,
    notification    : default_notification,
    warning         : default_warning,
}

export const navReducer :React.Reducer<NavType, NavActionType> = (state = navInitialState, {type = 'RESET_NAV', payload}: NavActionType) :NavType => {
    switch (type) {
        case 'SET_ORIGIN':
            return { ...state, origin: payload!.origin };
        case 'SET_ACTUAL':
            return { ...state, actual: payload!.actual };
        case 'SET_ID':
            return { ...state, id: payload!.id };

        case 'SET_NOTIFICATION':
            return { ...state, notification: payload!.notification };
        case 'SET_WARNING':
            return { ...state, warning: payload!.warning };

        case 'RESET_NAV': return navInitialState;
        default: return state;
    }
}