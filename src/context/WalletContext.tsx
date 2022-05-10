import { createContext, useContext, useEffect, useReducer } from "react";
import { addDoc, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Props, TransContextType } from "../interface";
import { Reducer } from "./Reducer";

export const initialTransState = {
  transactions: []
}

export const WalletContext = createContext<TransContextType | any>(initialTransState);

export const WalletProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialTransState);
  const transCollectionRef = collection(db, "transactions");
  
  useEffect(() => {
    const transCollectionRef = collection(db, "transactions");

    const getTrans = async () => {
      const data = await getDocs(transCollectionRef);
      fetchTransactions(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getTrans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.transactions]);

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
    <WalletContext.Provider value={{ transactions: state.transactions, deleteTransaction, createTransaction, updateTransaction }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext);
}