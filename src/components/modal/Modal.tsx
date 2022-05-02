import React, {FC, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Modal: FC = () => {
  const {modal, toggleModal} = useContext(GlobalContext);

  return (
    <>
      {/* <div className={modal ? 'modal modal-active' : 'modal'} onClick={() => toggleModal(false)}></div> */}
      <div id="modal" className={modal ? 'modal-active' : ''}>
        <div id="modal-content">
          <span id='close' onClick={() => toggleModal(false)}>x</span>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="number" id='price' />
            </div>
            <div>
              <button>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal