import React, { useState } from 'react'

const Rating = ({ defaultValue, onChange }) => {
    const [rating, setRating] = useState(defaultValue);
  
    const handleRatingChange = (event) => {
      const  newRating = parseInt(event.target.value, 10);
      setRating(newRating);
      onChange(newRating);
    };
  
    return (
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={handleRatingChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    );
  };
  

export default Rating
