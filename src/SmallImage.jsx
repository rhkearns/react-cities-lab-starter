import React from 'react';

const SmallImage = ({city, src, handleClick}) => {
  return (
    <img
        src={src}
        alt={city}
        className="thumb"
        onClick={() => handleClick(src)}
      />
  )
} 

export default SmallImage