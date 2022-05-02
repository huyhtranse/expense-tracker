import React from 'react'
import Terminal from './track/Terminal'

const Balance = () => {
  return (
    <section>
      <div className='balance'>
        <div>
          {/* <header><p>Expensheet</p></header> */}
          {/* <h3 className='month'>April</h3> */}
          <h1><span className='usd-char'>$</span>9999999</h1>
          <p className='balance-desc'>Current Balance</p>
        </div>
      </div>
      <Terminal/>
    </section>
  )
}

export default Balance