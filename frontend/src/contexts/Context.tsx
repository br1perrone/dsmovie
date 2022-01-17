import React, { createContext, useReducer } from "react";
import { ActionType } from "utils/types";
/**
 * IMPORT
 * add here the new imports from reducers/newReducer
 * @example
import { elementInitialState, elementReducer, ElementActionType, ElementType } from "reducers/ElementReducer";
 */
// import { sessionInitialState, sessionReducer, SessionActionType, SessionType } from "reducers/SessionReducer";
import { pageInitialState, pageReducer, PageActionType, PageType } from "reducers/PageReducer";
import { themeInitialState, themeReducer, ThemeActionType, ThemeType } from "reducers/ThemeReducer";
import { userInitialState, userReducer, UserActionType, UserType } from "reducers/UserReducer";
import { navInitialState, navReducer, NavActionType, NavType } from "reducers/NavReducer";

/**
 * INITIAL STATE TYPE
 * add here the new StateType
 * @example
    element: ElementType;
 */
type initialStateType = {
    // session: SessionType;
    page: PageType;
    theme: ThemeType;
    user: UserType;
    nav: NavType;
}

/**
 * REDUCER ACTION TYPE
 * add here the ActionType
 * @example
    ElementActionType |
 */
type reducerActionType = 
    // SessionActionType |
    PageActionType |
    ThemeActionType |
    UserActionType |
    NavActionType |
    ActionType;

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

/**
 * INITIAL STATE
 * add here the new Initial State
 * @example
    element: elementInitialState,
 */
const initialState = {
    // session: sessionInitialState,
    page: pageInitialState,
    theme: themeInitialState,
    user: userInitialState,
    nav: navInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: ()=>{},
});

/**
 * REDUCER
 * add here the new Object of useReducer
 * @example
    element: elementReducer(state.element, action as ElementActionType),
 */
const reducer = (state :initialStateType, action :reducerActionType) => ({
    // session: sessionReducer(state.session, action as SessionActionType),
    page: pageReducer(state.page, action as PageActionType),
    user: userReducer(state.user, action as UserActionType),
    theme: themeReducer(state.theme, action as ThemeActionType),
    nav: navReducer(state.nav, action as NavActionType),
});

export const AppProvider :React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => (useReducer(reducer, initialState));