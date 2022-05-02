import { Action, State } from "../interface";

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SELECT_TAB":
      return {
        ...state,
        tab: action.payload,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: action.payload,
      };

    default:
      return state;
  }
}