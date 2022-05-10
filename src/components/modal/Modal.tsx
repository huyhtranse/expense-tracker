import React, {ChangeEvent, FC, useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { useWallet } from '../../context/WalletContext';

const Modal: FC = () => {
  const { tab, modal, updateUser, toggleModal} = useContext(GlobalContext);
  const { createTransaction, updateTransaction } = useWallet();
  const [ text, setText ] = useState<string>('');
  const [ amount, setAmount ] = useState<number | string>('');

  useEffect(() => {
    if (updateUser) {
      const { text, amount } = updateUser;
      setText(text);
      setAmount(amount)
    } 

    return () => {
      setText('');
      setAmount('');
    }
  }, [updateUser])

  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();

    if (updateUser) {
      const { id } = updateUser();
      updateTransaction(id, text, amount);
    } else {
      createTransaction(text, amount);
    }
    toggleModal(false)
  }

  return (
    <>
      {/* <div className={modal ? 'modal modal-active' : 'modal'} onClick={() => toggleModal(false)}></div> */}
      <div id="modal" className={modal ? "modal-active" : ""}>
        <div id="modal-content">
          <span id="close" onClick={() => toggleModal(false)}>
            x
          </span>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text">Name</label>
              <input type="text" id="text" onChange={(e) => setText(e.target.value)} value={text} required />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" onChange={(e) => setAmount(e.target.value)} value={amount} required  />
            </div>
            <div>
              <button>
                {updateUser ? "Update" : tab === 1 ? "Expenses" : "Income"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal