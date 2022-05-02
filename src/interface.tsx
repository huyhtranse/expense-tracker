import { User } from "firebase/auth";
import { ReactNode } from "react";
import { initialState } from "./context/GlobalState";

export interface ProviderProps {
  children: ReactNode;
}

export type State = typeof initialState;
export type Action = {type: 'SELECT_TAB', payload: number} | {type: 'TOGGLE_MODAL', payload: boolean}

export type AuthContextType = {
  user: User;
  signUp: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
}
