import { createContext, useReducer } from 'react'
import { Props, State } from '../interface';
import { Reducer } from './Reducer';

export const initialState = {
  tab: 1,
  modal: false,
  updateUser: ''
}

export const GlobalContext = createContext<State | any>(initialState);

export const GlobalProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function selectTab(index: number) {
    dispatch({
      type: "SELECT_TAB",
      payload: index,
    });
  } 

  function toggleModal(toggle: boolean) {
    dispatch({
      type: 'TOGGLE_MODAL',
      payload: toggle
    })
  }

  function setUpdate(update: string) {
    dispatch({
      type: 'UPDATE_MODE',
      payload: update
    })
  }

  return (
    <GlobalContext.Provider  value={{ tab: state.tab, modal: state.modal, selectTab, toggleModal, setUpdate }}>
      {children}
    </GlobalContext.Provider>
  )
}