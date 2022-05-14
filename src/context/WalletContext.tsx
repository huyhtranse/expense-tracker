import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { addDoc, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Props, TransContextType, Transaction } from "../interface";
import { Reducer } from "./Reducer";

export const initialTransState = {
  transactions: []
}

export const WalletContext = createContext<TransContextType | any>(initialTransState);

export const WalletProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialTransState);
  const transCollectionRef = collection(db, "transactions");
  const [minus, setMinus] = useState<number>(0);
  const [plus, setPlus] = useState<number>(0);
  
  useEffect(() => {
    const transCollectionRef = collection(db, "transactions");

    const getTrans = async () => {
      const data = await getDocs(transCollectionRef);
      const transacs: any = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      fetchTransactions(transacs);
      const plus = transacs.reduce(
        (total: number, trans: Transaction) => {
          if (trans.amount > 0) {
            return (total += trans.amount);
          }
          return (total += 0);
        },
        0
      );
      const minus = transacs.reduce(
        (total: number, trans: Transaction) => {
          if (trans.amount < 0) {
            return (total += trans.amount);
          }
          return (total += 0);
        },
        0
      );
      setPlus(plus);
      setMinus(minus);
    };  
    getTrans();
  }, []);

  function fetchTransactions(transactions: any) {
    dispatch({
      type: 'FETCH_TRANSACTIONS',
      payload: transactions
    })
  }
  function deleteTransaction(id: string) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  async function createTransaction(text: string, amount: number) {
    const transaction = { text, amount, date: new Date().toLocaleDateString('fr-FR') };

    const res = await addDoc(transCollectionRef, transaction);
    dispatch({
      type: 'CREATE_TRANSACTION',
      payload: { ...transaction, id: res.id }
    });
  }
  async function updateTransaction(id: string, text: string, amount: number) {
    const trans = doc(db, 'transactions', id);
    const newFields = { text, amount };

    try {
      await updateDoc(trans, newFields);
    } catch(err: any) {
      console.log(err.message);
    }

  }
  return (
    <WalletContext.Provider value={{ minus, plus, transactions: state.transactions, deleteTransaction, createTransaction, updateTransaction }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext);
}