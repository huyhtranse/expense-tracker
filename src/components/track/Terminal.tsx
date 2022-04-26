import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className='terminal__direct'>
        <div className='terminal__direct__icon'>
          <FaLongArrowAltUp />
        </div>
        <div className='terminal__direct__number'>
          <h3>$00000</h3>
          <p>Expense</p>
        </div>
      </div>
      <div className='terminal__direct'>
        <div className='terminal__direct__icon'>
          <FaLongArrowAltDown />
        </div>
        <div className='terminal__direct__number'>
          <h3>$00000</h3>
          <p>Income</p>
        </div>
      </div>
    </div>
  );
}

export default Terminal