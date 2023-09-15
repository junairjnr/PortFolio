// import React, { useState } from 'react'
// import Rating from './Rating';

// const Review = () => {
//     const [reviewText, setReviewText] = useState('');
//     const [rating, setRating] = useState(1);

//     const handleReviewTextChange = (event) => {
//         setReviewText(event.target.value);
//     };

//     const handleRatingChange = (newRating) => {
//         setRating(newRating);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform any necessary submit logic here
//         console.log('Review:', reviewText);
//         console.log('Rating:', rating);
//     };

//     return (
//         <div className=''>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Review:</label>
//                     <textarea value={reviewText} onChange={handleReviewTextChange}></textarea>
//                 </div>
//                 <Rating defaultValue={rating} onChange={handleRatingChange} />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };


// export default Review
