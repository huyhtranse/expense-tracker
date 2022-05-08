import { Action, State, Transaction } from "../interface";

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

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item: Transaction) => item.id !== action.payload
        ),
      };
    case "CREATE_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
