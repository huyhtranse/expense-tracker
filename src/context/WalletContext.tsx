import React, {createContext, useReducer} from "react";
import { Props, Transaction, TransContextType } from "../interface";
import { Reducer } from "./Reducer";

export const initialTransState = {
  transactions: [
    { id: 1, text: 'Flower', amount: 40 },
    { id: 2, text: 'Light', amount: -40 },
    { id: 3, text: 'Speaker', amount: 710 },
    { id: 4, text: 'Tissue', amount: -22 }
  ]
}

export const WalletContext = createContext<TransContextType | any>(initialTransState);

export const WalletProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialTransState);

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function createTransaction(transaction: Transaction) {
    dispatch({
      type: 'CREATE_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <WalletContext.Provider value={{ transactions: state.transactions, deleteTransaction, createTransaction }}>
      {children}
    </WalletContext.Provider>
  )
}