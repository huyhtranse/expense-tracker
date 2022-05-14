import { FC } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useWallet } from '../../context/WalletContext';

const Terminal:FC = () => {
  const { minus, plus } = useWallet();

  return (
    <div className="terminal">
      <div className='terminal__direct'>
        <div className='terminal__direct__icon'>
          <FaLongArrowAltUp />
        </div>
        <div className='terminal__direct__number'>
          <h3>{minus}$</h3>
          <p>Expense</p>
        </div>
      </div>
      <div className='terminal__direct'>
        <div className='terminal__direct__icon'>
          <FaLongArrowAltDown />
        </div>
        <div className='terminal__direct__number'>
          <h3>{plus}$</h3>
          <p>Income</p>
        </div>
      </div>
    </div>
  );
}

export default Terminal