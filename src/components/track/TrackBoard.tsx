import { FC, useContext } from "react";
import TrackItem from "./TrackItem";
import { GlobalContext } from "../../context/GlobalState";

const TrackBoard: FC = () => {
  const { tab, selectTab, toggleModal } = useContext(GlobalContext);

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
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
      <div className={tab === 2 ? "active-content" : "content"}>
        <TrackItem />
        <TrackItem />
        <TrackItem />
      </div>
      <div className="btn-add">
        <button onClick={() => toggleModal(true)}>+</button>
      </div>
    </div>
  );
};

export default TrackBoard;
