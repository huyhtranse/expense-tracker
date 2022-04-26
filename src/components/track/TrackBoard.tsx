import React from 'react'
import TrackItem from './TrackItem'

const TrackBoard = () => {
  return (
    <div className='track-board'>
      <nav>
        <ul className='track-nav'>
          <li>Expense</li>
          <li>Income</li>
        </ul>
      </nav>
      <div>
        <TrackItem/>
        <TrackItem/>
        <TrackItem/>
      </div>
    </div>
  )
}

export default TrackBoard