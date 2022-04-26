import React from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const TrackItem = () => {
  return (
    <div className="track-item">
      <div className='track-item__icon'>
        <FaRegThumbsDown />
      </div>
      <div className='track-item__desc'>
        <h2>Shopping</h2>
        <p>31-2-2022</p>
      </div>
      <h2 className='track-item__price'>$950</h2>
    </div>
  );
}

export default TrackItem