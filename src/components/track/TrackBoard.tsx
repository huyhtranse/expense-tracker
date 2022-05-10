import { FC, useContext } from "react";
import TrackItem from "./TrackItem";
import { GlobalContext } from "../../context/GlobalState";
import { useWallet } from "../../context/WalletContext";
import { Transaction } from "../../interface";

const TrackBoard: FC = () => {
  const { tab, setUpdate, selectTab, toggleModal } = useContext(GlobalContext);
  const { transactions } = useWallet();

  const onClickPlus = () => {
    setUpdate(null);
    toggleModal(true);
  }

  return (
    <div className="track-board">
      <nav>
        <ul className="track-nav">
          <li
            className={tab === 1 ? "active-tabs" : ""}
            onClick={() => selectTab(1)}
          >
            <span>Expense</span>
          </li>
          <li
            className={tab === 2 ? "active-tabs" : ""}
            onClick={() => selectTab(2)}
          >
            <span>Income</span>
          </li>
        </ul>
      </nav>
      <div className={tab === 1 ? "active-content" : "content"}>
        {transactions
          .filter((transaction: Transaction) => transaction.amount < 0)
          .map((transaction: Transaction) => (
            <TrackItem key={transaction.id} transaction={transaction} />
          ))}
      </div>
      <div className={tab === 2 ? "active-content" : "content"}>
        {transactions
          .filter((transaction: Transaction) => transaction.amount > 0)
          .map((transaction: Transaction) => (
            <TrackItem key={transaction.id} transaction={transaction} />
          ))}
      </div>
      <div className="btn-add">
        <button onClick={onClickPlus}>+</button>
      </div>
    </div>
  );
};

export default TrackBoard;
