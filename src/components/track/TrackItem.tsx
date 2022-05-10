import { FC, useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from '../../interface';

interface TrackItemProps {
  transaction: Transaction
}

const TrackItem: FC<TrackItemProps> = ({ transaction }) => {
  const { toggleModal, setUpdate } = useContext(GlobalContext);
  const selectTrackItem = (transaction?: Transaction) => {
    setUpdate(transaction);
    toggleModal(true);
  }

  return (
    <div className="track-item" onClick={() => selectTrackItem(transaction)}>
      <div className="track-item__icon">
        <FaRegTrashAlt />
      </div>
      <div className="track-item__desc">
        <h2>{transaction.text}</h2>
        <p>{transaction.date}</p>
      </div>
      <h2 className="track-item__price">{`${transaction.amount}$`}</h2>
    </div>
  );
}

export default TrackItem