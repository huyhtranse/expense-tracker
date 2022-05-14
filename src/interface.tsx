import { User } from "firebase/auth";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Transaction {
  id?: string;
  text: string;
  amount: number;
  date: string;
};

export interface Props {
  children: ReactNode | null;
}

export type State = {
  tab?: any;
  modal?: boolean;
  transactions?: any;
  updateUser?: any;
};

export type Action =
  | { type: "SELECT_TAB"; payload: number }
  | { type: "TOGGLE_MODAL"; payload: boolean }
  | { type: "DELETE_TRANSACTION"; payload: string }
  | { type: "CREATE_TRANSACTION"; payload: Transaction }
  | { type: "FETCH_TRANSACTIONS"; payload: Transaction[] }
  | { type: 'UPDATE_MODE'; payload: string }

export type AuthContextType = {
  user: User;
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>> ;
  signUp: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  googleSignIn: () => void;
}

export type TransContextType = {
  minus: number,
  plus: number,
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  createTransaction: (transaction: Transaction) => void;
  fetchTransactions: (transactions: Transaction[]) => void;
}
