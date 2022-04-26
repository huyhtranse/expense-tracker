import React from 'react'
import Terminal from './Terminal'
import TrackBoard from './TrackBoard'

const Track = () => {
  return (
    <div className='track'>
      <Terminal/>
      <TrackBoard/>
    </div>
  )
}

export default Track