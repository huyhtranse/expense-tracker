import { User } from "firebase/auth";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { initialState } from "./context/GlobalState";
import { initialTransState } from "./context/WalletContext"

export interface Transaction {
  id: number;
  text: string;
  amount: number;
};

export interface Props {
  children: ReactNode | null;
}

export type State = { tab?: any; modal?: boolean; transactions?: any };

export type Action =
  | { type: "SELECT_TAB"; payload: number }
  | { type: "TOGGLE_MODAL"; payload: boolean }
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "CREATE_TRANSACTION"; payload: Transaction }

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
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  createTransaction: (transaction: Transaction) => void;
}
