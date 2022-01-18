import { ActionType } from "utils/types";

// https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let local_theme = localStorage.getItem('theme');
local_theme = (local_theme === undefined) ? '{}' : local_theme;
const theme_json = JSON.parse(local_theme!);

const default_mode = isDark ? 'dark' : 'light';

export type ThemeType = {
    mode: 'dark' | 'light'
}

export type ThemeActionType = ActionType & {
    payload?: ThemeType;
}

export const themeInitialState :ThemeType = {
    mode: theme_json?.mode || default_mode,
}

export const themeReducer :React.Reducer<ThemeType, ThemeActionType> = (state = themeInitialState, {type = 'RESET_THEME', payload} :ThemeActionType) :ThemeType => {
    switch(type) {
        case 'SET_MODE':
            const newState = {...state, mode: payload!.mode};
            localStorage.setItem('theme', JSON.stringify(newState));
            return newState;
        
        case 'RESET_THEME': return themeInitialState;
        default: return state;
    }
}