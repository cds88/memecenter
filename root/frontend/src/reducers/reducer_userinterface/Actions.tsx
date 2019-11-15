
export const SELECT_ACTIVE_ACTION = "SELECT_ACTIVE_ACTION"

export const TOGGLE_NAVBARS = "TOGGLE_NAVBARS"
export interface SelectActiveAction {
    type: typeof SELECT_ACTIVE_ACTION;
}

export interface ToggleNavbars{
    type: typeof TOGGLE_NAVBARS
}
export type InterfaceActionTypes=
    | SelectActiveAction
    | ToggleNavbars 

export type AppActions = InterfaceActionTypes;

 
