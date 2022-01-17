import { ActionType } from "utils/types";

// https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const default_mode = isDark ? 'dark' : 'light';

export type ThemeType = {
    mode: 'dark' | 'light'
}

export type ThemeActionType = ActionType & {
    payload?: ThemeType;
}

export const themeInitialState :ThemeType = {
    mode: default_mode,
}

export const themeReducer :React.Reducer<ThemeType, ThemeActionType> = (state = themeInitialState, {type = 'RESET_THEME', payload} :ThemeActionType) :ThemeType => {
    switch(type) {
        case 'SET_MODE':
            return {...state, mode: payload!.mode};
        
        case 'RESET_THEME': return themeInitialState;
        default: return state;
    }
}